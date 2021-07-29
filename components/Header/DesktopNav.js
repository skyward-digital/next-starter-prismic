import { RichText } from "prismic-reactjs";
import { Link } from "../Link";

export const DesktopNav = ({
  header_logo,
  navigation,
  primary_button_link,
  primary_button_label,
  secondary_button_link,
  secondary_button_label,
}) => (
  <div className="container justify-between hidden mx-auto lg:flex">
    <Link href="/" aria-label="Link to homepage">
      {header_logo && (
        <div className="h-16 text-left w-72">
          <img
            className="object-contain w-full h-full -mt-3 xl:w-80"
            src={header_logo.url}
            alt={header_logo.alt}
          />
        </div>
      )}
    </Link>
    <div className="w-full">
      <nav className="flex flex-row items-center w-full h-full my-auto">
        {navigation && (
          <div className="flex flex-row justify-center w-full mt-0 gap-2">
            {navigation.map(({ id, primary: { link, link_title } }) => {
              return (
                <Link
                  key={id}
                  href={link}
                  className="mx-3 text-base text-gray-500 hover:text-yellow-400 transition duration-200 ease-in-out whitespace-nowrap xl:mx-5"
                  activeClassName="underline text-gray-900"
                >
                  {link_title}
                </Link>
              );
            })}
          </div>
        )}
        <div className="flex flex-row mt-0 justify-self-end gap-2">
          {secondary_button_link && secondary_button_link && (
            <Link
              href={secondary_button_link}
              className="mr-6 text-base btn btn-secondary whitespace-nowrap"
            >
              {RichText.asText(secondary_button_label)}
            </Link>
          )}
          {primary_button_link && primary_button_label && (
            <Link
              href={primary_button_link}
              className="order-first text-base btn btn-primary md:order-none"
            >
              {RichText.asText(primary_button_label)}
            </Link>
          )}
        </div>
      </nav>
    </div>
  </div>
);
