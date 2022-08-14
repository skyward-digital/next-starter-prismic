import { Link, RichText, Image } from "../../../../components";

const HeroFeaturedImage = ({
  id,
  title,
  description,
  primaryLink,
  primaryLinkLabel,
  secondaryLink,
  secondaryLinkLabel,
  featuredImage,
}) => (
  <section id={id} className="py-12 md:py-20">
    <div className="container">
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <RichText
          field={title}
          className="mb-8 text-4xl font-normal leading-none tracking-tight text-gray-900 md:text-5xl lg:text-7xl dark:text-gray-50"
        />
        <RichText
          field={description}
          className="mb-12 text-lg font-light text-gray-700 md:text-xl lg:text-2xl dark:text-gray-200"
        />
        <div className="flex flex-wrap justify-center gap-3">
          {secondaryLink && secondaryLinkLabel && (
            <Link href={secondaryLink} className="btn btn-secondary btn-xl">
              {secondaryLinkLabel}
            </Link>
          )}

          {primaryLink && primaryLinkLabel && (
            <Link href={primaryLink} className="btn btn-primary btn-xl">
              {primaryLinkLabel}
            </Link>
          )}
        </div>
      </div>

      <Image
        {...featuredImage}
        dimensions={{ width: 1504 }}
        className="w-full"
      />
    </div>
  </section>
);

export default HeroFeaturedImage;
