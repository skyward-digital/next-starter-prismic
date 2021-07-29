import React from "react";
import { RichText, Link } from "prismic-reactjs";

const CustomerLogos = ({ slice }) => (
  <section>
    <div className="container my-12">
      <div className="mb-8 text-center">
        {slice.primary.title && (
          <div className="mb-4 text-4xl">
            {RichText.render(slice.primary.title)}
          </div>
        )}
        {slice.primary.description && (
          <RichText render={slice.primary.description} />
        )}
      </div>

      <div className="grid grid-cols-5 gap-4">
        {slice?.items?.map((item, i) =>
          item.link ? (
            <a key={`item.link-${i}`} href={Link.url(item.link)}>
              <img src={item.logo.url} alt={item.logo.alt} key={`img-${i}`} />
            </a>
          ) : (
            <img src={item.logo.url} alt={item.logo.alt} key={`img-${i}`} />
          )
        )}
      </div>
    </div>
  </section>
);

export default CustomerLogos;
