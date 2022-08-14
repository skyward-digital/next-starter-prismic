import { RichText, Link } from "../../../../components";

const StaggeredFeatures = ({
  id,
  title,
  description,
  primaryLink,
  primaryLinkLabel,
  items,
}) => (
  <section id={id} className="py-12 md:py-20">
    <div className="container flex justify-center">
      <div className="flex flex-col items-center justify-between place-content-center lg:flex-row max-w-7xl">
        <div className="flex flex-col items-start mb-16 lg:max-w-md lg:mb-0">
          <RichText
            field={title}
            className="mb-5 text-3xl lg:text-4xl leading-10"
          />

          <RichText
            field={description}
            className="mb-8 text-xl font-light text-gray-500 lg:text-2xl leading-8"
          />

          <Link href={primaryLink} className="btn btn-primary btn-xl">
            {primaryLinkLabel}
          </Link>
        </div>

        <div className="max-w-3xl grid md:grid-cols-2 lg:w-1/2">
          {items.map((item, index) => (
            <FeatureContent key={index} alignStart={index % 2} {...item} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StaggeredFeatures;

const FeatureContent = ({ alignStart, title, description }) => (
  <div
    className={`flex flex-col max-w-sm col-span-2 ${
      alignStart ? "md:col-start-2" : "md:col-start-1"
    }`}
  >
    <div className="mb-12">
      <RichText field={title} className="mb-2 text-xl font-medium" />
      <RichText
        field={description}
        className="mb-2 text-lg font-light text-gray-500"
      />
    </div>
  </div>
);
