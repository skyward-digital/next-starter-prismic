import React from "react";
import { SocialProvider } from "../../context/SocialContext";
import { Seo } from "../SEO";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = ({ seo, header, footer, socials, children }) => {
  return (
    <SocialProvider socials={{ socials }}>
      <div className="relative">
        <Seo {...seo} />
        <Header {...header.data} />
        <main>{children}</main>
        <Footer {...footer.data} />
      </div>
    </SocialProvider>
  );
};
