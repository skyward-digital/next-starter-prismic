import "../styles/index.css";

import React from "react";
import NextApp from "next/app";
import { Client } from "../prismic-configuration";

export default class MyApp extends NextApp {
  static async getInitialProps() {
    const header = (await Client().getSingle("header")) || {};
    const footer = (await Client().getSingle("footer")) || {};
    const socials = (await Client().getSingle("socials")) || {};
    return {
      props: {
        layout: {
          header,
          footer,
          socials,
        },
      },
    };
  }

  render() {
    const { Component, pageProps, props } = this.props;
    // console.log(props.header);
    return <Component {...pageProps} {...props} />;
  }
}
