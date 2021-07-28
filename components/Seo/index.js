import React from "react";
import Head from "next/head";

export const Seo = ({
  meta_title,
  meta_description,
  meta_image,
  url,
  article,
  author,
  lang,
}) => {
  const absoluteUrl = `https://skyward.digital/${url ? url : ""}`;

  return (
    <Head>
      <title>{meta_title}</title>
      <meta lang={lang} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {meta_description && (
        <meta name="description" content={meta_description} />
      )}
      <meta name="og:title" content={meta_title} />
      {meta_description && (
        <meta name="og:description" content={meta_description} />
      )}
      <meta name="og:type" content={article ? "article" : "website"} />
      {meta_image && <meta name="og:image" content={meta_image} />}
      {meta_image && <meta name="og:image:alt" content={meta_title} />}
      <meta name="og:url" content={absoluteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      {author && <meta name="twitter:creator" content={author} />}
      <meta name="twitter:title" content={meta_title} />
      {meta_description && (
        <meta name="twitter:description" content={meta_description} />
      )}
      {meta_image && <meta name="twitter:image" content={meta_image} />}
      {meta_image && <meta name="twitter:image:alt" content={meta_title} />}
    </Head>
  );
};
