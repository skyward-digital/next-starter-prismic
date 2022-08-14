import { SliceZone } from "@prismicio/react";
import { components } from "../../slices/blog";
import { calculateReadTimeFromSlices } from "../../utils/calculateReadTime";
import { BlogHero } from "./BlogHero";
import { BlogSidebar } from "./BlogSidebar";
import { NewsletterForm } from "..";

export const BlogPage = ({
  title,
  description,
  featuredImage,
  publishDate,
  updatedDate,
  author,
  category,
  slices,
  // ...rest
}) => {
  const heroData = {
    title,
    description,
    featuredImage,
    publishDate,
    updatedDate,
    author,
    category,
    readTime: calculateReadTimeFromSlices(slices),
  };

  return (
    <div>
      <BlogHero {...heroData} />

      <div className="container grid md:grid-cols-5 md:gap-16 xl:gap-32">
        {/* The sidebar goes first in a herarchical order (the contents should come before the article) */}
        <BlogSidebar data={slices} />
        <article className="md:col-span-3 md:order-first">
          <SliceZone slices={slices} components={components} />

          {/* <div className="relative z-10 w-full p-10 bg-gray-100 rounded-lg dark:bg-black xl:hidden">
            <h2 className="mb-4 text-2xl">Join our newsletter</h2>
            <p className="mb-4 text-lg font-light">
              No spam. Just the latest releases, tips, and interesting articles,
              in your inbox when they release.
            </p>

            <NewsletterForm
              placeholder="Enter your email"
              submitLabel="Subscribe"
            />
          </div> */}
        </article>
      </div>
    </div>
  );
};

export default BlogPage;

export const blogPageFetchLinks = [
  "teamMember.name",
  "teamMember.avatar",
  "blogCategory.title",
];
