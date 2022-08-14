import { RichText, Image, Link } from "../../../../components";

const TestimonialsDefault = ({ id, testimonial }) => {
  const {
    testimonial: quote,
    author,
    avatar,
    position,
    company,
    companyLogo,
    project,
  } = testimonial.data;

  return (
    <section id={id} className="py-12 md:py-20">
      <div className="container">
        <div className="px-8 py-10 mx-auto bg-gray-100 md:p-12 dark:bg-gray-700 max-w-7xl">
          <RichText
            field={quote}
            className="text-lg italic font-light text-center md:text-xl"
          />

          <Link
            href={project}
            className="flex flex-wrap items-center justify-center mt-8 text-center sm:text-left gap-4"
          >
            <div className="flex justify-center w-full sm:w-auto">
              <Image
                {...companyLogo}
                dimensions={{ width: 48, height: 48 }}
                className="bg-white rounded-full dark:bg-black"
              />
              <Image
                {...avatar}
                dimensions={{ width: 48, height: 48 }}
                className="-ml-3 bg-white rounded-full dark:bg-black"
              />
            </div>

            <div>
              <p className="text-lg font-bold">{author}</p>
              <p className="text-gray-500 dark:text-gray-300">
                {position} at {company}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsDefault;
