import { Link, RichText } from "../../../../components";

const HeroSimpleCenter = ({
  id,
  title,
  description,
  primaryLink,
  primaryLinkLabel,
  secondaryLink,
  secondaryLinkLabel,
}) => (
  <section id={id} className="py-12 md:py-20">
    <div className="container">
      <div className="max-w-5xl mx-auto text-center">
        <RichText
          field={title}
          className="mb-8 text-5xl font-normal leading-none tracking-tight text-gray-900 md:text-6xl lg:text-7xl dark:text-gray-50"
        />

        <RichText
          field={description}
          className="text-lg font-light text-gray-700 md:text-xl lg:text-2xl dark:text-gray-200"
        />

        {(primaryLink?.url || secondaryLink?.url) && (
          <div className="flex flex-wrap justify-center mt-12 gap-3">
            <Link href={secondaryLink} className="btn btn-secondary btn-xl">
              {secondaryLinkLabel}
            </Link>

            <Link href={primaryLink} className="btn btn-primary btn-xl">
              {primaryLinkLabel}
            </Link>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default HeroSimpleCenter;
