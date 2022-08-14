// import { NewsletterForm } from "../../../components";
import { BlogContents } from "../BlogContents";

export const BlogSidebar = ({ data }) => {
  return (
    <aside className="col-span-2 lg:order-last">
      <div className="sticky top-0 pt-8 xl:pb-8">
        <div className="xl:mb-10 grid gap-2">
          <h2>Table of Contents</h2>
          <BlogContents slices={data} />
        </div>

        {/* <div className="relative z-10 hidden w-full px-10 py-8 bg-gray-100 rounded-lg xl:block dark:bg-black">
          <h2 className="mb-4 text-2xl">Join our newsletter</h2>
          <p className="hidden mb-4 text-lg font-light 2xl:block">
            No spam. Just the latest releases, tips, and interesting articles,
            in your inbox when they release.
          </p>

          <NewsletterForm
            placeholder="Enter your email"
            submitLabel="Subscribe"
          />
        </div> */}
      </div>
    </aside>
  );
};
