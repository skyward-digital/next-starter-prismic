export const getAllCategories = async ({
  client,
  pageSize = 100,
  page = 1,
}) => {
  const categories = await client.getByType("blogCategory", {
    // orderings: {
    //   field: "document.publishDate",
    //   direction: "desc",
    // },
    // fetchLinks: ["teamMember.name", "teamMember.avatar"],
    // lang: "fr-fr",
    pageSize,
    page,
  });

  return categories.results;
};
