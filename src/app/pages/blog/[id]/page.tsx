"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { blogPosts } from "@/data/blogData";
import Image from "next/image";

export default function BlogDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const blog = blogPosts.find((b) => b.id.toString() === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Blog not found.
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((b) => b.id !== blog.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {/* IMAGE */}
        <div className="w-full h-64 sm:h-80 lg:h-[450px] bg-gray-100 rounded-3xl mb-10 relative overflow-hidden shadow-lg">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>

        {/* HEADER INFO */}
        <div className="mb-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full font-semibold text-sm mb-4">
            {blog.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-teal-600" />
              <span className="font-medium text-gray-900">{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-teal-600" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-teal-600" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <article className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed">
          <p className="text-xl text-gray-600 font-medium mb-8 border-l-4 border-teal-500 pl-4 italic">
            {blog.content.intro}
          </p>

          {blog.content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 mt-8">
                {section.heading}
              </h2>
              <p className="mb-4">{section.body}</p>
            </div>
          ))}

          <div className="mt-10 p-6 bg-teal-50 rounded-2xl border border-teal-100">
            <h3 className="text-xl font-bold text-teal-800 mb-2">Conclusion</h3>
            <p className="text-gray-700 m-0">{blog.content.conclusion}</p>
          </div>
        </article>

        {/* AUTHOR BIO */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-gray-50 p-8 rounded-2xl">
            <div className="w-20 h-20 bg-teal-200 rounded-full flex items-center justify-center text-teal-700 font-bold text-2xl shrink-0">
              {blog.author.charAt(0)}
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                About the Author
              </h3>
              <p className="text-gray-600 mb-4">{blog.authorBio}</p>
              <p className="text-sm text-teal-600 font-semibold">
                Written by {blog.author}
              </p>
            </div>
          </div>
        </div>

        {/* RELATED POSTS */}
        <div className="mt-20 pb-20">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
            Related Posts
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <div
                key={post.id}
                className="group cursor-pointer"
                onClick={() => router.push(`/pages/blog/${post.id}`)}
              >
                <div className="h-48 bg-gray-200 rounded-xl overflow-hidden mb-4 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="text-xs font-bold text-teal-600 mb-2 uppercase tracking-wide">
                  {post.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-teal-600 transition">
                  {post.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
