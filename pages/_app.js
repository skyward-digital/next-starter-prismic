import "@fontsource/inter/latin-300.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-700.css";
import "../styles/index.css";

// import Script from "next/script";
import { Link } from "../components";
import { QueryClient, QueryClientProvider } from "react-query";
import { PrismicProvider, PrismicToolbar } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismic";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href} {...props} />
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </PrismicPreview>

      <PrismicToolbar repositoryName={repositoryName} />
    </PrismicProvider>
  );
}
