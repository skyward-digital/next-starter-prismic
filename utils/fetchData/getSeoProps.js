/**
 * Create our SEO properties from the page, or fallback values
 */
export const getSeoProps = ({
  page: { metaTitle, metaDescription, metaImage, article = false },
  fallback,
  url,
  lang,
}) => {
  return {
    metaTitle: metaTitle || fallback?.metaTitle,
    metaDescription: metaDescription || fallback?.metaDescription,
    metaImage: metaImage?.url || fallback?.metaImage?.url,
    article,
    url,
    lang,
  };
};
