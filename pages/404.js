import { Client } from "../prismic-configuration";
import { useGetStaticProps } from "next-slicezone/hooks";

import { Layout } from "../components/Layout";
import { Link } from "../components/Link";

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
        <h1 className="mb-6 text-5xl font-extrabold lg:text-6xl">
          404 page not found
        </h1>
        <p className="mb-6 text-xl">
          The page you were looking for can't be found
        </p>
        <Link href="/" className="btn btn-xl btn-primary">
          Return home
        </Link>
      </div>
    </Layout>
  );
};

// Fetch content from prismic - previews but doesn't hot reload
export const getStaticProps = useGetStaticProps({
  client: Client(),
  queryType: "single",
  type: "homepage",
});

export default NotFound;
