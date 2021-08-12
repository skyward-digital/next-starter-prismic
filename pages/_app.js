import "../styles/index.css";

import React from "react";
import NextApp from "next/app";
import Prismic from "@prismicio/client";
import { Client } from "../prismic-configuration";

export default class MyApp extends NextApp {
  static async getInitialProps() {
    //Default Layout components reused across the site
    const seo = (await Client().getSingle("defaultSeo")) || {};
    const header = (await Client().getSingle("header")) || {};
    const footer = (await Client().getSingle("footer")) || {};
    const socials = (await Client().getSingle("socials")) || {};

    //blog categories passed globally
    const blogCategories = await Client().query(
      Prismic.Predicates.at("document.type", "blog_category")
    );

    return {
      props: {
        layout: {
          seo,
          header,
          footer,
          socials,
        },
        blogCategories,
      },
    };
  }

  render() {
    const { Component, pageProps, props } = this.props;
    return <Component {...pageProps} {...props} />;
  }
}
