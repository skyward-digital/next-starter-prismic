import React from "react";
import { FeaturedPost } from "./FeaturedPost";
import { BlogList } from "./BlogList";
import { BlogSidebar } from "./BlogSidebar";

export const BlogFeed = ({ posts, categories }) => {
  if (!posts.length) return null;

  const [featuredPost, ...postList] = posts;

  return (
    <section className="">
      <div className="container mx-auto">
        <div className="flex items-stretch gap-6">
          <div className="w-2/3">
            <FeaturedPost {...featuredPost} />
            <BlogList posts={postList} />
          </div>
          <div className="w-1/3">
            <BlogSidebar categories={categories} sticky />
          </div>
        </div>
      </div>
    </section>
  );
};
