import React from "react";
import { Seo } from "../Seo";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = ({ seo, header, footer, socials, children }) => {
  return (
    <div className="bg-gray-50">
      <Seo {...seo} />
      <Header {...header} />
      <main>{children}</main>
      <Footer
        logos={{ header_logo: header.data.header_logo }}
        socials={socials}
        {...footer}
      />
    </div>
  );
};
