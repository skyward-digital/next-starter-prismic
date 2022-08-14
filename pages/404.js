import { createClient } from "../prismic";
import { getLayoutProps, getSeoProps } from "../utils/fetchData";
import { Layout, Link } from "../components";

const NotFound = ({ lang, layout }) => {
  const seo = getSeoProps({
    page: {
      metaTitle: "404 - Page not found",
      metaDescription: "",
      metaImage: "",
    },
    url: "/404",
    lang,
    // fallback: layout.defaultSeo.data,
  });

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
  const layout = await getLayoutProps({ client });

  const page = await client.getSingle("homepage");

  return {
    props: {
      layout,
      ...page,
    },
  };
};

export default NotFound;
