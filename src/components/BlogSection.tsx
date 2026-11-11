import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/translationsData';
import { BookOpen, Clock, Calendar, ArrowRight, X } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-16 lg:py-24 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-wider text-[#18A6A0] uppercase">
              Linguistic Insights & Guides
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C45] tracking-tight">
              Translation & Regulatory Resources
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Expert guides written by senior translators to assist Indian students, advocates, and businesses in preparing compliant multilingual documents.
            </p>
          </div>

          <div className="text-xs font-medium text-slate-500 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#18A6A0]" />
            <span>Educational Articles & Regulatory Updates</span>
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#18A6A0] hover:shadow-md transition-all group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-semibold text-[#18A6A0] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#142C45] group-hover:text-[#2855A6] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px]">{post.date}</span>
                <span className="font-bold text-[#142C45] group-hover:text-[#2855A6] inline-flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A45C]" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto relative animate-in fade-in duration-200">
              <div className="flex items-start justify-between pb-4 border-b border-slate-200">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#18A6A0] uppercase tracking-wider">
                    {selectedPost.category} · {selectedPost.readTime}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#142C45]">
                    {selectedPost.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-1 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedPost.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Published by TransLumina Editorial Board
                </span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#142C45] rounded-lg hover:bg-[#1f3f61]"
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
