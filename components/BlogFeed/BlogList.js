import React from "react";
import { BlogCard } from "../BlogCard";

export const BlogList = ({ posts }) => (
  <div>
    {posts.map((blogPost) => (
      <BlogCard key={blogPost.id} {...blogPost} />
    ))}
  </div>
);
