import React from "react";
import { Seo } from "../Seo";
// import { Header } from "../Header/Header";
// import { Footer } from "../Footer/Footer";

export const Layout = ({ seo, data, header, children }) => {
  // const footer = {
  //   linkGroup: data.footer_body,
  //   socials: [
  //     { name: "Facebook link", ...data.facebook_social_link },
  //     { name: "LinkedIn link", ...data.linkedin_social_link },
  //     { name: "Twitter link", ...data.twitter_social_link },
  //     { name: "Email link", ...data.email_address },
  //   ],
  //   addresses: data.addresses,
  // };

  return (
    <div className="bg-gray-50">
      <Seo {...seo} />
      {/* <Header {...header} /> */}
      <main>{children}</main>
      {/* <Footer {...footer} /> */}
    </div>
  );
};
