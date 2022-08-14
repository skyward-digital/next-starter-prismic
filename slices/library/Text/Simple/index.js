import { RichText } from "../../../../components";

const TextSimple = ({ id, title, description }) => (
  <section id={id} className="py-12 md:py-20">
    <div className="container">
      <div className="max-w-5xl">
        <RichText
          field={title}
          className="mb-8 text-2xl font-normal leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-50"
        />

        <RichText
          field={description}
          className="font-light text-gray-700 prose-lg dark:text-gray-200"
        />
      </div>
    </div>
  </section>
);

export default TextSimple;
