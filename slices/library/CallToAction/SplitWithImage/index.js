import { RichText, Link, Image } from "../../../../components";

const CallToActionSplitWithImage = ({
  id,
  title,
  description,
  primaryLink,
  primaryLinkLabel,
  secondaryLink,
  secondaryLinkLabel,
  image,
}) => (
  <section id={id} className="py-12 md:py-20">
    <div className="container">
      <div className="items-center grid grid-cols-2 gap-24">
        <div>
          <RichText
            field={title}
            className="mb-8 text-2xl font-normal leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-50"
          />

          <RichText
            field={description}
            className="mb-12 text-lg font-light text-gray-700 md:text-xl lg:text-2xl dark:text-gray-200"
          />

          <div className="flex flex-wrap gap-3">
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
        <div>
          <Image {...image} width={720} className="w-full" />
        </div>
      </div>
    </div>
  </section>
);

export default CallToActionSplitWithImage;
