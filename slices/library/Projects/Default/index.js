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
          className="mb-8 text-3xl font-normal leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-50"
        />

        <RichText
          field={description}
          className="mb-12 text-lg font-light text-gray-700 md:text-xl lg:text-2xl dark:text-gray-200"
        />
      </div>

      <div className="mx-auto my-12 md:mt-24 md:mb-20 max-w-7xl grid md:grid-cols-2 gap-x-12 gap-y-20">
        {items.map(({ project }, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <Link href={primaryLink} className="btn btn-primary btn-xl">
          {primaryLinkLabel}
        </Link>
      </div>
    </div>
  </section>
);

export default ProjectsDefault;
