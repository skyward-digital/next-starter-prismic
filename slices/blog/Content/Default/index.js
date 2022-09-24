import { RichText } from "../../../../components/RichText";

const Content = ({ content }) => (
  <RichText field={content} className="my-8 prose-lg" showLinks />
);

export default Content;
