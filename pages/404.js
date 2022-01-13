import { createClient } from "../prismic";
// import { useGetStaticProps } from "next-slicezone/hooks";

import { Layout, Link } from "../components";

const NotFound = ({ lang, layout }) => {
  const seo = {
    metaTitle: "404 - Page not found",
    metaDescription: "",
    metaImage: "",
    url: "/404",
    article: false,
    lang: lang,
  };

  return (
    <Layout seo={seo} {...layout}>
      <div className="container my-16 text-center lg:my-40">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight lg:text-6xl">
          404 page not found
        </h1>
        <p className="mb-6 text-xl">
          The page you were looking for can't be found
        </p>
        <Link href="/" className="btn btn-primary btn-xl">
          Return home
        </Link>
      </div>
    </Layout>
  );
};

// Fetch content from prismic - previews but doesn't hot reload
export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  // Default Layout components reused across the site
  // If a singleton document is missing, `getStaticProps` will throw a NotFoundError.
  const seo = await client.getSingle("defaultSeo");
  const header = await client.getSingle("header");
  const footer = await client.getSingle("footer");
  const socials = await client.getSingle("socials");
  const page = await client.getSingle("homepage");

  return {
    props: {
      layout: {
        seo,
        header,
        footer,
        socials,
      },
      ...page,
    },
  };
};

export default NotFound;
