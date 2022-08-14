import { RichText, Link, ContactForm, Socials } from "../../../../components";

const ContactDefault = ({
  id,
  title,
  description,
  primaryLink,
  primaryLinkLabel,
}) => (
  <section id={id} className="py-12 md:py-20">
    <div className="container">
      <div className="items-center grid md:grid-cols-2 gap-24">
        <div>
          <RichText
            field={title}
            className="mb-8 text-2xl font-normal leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-50"
          />

          <RichText
            field={description}
            className="mb-12 text-lg font-light text-gray-700 md:text-xl lg:text-2xl dark:text-gray-200"
          />

          <div className="flex flex-wrap gap-3">
            {primaryLink && primaryLinkLabel && (
              <Link href={primaryLink} className="btn btn-primary btn-xl">
                {primaryLinkLabel}
              </Link>
            )}
          </div>

          <Socials className="flex mt-12 md:justify-center xl:justify-start" />
        </div>
        <div className="px-6 bg-gray-100 rounded-lg md:px-10 md:py-4 dark:bg-gray-800">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default ContactDefault;
