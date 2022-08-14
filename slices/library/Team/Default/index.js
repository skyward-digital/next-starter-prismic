import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import { RichText, Image, Link } from "../../../../components";

const TeamDefault = ({
  id,
  title,
  description,
  primaryLink,
  primaryLinkLabel,
  secondaryLink,
  secondaryLinkLabel,
}) => {
  const { activeTeamMembers } = useContext(GlobalContext);

  return (
    <section id={id} className="py-12 md:py-20">
      <div className="container">
        <div className="flex flex-wrap justify-between md:flex-nowrap">
          <div className="max-w-5xl mb-6 mr-auto lg:mb-12">
            <RichText
              field={title}
              className="mb-6 text-3xl font-normal leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-50"
            />

            <RichText
              field={description}
              className="text-lg font-light text-gray-700 md:text-xl dark:text-gray-200"
            />
          </div>

          <div className="flex flex-wrap items-end mb-8 gap-3 lg:justify-end flex-max lg:mb-12">
            <Link
              href={secondaryLink}
              className="flex-initial btn btn-secondary btn-xl"
            >
              {secondaryLinkLabel}
            </Link>

            <Link
              href={primaryLink}
              className="flex-initial btn btn-primary btn-xl"
            >
              {primaryLinkLabel}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {activeTeamMembers.map((teamMember, index) => (
            <TeamMember key={index} {...teamMember.data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamDefault;

const TeamMember = ({ avatar, name, position }) => (
  <div className="mb-4">
    <Image
      {...avatar}
      dimensions={{ width: 310, height: 310 }}
      className="mb-4"
    />
    <RichText field={name} plainText as="p" className="text-lg md:text-xl" />
    <RichText
      field={position}
      plainText
      as="p"
      className="text-gray-500 dark:text-gray-400"
    />
  </div>
);
