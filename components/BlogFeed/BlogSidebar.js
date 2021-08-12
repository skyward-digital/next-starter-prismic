import React, { useState, useEffect } from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "../Link";
import { linkResolver } from "../../prismic-configuration";

export const BlogSidebar = ({ categories, sticky }) => (
  <aside className={sticky ? "relative sticky top-0" : ""}>
    <h2 className="text-2xl font-bold">Categories</h2>
    {categories.results.map((category) => {
      // pass pre-resolved link here because the categories are treated sightly different to normal links
      const resolvedLink = linkResolver(category);

      const [currentPath, setCurrentPath] = useState("");
      useEffect(() => {
        setCurrentPath(window.location.pathname);
      }, []);

      return (
        <Link
          href={resolvedLink}
          key={category.id}
          className={resolvedLink === currentPath ? "text-blue-500" : ""}
        >
          <RichText render={category.data.title} />
        </Link>
      );
    })}
  </aside>
);
