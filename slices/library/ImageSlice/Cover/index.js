import { Image } from "../../../../components/Image";

const Cover = ({ id, image }) => (
  <section id={id} className="py-12 md:py-20">
    <div className="container">
      <div className="flex items-center justify-center">
        <Image {...image} />
      </div>
    </div>
  </section>
);

export default Cover;
