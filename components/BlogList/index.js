import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BlogCard from "./BlogCard";
import BlogCategories from "./BlogCategories";

const BlogList = ({ posts, categories }) => {
  const router = useRouter();

  const [currentCategory, setCurrentCategory] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  // When the category changes, update the posts & the URL
  useEffect(() => {
    if (currentCategory !== "") {
      setFilteredPosts(
        posts.filter((post) => post.data.category.uid === currentCategory)
      );

      // Wrapping if required for testing
      if (router) {
        router.push(`/blog?category=${currentCategory}`, undefined, {
          shallow: true,
        });
      }
    } else {
      setFilteredPosts(posts);

      // Wrapping if required for testing
      if (router) {
        router.push(`/blog`, undefined, { shallow: true });
      }
    }
  }, [currentCategory]);

  console.log({ posts });

  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <BlogCategories
          categories={categories}
          posts={posts}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <div className="mt-16 grid md:grid-cols-2 gap-20">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
