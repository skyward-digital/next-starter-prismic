import { RichText, Image, NewsletterForm } from "../../../../components";

const NewsletterDefault = ({
  id,
  title,
  description,
  placeholder,
  submitLabel,
  image,
}) => (
  <section id={id} className="py-16 md:pt-24 md:pb-0">
    <div className="container">
      <div className="items-center text-center grid">
        <RichText
          field={title}
          className="mb-8 text-2xl font-normal leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-50"
        />

        <RichText
          field={description}
          className="mb-12 text-lg font-light text-gray-700 md:text-xl lg:text-2xl dark:text-gray-200"
        />

        <NewsletterForm
          placeholder={placeholder}
          submitLabel={submitLabel}
          className="mb-16"
        />

        <Image
          {...image}
          className="object-cover object-top shadow-2xl max-h-96 xl:max-h-[40rem]"
        />
      </div>
    </div>
  </section>
);

export default NewsletterDefault;
