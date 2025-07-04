"use client";

import BlogGrid from "./BlogGrid";

export default function BlogsClient({ blogPosts }) {
  return <BlogGrid posts={blogPosts} />;
}