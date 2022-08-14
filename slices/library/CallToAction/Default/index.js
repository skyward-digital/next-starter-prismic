import { RichText, Link } from "../../../../components";

const CallToActionDefault = ({
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
          className="mb-8 text-2xl font-normal leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-50"
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
    </div>
  </section>
);

export default CallToActionDefault;
