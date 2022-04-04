import "../styles/index.css";

import Script from "next/script";
import Link from "next/link";
// import { ThemeProvider } from "next-themes";
import { PrismicProvider, PrismicToolbar } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismic";

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      {/* Visitor Analytics */}
      <Script strategy="lazyOnload">
        {`(function(v,i,s,a){if(!v._visaSettings){v._visaSettings={};}v._visaSettings["72d4bfc7-fc35-11eb-b589-901b0edac50a"]={v:"0.3",s:"72d4bfc7-fc35-11eb-b589-901b0edac50a",a:"1"};_v=i.getElementsByTagName("body")[0];_a=_v;_i=i.createElement("script");_s=_i;_s.defer="defer";_s.src=s+a+v._visaSettings["72d4bfc7-fc35-11eb-b589-901b0edac50a"].v;_a.appendChild(_s);})(window,document,"//app-worker.visitor-analytics.io/main",".js?s=72d4bfc7-fc35-11eb-b589-901b0edac50a&v=")`}
      </Script>

      <PrismicPreview repositoryName={repositoryName}>
        {/* <ThemeProvider enableSystem={true} attribute="class"> */}
        <Component {...pageProps} />
        {/* </ThemeProvider> */}
      </PrismicPreview>

      <PrismicToolbar repositoryName={repositoryName} />
    </PrismicProvider>
  );
}
