'use client';

import { useState } from 'react';
import type { Comment } from '@/data/reviews';

interface CommentSectionProps {
  productId: string;
  initialComments: Comment[];
}

// CRITICAL SECURITY: URL/Domain validation
const validateComment = (text: string): { valid: boolean; error?: string } => {
  // Block ALL URLs and domains
  const urlPattern = /https?:\/\/|www\.|\.com|\.id|\.net|\.org|\.co\.id|\.asia|\.io|\.me|\.tv|\.cc/gi;
  
  if (urlPattern.test(text)) {
    return {
      valid: false,
      error: 'Link tidak diperbolehkan dalam komentar',
    };
  }

  // Block HTML tags
  const htmlPattern = /<[^>]*>/g;
  if (htmlPattern.test(text)) {
    return {
      valid: false,
      error: 'HTML tags tidak diperbolehkan',
    };
  }

  return { valid: true };
};

function StarRatingInput({ rating, onChange }: { rating: number; onChange: (rating: number) => void }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className="transition-transform hover:scale-125"
        >
          <span
            className={`text-2xl cursor-pointer ${
              star <= rating ? 'text-[#ffc400]' : 'text-gray-600'
            }`}
          >
            ★
          </span>
        </button>
      ))}
    </div>
  );
}

function CommentCard({ comment }: { comment: Comment }) {
  // Generate initials from name
  const initials = comment.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-4 hover:border-white/20 transition-colors">
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#ff1744] to-[#00e5ff] rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">{initials}</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="text-white font-bold text-sm">{comment.name}</h4>
              <p className="text-xs text-gray-500">{comment.date}</p>
            </div>
            
            {/* Report Button */}
            <button
              className="text-xs text-gray-500 hover:text-[#ff1744] transition-colors"
              title="Laporkan komentar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </button>
          </div>

          {/* Rating */}
          {comment.rating && (
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-sm ${
                    star <= comment.rating! ? 'text-[#ffc400]' : 'text-gray-600'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          )}

          {/* Comment Text */}
          <p className="text-gray-300 text-sm leading-relaxed">{comment.text}</p>
        </div>
      </div>
    </div>
  );
}

export default function CommentSection({ productId, initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    text: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Validation
    if (!formData.name.trim()) {
      setError('Nama harus diisi');
      return;
    }

    if (!formData.email.trim()) {
      setError('Email harus diisi');
      return;
    }

    if (!formData.text.trim()) {
      setError('Komentar harus diisi');
      return;
    }

    if (formData.text.length > 500) {
      setError('Komentar maksimal 500 karakter');
      return;
    }

    // CRITICAL: URL/Domain validation
    const validation = validateComment(formData.text);
    if (!validation.valid) {
      setError(validation.error || 'Komentar tidak valid');
      return;
    }

    // Create new comment
    const newComment: Comment = {
      id: `c-${Date.now()}`,
      name: formData.name.trim(),
      email: formData.email.trim(),
      rating: formData.rating || undefined,
      text: formData.text.trim(),
      date: new Date().toISOString().split('T')[0],
    };

    // Add to comments (in real app, this would be API call)
    setComments([newComment, ...comments]);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      rating: 0,
      text: '',
    });
    
    setSuccess(true);
    
    // Hide success message after 3s
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="mt-12 pt-12 border-t border-white/10">
      <div className="mb-8">
        <h2 className="text-3xl font-bebas text-white mb-2 uppercase tracking-tight">
          💬 Komentar ({comments.length})
        </h2>
        <p className="text-gray-400 text-sm">
          Bagikan pengalaman atau pertanyaan kamu tentang produk ini
        </p>
      </div>

      {/* Comment Form */}
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bebas text-white mb-4 uppercase">Tulis Komentar</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">
                Nama <span className="text-[#ff1744]">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#ff1744] focus:outline-none transition-colors"
                placeholder="Nama kamu"
                maxLength={50}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">
                Email <span className="text-[#ff1744]">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#ff1744] focus:outline-none transition-colors"
                placeholder="email@example.com"
              />
              <p className="text-xs text-gray-500 mt-1">Email tidak akan dipublikasikan</p>
            </div>
          </div>

          {/* Rating (Optional) */}
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">
              Rating (Opsional)
            </label>
            <StarRatingInput
              rating={formData.rating}
              onChange={(rating) => setFormData({ ...formData, rating })}
            />
          </div>

          {/* Comment Text */}
          <div>
            <label htmlFor="comment" className="block text-sm font-bold text-gray-300 mb-2">
              Komentar <span className="text-[#ff1744]">*</span>
            </label>
            <textarea
              id="comment"
              value={formData.text}
              onChange={(e) => setFormData({ ...formData, text: e.target.value })}
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#ff1744] focus:outline-none transition-colors resize-none"
              placeholder="Bagikan pengalaman atau pertanyaan kamu..."
              rows={4}
              maxLength={500}
            />
            <div className="flex items-center justify-between mt-1">
              <p className="text-xs text-gray-500">
                Maksimal 500 karakter. Link tidak diperbolehkan.
              </p>
              <p className="text-xs text-gray-500">
                {formData.text.length}/500
              </p>
            </div>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
              <p className="text-red-400 text-sm font-bold">{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-3">
              <p className="text-green-400 text-sm font-bold">
                ✓ Komentar berhasil dikirim!
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-[#ff1744] hover:bg-[#ff1744]/80 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,23,68,0.5)]"
          >
            Kirim Komentar
          </button>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Belum ada komentar. Jadilah yang pertama!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </section>
  );
}
