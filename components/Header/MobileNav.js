import { RichText } from "prismic-reactjs";
import { Link } from "../Link";
import {
  MenuIcon as OpenMenuIcon,
  XIcon as CloseMenuIcon,
} from "@heroicons/react/outline";
import { Menu } from "@headlessui/react";

export const MobileNav = ({
  header_logo,
  navigation,
  primary_button_link,
  primary_button_label,
  secondary_button_link,
  secondary_button_label,
}) => {
  return (
    <Menu as="div" className="flex flex-row justify-between lg:hidden">
      {({ open }) => (
        <>
          <div className="flex justify-between w-full mx-5 mt-2">
            {/* <Link to="/" aria-label="Link to homepage"> */}
            <img
              className="w-36 md:w-52 h-auto z-0"
              src={header_logo.url}
              alt={header_logo.alt}
            />
            {/* </Link> */}
            {!open && (
              <Menu.Button
                className="w-8 h-8 z-10 my-auto"
                aria-label="Open mobile menu button"
              >
                <OpenMenuIcon />
              </Menu.Button>
            )}
          </div>
          {open && (
            <div className="bg-white rounded absolute transform left-1/2 -translate-x-1/2 w-96vw">
              <nav className="shadow-menu">
                <div className="flex justify-between mx-4 mt-5 mb-3">
                  {/* <Link
                    to="/"
                    className="my-auto"
                    aria-label="Link to homepage"
                  > */}
                  <img
                    className="w-36"
                    src={header_logo.url}
                    alt={header_logo.alt}
                  />
                  {/* </Link> */}
                  {open && (
                    <Menu.Button
                      aria-label="Close mobile menu button"
                      className="my-auto w-8 h-8 z-10 pb-0"
                    >
                      <CloseMenuIcon />
                    </Menu.Button>
                  )}
                </div>

                <Menu.Items className="flex flex-col min-w-full bg-white justify-items-start focus:outline-none">
                  {navigation.map(({ primary: { link, link_title }, id }) => (
                    <Menu.Item
                      key={id}
                      to={link}
                      className="w-max mx-5 mt-5 whitespace-nowrap"
                    >
                      {/* <Link
                        className="underline text-base"
                        activeClassName="underline"
                        aria-label={RichText.asText(link_title.raw)}
                      > */}
                      {RichText.asText(link_title.raw)}
                      {/* </Link> */}
                    </Menu.Item>
                  ))}
                  <Menu.Item className="mt-5 mb-6 w-max mx-5 whitespace-nowrap">
                    {/* <Link
                      to={secondary_button_link.url}
                      aria-label={RichText.asText(secondary_button_label.raw)}
                      className="link text-base"
                      activeClassName="underline"
                    > */}
                    {RichText.asText(secondary_button_label.raw)}
                    {/* </Link> */}
                  </Menu.Item>
                  <Menu.Item className="btn btn-primary w-auto mt-2 mx-5 mb-6">
                    {/* <Link
                      to={primary_button_link.url}
                      className="link text-base"
                      activeClassName="underline"
                      aria-label={RichText.asText(primary_button_label.raw)}
                    > */}
                    {RichText.asText(primary_button_label.raw)}
                    {/* </Link> */}
                  </Menu.Item>
                </Menu.Items>
              </nav>
            </div>
          )}
        </>
      )}
    </Menu>
  );
};
