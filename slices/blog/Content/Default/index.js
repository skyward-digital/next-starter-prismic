import { RichText } from "../../../../components";

const Content = ({ content }) => (
  <RichText field={content} className="my-8 prose-lg" showLinks />
);

export default Content;
