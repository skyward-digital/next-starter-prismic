import React from "react";
import { RichText } from "prismic-reactjs";

const SimpleLarge = ({ title, description, video }) => (
  <section>
    <div className="container text-center">
      <div className="text-5xl">{title && <RichText render={title} />}</div>

      <div className="text-xl">
        {description && <RichText render={description} />}
      </div>

      <div dangerouslySetInnerHTML={{ __html: video.html }} />
    </div>
  </section>
);

export default SimpleLarge;
