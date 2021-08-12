import React, { useState } from "react";

export const ArticleFeedback = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = (state) => {
    //do nothing if user has already clicked on this page visit
    if (clicked) return null;
    setClicked(true);

    //do something with our data
    console.log(state);
  };

  return (
    <section className="pt-64 mb-32 -mt-40 text-center">
      <div className="container mb-32">
        {clicked ? (
          <div>Thanks for your feedback!</div>
        ) : (
          <div>
            Was this article helpful?
            <button onClick={() => handleClick("helpful")}>Yes 👍</button>
            <button onClick={() => handleClick("not helpful")}>No 👎</button>
          </div>
        )}
      </div>
    </section>
  );
};
