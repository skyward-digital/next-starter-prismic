import { RichText } from "prismic-reactjs";
import { Socials } from "../Socials";
// import { Link } from "../Link";

export const Footer = ({ data, logos, socials }) => {
  if (!data) return null;
  const {
    footer_title,
    footer_text,
    // body
  } = data;
  return (
    <footer className="bg-muted text-paragraph">
      <div className="container">
        <div className="flex flex-wrap justify-between py-8 overflow-hidden lg:flex-row lg:flex-nowrap lg:justify-end">
          <div className="w-48 my-8 flex-0">
            <img
              className="object-contain h-12 -mt-3 xl:w-80"
              src={logos.header_logo.url}
              alt={logos.header_logo.alt}
            />
            {RichText.render(footer_title)}
            {RichText.render(footer_text)}
            <Socials socials={socials} />
          </div>
          <div className="flex flex-wrap mt-8 mb-0 -mx-4 lg:my-8 lg:flex-grow lg:flex-nowrap lg:justify-end">
            {/* {body.map(({ id, primary: { title_of_section }, items }) => (
              <ul key={id} className="w-40 mx-4 mb-12 md:w-28 xl:w-40">
                <p className="mb-4 font-semibold">
                  {RichText.asText(title_of_section.raw)}
                </p>
                {items.map(({ link, link_title }, index) => (
                  <li key={index} className="my-4">
                    <Link
                      href={link}
                      className="no-underline hover:underline focus:underline"
                    >
                      {link_title}
                    </Link>
                  </li>
                ))}
              </ul>
            ))} */}
          </div>
          {/* <div className="mt-0 mb-8 flex flex-col items-start md:mr-24 md:flex-row md:items-center md:flex-grow md:justify-between lg:flex-col lg:items-end lg:my-8 lg:mr-0 lg:max-w-1/5 xl:w-1/5">
            <div className="mb-6">
              <p className="font-semibold mb-4">Join the newsletter</p>
              <NewsletterForm variant="outline" />
            </div>
            <div className="md:mt-8 lg:mt-0 lg:mr-0">
              <Socials socials={socials} />
            </div>
          </div> */}
        </div>
      </div>
      <div className="pb-16 md:pb-0">
        <div className="container py-6 border-t border-paragraph">
          <p className="text-sm text-paragraph">
            © {new Date().getFullYear()}, Skyward Digital Solutions LTD
          </p>
        </div>
      </div>
    </footer>
  );
};
