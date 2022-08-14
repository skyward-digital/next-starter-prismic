import { RichText } from "../..";

/**
 * A list of category filter buttons that the user can select
 * @param categories
 * @param currentCategory
 * @param setCurrentCategory
 * @param posts
 */
const BlogCategories = ({
  categories,
  currentCategory,
  setCurrentCategory,
  posts,
}) => {
  // Only show categories which have active posts
  const filteredCategories = categories
    .filter((category) =>
      posts.some((post) => post.data.category.uid === category.uid)
    )
    .sort((a, b) => {
      if (a.uid < b.uid) return -1;
      if (a.uid > b.uid) return 1;
      return 0;
    });

  return (
    <ul className="flex flex-wrap items-center lg:flex-nowrap gap-4">
      <li>
        <CategoryButton
          active={currentCategory === ""}
          onClick={() => setCurrentCategory("")}
        >
          View All
          <span className="text-gray-500">{posts.length}</span>
        </CategoryButton>
      </li>
      {filteredCategories.map((category) => (
        <li key={category.id}>
          <CategoryButton
            active={currentCategory === category.uid}
            onClick={() => setCurrentCategory(category.uid)}
          >
            <RichText field={category.data.title} plainText />
            <span className="text-gray-500">
              {
                posts.filter((post) => post.data.category.uid === category.uid)
                  .length
              }
            </span>
          </CategoryButton>
        </li>
      ))}
    </ul>
  );
};

export default BlogCategories;

const CategoryButton = ({ active, ...props }) => (
  <button
    className={`btn btn-tertiary rounded-md whitespace-nowrap text-sm ${
      active
        ? "bg-gray-100 dark:bg-gray-800"
        : "text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
    }`}
    {...props}
  />
);
