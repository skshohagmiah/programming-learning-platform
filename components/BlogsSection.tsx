// components/BlogSection.tsx
import { ClockIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const dummyBlogPosts = [
  {
    title: 'Understanding JavaScript Closures',
    summary: 'Learn the fundamentals of closures in JavaScript and how they impact your code.',
    imageSrc: '/blog-js-closure.jpg', // Replace with a relevant image
  },
  {
    title: 'Python for Data Analysis: A Beginner\'s Guide',
    summary: 'Discover how Python can be used for data analysis and visualization with popular libraries like pandas.',
    imageSrc: '/blog-python-data.jpg',
  },
  {
    title: 'Building Your First Web Application with React',
    summary: 'Get started with React, a powerful JavaScript library for building user interfaces.',
    imageSrc: '/blog-react.jpg',
  },
  // Add more blog posts as needed
];

export default function BlogSection() {
  return (
    <section className="py-16  bg-blue-50 dark:bg-slate-900">
    <div className="container mx-auto px-4 max-w-7xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Insights and Inspiration from Our Blog
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyBlogPosts.map((post) => (
          <Link key={post.title} href="#" className="group"> {/* Link to blog post */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden dark:bg-gray-800 transition-transform duration-300 transform hover:scale-105">
              <Image
                src={post.imageSrc}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:underline">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{post.summary}</p>
                <div className="flex items-center mt-4 space-x-2 text-gray-500 dark:text-gray-400">
                  <ClockIcon className="h-4 w-4" />
                  <span>July 5, 2024</span> {/* Replace with actual date */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
  );
}
