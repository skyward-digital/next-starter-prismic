import "../styles/index.css";

import React from "react";
import NextApp from "next/app";
import Script from "next/script";

import { apiEndpoint } from "./../prismic-configuration"; // import the endpoint name from where it's defined
const prismicRepoName = /([a-zA-Z0-9-]+)?(\.cdn)?\.prismic\.io/.exec(
  apiEndpoint
)[1]; //Regex to get repo ID

export default class MyApp extends NextApp {
  render() {
    const { Component, pageProps, props } = this.props;
    return (
      <>
        {/* Prismic Preview */}
        <Script
          strategy="lazyOnload"
          src={`//static.cdn.prismic.io/prismic.js?repo=${prismicRepoName}&new=true`}
        />

        {/* Analytics */}
        {/* <Script strategy="lazyOnload">
          Analytics tag goes here
        </Script> */}

        <Component {...pageProps} {...props} />
      </>
    );
  }
}
