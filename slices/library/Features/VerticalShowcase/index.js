import { RichText, Link, Image } from "..";

export const VerticalShowcase = ({
  id,
  sectionTitle,
  title,
  description,
  primaryLink,
  primaryLinkLabel,
  image,
  items,
}) => (
  <section
    id={id}
    className="py-16 overflow-hidden md:py-24 lg:pb-72 xl:pb-80 bg-primary"
  >
    <div className="container ">
      <div className="relative flex flex-col justify-center w-full mx-auto max-w-7xl">
        {/* lg:ml-36  */}
        <div className="relative flex flex-col max-w-3xl lg:max-w-4xl">
          <RichText
            field={sectionTitle}
            className="mb-5 text-lg uppercase text-heading-tertiary leading-7"
          />
          <RichText
            field={title}
            className="mb-5 text-4xl text-heading-primary leading-10"
          />

          <RichText
            field={description}
            className="mb-8 text-xl font-light lg:text-2xl text-paragraph-secondary leading-8"
          />
          {primaryLink && primaryLinkLabel && (
            <Link href={primaryLink} className="w-1/2 btn btn-primary btn-xl">
              {primaryLinkLabel}
            </Link>
          )}
        </div>
        <div className="relative flex flex-col  xl:mb-16 lg:flex-row">
          <ul className="flex flex-col max-w-xl mt-10 mb-20 lg:mt-36 xl:max-w-2xl lg:mb-0">
            {items.map((item, index) => (
              // lg:ml-36
              <li
                key={index}
                className="flex flex-col py-4 pl-6 border-l-4 border-gray-100 hover:border-purple-600 transition-all ease-in duration-200"
              >
                <RichText
                  field={item.title}
                  className="mb-2 text-xl font-medium text-heading-primary"
                />
                <RichText
                  field={item.description}
                  className="text-base text-paragraph-secondary"
                />
              </li>
            ))}
          </ul>
          <div className="relative self-center w-full max-w-xl md:max-w-6xl lg:max-w-6xl lg:absolute lg:top-0 lg:inset-x-1/2 xl:inset-x-2/3">
            <Image {...image} />
          </div>
        </div>
      </div>
    </div>
  </section>
);
