import { RichText, Image, Link } from "../../../../components";

const TextWithImage = ({
  id,
  title,
  description,
  primaryLink,
  primaryLinkLabel,
  image,
  reversed,
}) => (
  <section id={id} className="py-12 md:py-20">
    <div className="container">
      <div className="items-center grid md:grid-cols-3 gap-12 lg:gap-24">
        <div className={reversed && "lg:order-last"}>
          <RichText
            field={title}
            className="mb-8 text-2xl font-normal leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-50"
          />

          <RichText
            field={description}
            className="font-light text-gray-700 prose-lg dark:text-gray-200"
          />

          <div className="flex flex-wrap mt-8 gap-3">
            {/* {secondaryLink && secondaryLinkLabel && (
              <Link href={secondaryLink} className="btn btn-secondary btn-xl">
                {secondaryLinkLabel}
              </Link>
            )} */}

            {primaryLink && primaryLinkLabel && (
              <Link href={primaryLink} className="btn btn-primary btn-xl">
                {primaryLinkLabel}
              </Link>
            )}
          </div>
        </div>

        <Image {...image} className="col-span-2" />
      </div>
    </div>
  </section>
);

export default TextWithImage;
