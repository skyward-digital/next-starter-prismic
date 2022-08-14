// import { useTheme } from "next-themes";
import { Image, Link, RichText } from "../../../../components";

const HeroProjects = ({
  id,
  title,
  description,
  primaryLink,
  primaryLinkLabel,
  secondaryLink,
  secondaryLinkLabel,
  items,
}) => {
  // const { theme } = useTheme();

  return (
    <section
      id={id}
      className="pt-16 overflow-hidden md:pt-24 bg-gradient-to-br from-white to-gray-200 dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-700 max-w-screen"
    >
      <div className="container">
        <div className="max-w-5xl mx-auto text-center">
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
      </div>

      <div className="relative h-32 mt-40 md:h-96">
        <div className="relative flex justify-center gap-6 md:gap-12">
          {items.map(({ projectImage }, index) => {
            return (
              <Image
                key={index}
                {...projectImage}
                width="400"
                height="375"
                loading="eager"
              />
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center pt-24 pb-8 bg-gray-25 dark:bg-gray-900 md:pt-40 md:pb-8 md:-mt-32 gap-16">
        {/* {items.map(({ project }, index) => {
          const themedLogo =
            theme === "dark" && project.data.logoDark?.url
              ? project.data.logoDark
              : project.data.logo;

          return (
            <Image
              key={index}
              {...themedLogo}
              className="w-auto py-6 md:py-8 h-9 box-content"
            />
          );
        })} */}
      </div>
    </section>
  );
};

export default HeroProjects;
