import { RichText, Link } from "../../../../components";

const VerticalGrid = ({
  id,
  title,
  description,
  primaryLink,
  primaryLinkLabel,
  items,
}) => (
  <section id={id} className="py-12 md:py-20 bg-primary">
    <div className="container flex justify-center">
      <div className="flex flex-col items-center justify-between w-full text-center">
        <div className="flex flex-col items-center mb-8 lg:mb-12 lg:max-w-4xl">
          <RichText
            field={title}
            className="mb-5 text-3xl lg:text-4xl leading-10"
          />

          <RichText
            field={description}
            className="mb-8 text-xl font-light text-gray-500 dark:text-gray-300 lg:text-2xl leading-8"
          />
        </div>

        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {items.map((item, index) => (
            <FeaturedContent key={index} {...item} />
          ))}
        </div>

        {primaryLink && primaryLinkLabel && (
          <div className="flex flex-col items-center mt-16 mb-8 lg:mb-24 lg:max-w-4xl">
            <Link href={primaryLink} className="btn btn-primary btn-xl">
              {primaryLinkLabel}
            </Link>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default VerticalGrid;

const FeaturedContent = ({ title, description }) => (
  <div className="flex flex-col max-w-sm">
    <div>
      <RichText field={title} className="mb-2 text-xl font-medium" />
      <RichText
        field={description}
        className="mb-2 text-lg font-light text-gray-500 dark:text-gray-300"
      />
    </div>
  </div>
);
