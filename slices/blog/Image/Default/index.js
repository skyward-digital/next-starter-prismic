import { Image, RichText } from "../../../../components";

const BlogImage = ({ image, caption }) => (
  <div className="max-w-5xl mx-auto my-8 md:my-20">
    <Image
      {...image}
      className="max-w-full mb-6 rounded-lg shadow-sm"
      width={image.dimensions.width < 1120 ? image.dimensions.width : 1120}
    />
    <RichText field={caption} className="font-light" />
  </div>
);

export default BlogImage;
