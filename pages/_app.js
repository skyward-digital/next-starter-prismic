import NextApp from "next/app";
import { PrismicToolbar } from "@prismicio/react";

import "../styles/index.css";
import { apiEndpoint } from "./../prismic"; // import the endpoint name from where it's defined

const prismicRepoName = /([a-zA-Z0-9-]+)?(\.cdn)?\.prismic\.io/.exec(
  apiEndpoint
)[1]; //Regex to get repo ID

export default class MyApp extends NextApp {
  render() {
    const { Component, pageProps, props } = this.props;
    return (
      <>
        {/* Prismic Preview */}
        <PrismicToolbar repositoryName={prismicRepoName} />

        {/* Analytics */}
        {/* <Script strategy="lazyOnload">
          Analytics tag goes here
        </Script> */}

        <Component {...pageProps} {...props} />
      </>
    );
  }
}
