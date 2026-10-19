import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";

// Next.js ko batane ke liye ke kaunse pages generate karne hain
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // URL se slug utha kar us blog ko dhoondein
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound(); // Agar blog na mile toh 404 page dikhayein
  }

  return (
    <div className="py-24 bg-white dark:bg-gray-950 transition-colors min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        {/* Blog Header */}
        <div className="mb-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-sm font-semibold mb-6">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 3 min read</span>
          </div>
        </div>

        {/* Fake Hero Image */}
        <div className="w-full h-64 sm:h-80 rounded-2xl bg-gradient-to-br from-brand-500 to-purple-600 mb-10 shadow-lg" />

        {/* Blog Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="text-xl font-medium mb-6 text-gray-900 dark:text-white">
            {post.excerpt}
          </p>
          <p>
            {post.content}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </div>

        {/* Author Box */}
        <div className="mt-16 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
            M
          </div>
          <div>
            <p className="font-bold text-gray-900 dark:text-white text-lg">Written by {post.author}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Founder & Lead Developer at Nexus-Pro</p>
          </div>
        </div>

      </div>
    </div>
  );
}