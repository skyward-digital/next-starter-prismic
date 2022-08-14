import { Image } from "../../../../components";

const TwoCol = ({ id, smallImage, largeImage, reversed }) => (
  <section id={id} className="py-12 md:py-20">
    <div className="container">
      <div className="flex items-center justify-evenly gap-12 lg:gap-24">
        <div className={`flex-initial ${reversed && "lg:order-last"}`}>
          <Image {...smallImage} />
        </div>

        <div className="flex-initial">
          <Image {...largeImage} />
        </div>
      </div>
    </div>
  </section>
);

export default TwoCol;
