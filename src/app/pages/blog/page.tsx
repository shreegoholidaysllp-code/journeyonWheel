"use client";

import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useRouter } from "next/navigation";
import { blogPosts } from "@/data/blogData";
import Image from "next/image";
import { useState } from "react";

export default function BlogPage() {
  const router = useRouter();

  const featuredBlog = blogPosts[0];
  const blogs = blogPosts.slice(1);

  const categories = [
    "All Posts",
    "Travel Guide",
    "City Guide",
    "Tour Package",
    "Weekend Trip",
    "Food & Travel",
    "History",
    "Culture",
  ];

  const [activeCategory, setActiveCategory] = useState("All Posts");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-teal-100/40 py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Tag className="h-4 w-4 text-teal-600" />
              Travel Stories & Guides
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-gray-900 leading-tight mb-4">
              Explore <span className="text-teal-600">North India</span>
            </h1>

            <p className="text-lg text-gray-600">
              Discover hidden gems, spiritual destinations, and travel guides for your next road trip.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-8 border-b bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-teal-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BLOG */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-semibold text-gray-900 mb-6">
            Featured Post
          </h2>

          <div className="grid lg:grid-cols-2 bg-white border-2 rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden border-gray-200 hover:border-teal-400">
            {/* Image */}
            <div className="relative h-64 lg:h-full bg-gray-200">
              {featuredBlog.image ? (
                <Image
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                  No Image Available
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold mb-3 w-fit">
                {featuredBlog.category}
              </span>

              <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-gray-900 mb-4 leading-tight">
                {featuredBlog.title}
              </h3>

              <p className="text-gray-600 text-sm lg:text-base mb-5">
                {featuredBlog.excerpt}
              </p>

              <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                <User className="h-4 w-4" />
                {featuredBlog.author}
                <Calendar className="h-4 w-4 ml-4" />
                {featuredBlog.date}
                <Clock className="h-4 w-4 ml-4" />
                {featuredBlog.readTime}
              </div>

              <button
                onClick={() => router.push(`/pages/blog/${featuredBlog.id}`)}
                className="w-fit inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl transition shadow-md"
              >
                Read More
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-semibold text-gray-900 mb-6">
            Latest Posts
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="border-2 border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-teal-400 overflow-hidden transition group bg-white"
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-200">
                  {blog.image ? (
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                      No Image Available
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold mb-2 inline-block">
                    {blog.category}
                  </span>

                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2 leading-tight group-hover:text-teal-700 transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {blog.excerpt}
                  </p>

                  <button
                    onClick={() =>
                      router.push(`/pages/blog/${featuredBlog.id}`)
                    }
                    className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-sm"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
