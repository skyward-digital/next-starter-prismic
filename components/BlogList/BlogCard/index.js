import { asDate } from "@prismicio/helpers";
import { format } from "date-fns";
import { RichText, Image, Link } from "../..";

const BlogCard = ({ post }) => {
  const { featuredImage, title, description, author, publishDate, category } =
    post.data;

  return (
    <Link href={post} className="grid xl:grid-cols-2 gap-8">
      <Image {...featuredImage} width={456} height={300} />
      <div className="py-4">
        <RichText
          field={category?.data?.title}
          plainText
          as="p"
          className="mb-2 text-sm text-gray-500 dark:text-gray-400"
        />

        <RichText field={title} plainText as="h2" className="mb-3 text-2xl" />
        <RichText
          field={description}
          plainText
          as="p"
          className="mb-8 text-lg font-light text-gray-700 dark:text-gray-300 line-clamp-3"
        />

        <div className="flex items-center gap-3">
          {/* <Image
            {...author.data.avatar}
            width={48}
            height={48}
            className="rounded-full"
          /> */}
          <div>
            {/* <RichText field={author.data.name} /> */}
            {publishDate && (
              <p className="text-gray-600 dark:text-gray-400">
                {format(asDate(publishDate), "d MMMM, yyyy")}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
