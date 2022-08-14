/**
 * Fetch all posts
 */
export const getAllPosts = async ({ client, pageSize = 100, page = 1 }) => {
  const posts = await client.getByType("blogPost", {
    orderings: {
      field: "my.blogPost.publishDate",
      direction: "desc",
    },
    fetchLinks: ["teamMember.name", "teamMember.avatar", "blogCategory.title"],
    // lang: "fr-fr",
    pageSize,
    page,
  });

  return posts.results;
};
