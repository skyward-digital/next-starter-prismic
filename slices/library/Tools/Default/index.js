import { useTheme } from "next-themes";
import { RichText, Image, Link } from "../../../../components";

const ToolsDefault = ({
  id,
  title,
  description,
  primaryLink,
  primaryLinkLabel,
  secondaryLink,
  secondaryLinkLabel,
  items,
}) => {
  const { theme } = useTheme();

  return (
    <section id={id} className="py-12 md:py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center">
          <RichText
            field={title}
            className="mb-8 text-3xl font-normal leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-50"
          />

          <RichText
            field={description}
            className="mb-12 text-lg font-light text-gray-700 md:text-xl lg:text-2xl dark:text-gray-200"
          />

          <div className="flex flex-wrap justify-center gap-3">
            <Link href={secondaryLink} className="btn btn-secondary btn-xl">
              {secondaryLinkLabel}
            </Link>

            <Link href={primaryLink} className="btn btn-primary btn-xl">
              {primaryLinkLabel}
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center max-w-5xl mx-auto gap-x-20 gap-y-4">
          {items.map(({ logo, logoDark }, index) => {
            const themedLogo =
              theme === "dark" && logoDark?.url ? logoDark : logo;

            return (
              <Image key={index} {...themedLogo} className="w-auto py-6" />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsDefault;
