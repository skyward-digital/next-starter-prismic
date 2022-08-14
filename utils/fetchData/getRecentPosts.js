/**
 * Fetch the most recent blog posts limited by pagesize
 */
export const getRecentPosts = async ({ client, pageSize = 3 }) => {
  const recentPosts = await client.getByType("blogPost", {
    orderings: {
      field: "my.blogPost.publishDate",
      direction: "desc",
    },
    fetchLinks: ["teamMember.name", "teamMember.avatar"],
    // lang: "fr-fr",
    pageSize,
  });

  return recentPosts.results;
};
