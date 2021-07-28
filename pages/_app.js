import "../styles/index.css";

import React from "react";
import NextApp from "next/app";
import { Client } from "../prismic-configuration";

export default class MyApp extends NextApp {
  static async getInitialProps(appCtx) {
    const header = (await Client().getSingle("header")) || {};
    return {
      props: {
        header: header,
      },
    };
  }

  render() {
    const { Component, pageProps, props } = this.props;
    // console.log(props.header);
    return <Component {...pageProps} header={props.header} />;
  }
}
