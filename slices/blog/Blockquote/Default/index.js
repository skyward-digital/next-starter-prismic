import { RichText } from "../../../../components";

const Blockquote = ({ quote, author }) => (
  <figure className="my-8">
    {/* Quote */}
    <blockquote className="mb-6">
      <RichText
        field={quote}
        plainText
        as="p"
        className="text-2xl font-light leading-normal"
      />{" "}
    </blockquote>

    {/* Author */}
    <figcaption className="flex gap-2">
      &mdash;{" "}
      <RichText
        field={author}
        plainText
        as="p"
        className="text-lg font-light"
      />
    </figcaption>
  </figure>
);

export default Blockquote;
