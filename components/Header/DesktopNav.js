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
  <div className="hidden justify-between mx-auto lg:flex container">
    {/* <Link to="/" aria-label="Link to homepage"> */}
    <div className="w-72 h-16 text-left">
      <img
        className="w-full h-full object-contain  -mt-3 xl:w-80"
        src={header_logo.url}
        alt={header_logo.alt}
      />
    </div>
    {/* </Link> */}
    <div className="w-full">
      <nav className="h-full w-full flex flex-row items-center my-auto">
        <div className="flex justify-center w-full flex-row gap-2 mt-0">
          {navigation.map(({ id, primary: { link, link_title } }) => {
            return (
              // <Link
              //   key={id}
              //   to={link}
              //   className="hover:text-yellow-400 transition duration-200 ease-in-out mx-3 whitespace-nowrap text-base xl:mx-5 text-gray-500"
              //   activeClassName="underline text-gray-900"
              //   aria-label={RichText.asText(link_title.raw)}
              // >
              <span>{RichText.asText(link_title.raw)}</span>
              // </Link>
            );
          })}
        </div>
        <div className="flex flex-row justify-self-end gap-2 mt-0">
          {/* <Link
            to={secondary_button_link.url}
            className="btn btn-secondary whitespace-nowrap mr-6 text-base"
          > */}
          {RichText.asText(secondary_button_label.raw)}
          {/* </Link> */}
          {/* <Link
            to={primary_button_link.url}
            className="btn btn-primary order-first md:order-none text-base"
          > */}
          {RichText.asText(primary_button_label.raw)}
          {/* </Link> */}
        </div>
      </nav>
    </div>
  </div>
);
