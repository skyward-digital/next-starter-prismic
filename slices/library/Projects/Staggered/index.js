import { RichText, Link, ProjectCard } from "../../../../components";

const ProjectsDefault = ({
  id,
  title,
  description,
  primaryLink,
  primaryLinkLabel,
  items,
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
      </div>

      <div className="flex flex-wrap mx-auto mt-24 mb-20 md:flex-nowrap md:items-center max-w-7xl gap-16 md:gap-24">
        {/* First half of array - needs to be split like this to achieve desired design */}
        <div className="w-full md:w-1/2 grid gap-16 md:gap-48">
          {items
            .slice(0, Math.ceil(items.length / 2))
            .map(({ project }, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
        {/* Second half of array */}
        <div className="w-full md:w-1/2 grid gap-16 md:gap-48">
          {items
            .slice(-Math.floor(items.length / 2))
            .map(({ project }, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {primaryLink && primaryLinkLabel && (
          <Link href={primaryLink} className="btn btn-primary btn-xl">
            {primaryLinkLabel}
          </Link>
        )}
      </div>
    </div>
  </section>
);

export default ProjectsDefault;
