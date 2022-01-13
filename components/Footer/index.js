import { PrismicRichText } from "@prismicio/react";
import { Socials } from "../Socials";
import { Link } from "../Link";

export const Footer = ({
  logo,
  text,
  links,
  ctaTitle,
  ctaDescription,
  ctaLink,
  ctaLinkLabel,
}) => {
  return (
    <footer className="py-8 text-white bg-black">
      <div className="container">
        {/* Footer CTA */}
        {ctaTitle && ctaDescription && (
          <div className="max-w-3xl mx-auto mt-16 mb-32 text-center">
            {ctaTitle && (
              <div className="mb-6 text-4xl font-extrabold leading-none tracking-tight md:text-5xl">
                <PrismicRichText field={ctaTitle} />
              </div>
            )}

            {ctaDescription && (
              <div className="mb-6 text-lg">
                <PrismicRichText field={ctaDescription} />
              </div>
            )}

            {ctaLink && ctaLinkLabel && (
              <div className="flex flex-wrap justify-center gap-4">
                <Link href={ctaLink} className="btn btn-secondary btn-xl">
                  {ctaLinkLabel}
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Footer main */}
        <div className="flex flex-wrap justify-between my-8 overflow-hidden lg:flex-row lg:flex-nowrap">
          {/* Footer links */}
          {links && (
            <ul className="mb-12 grid grid-cols-2 gap-x-12 md:order-last md:mb-0">
              {links.map(({ link, linkLabel }, index) => (
                <li key={index} className="my-2">
                  <Link href={link}>{linkLabel}</Link>
                </li>
              ))}
            </ul>
          )}

          <div>
            <div className="flex flex-wrap items-center mb-8 md:flex-nowrap">
              {logo?.url && (
                <img
                  className="h-16 mb-8 mr-12"
                  src={logo.url}
                  alt={logo.alt}
                />
              )}
              {text && (
                <div className="w-80">
                  <PrismicRichText field={text} />
                </div>
              )}
            </div>
            <Socials className="flex md:justify-center xl:justify-start " />
          </div>
        </div>
      </div>
    </footer>
  );
};
