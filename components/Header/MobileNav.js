import Image from "next/image";
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
            {header_logo && (
              <Link href="/" aria-label="Link to homepage">
                <Image
                  src={header_logo.url}
                  alt={header_logo.alt}
                  title={header_logo.alt}
                  layout="fixed"
                  width="210"
                  height="60"
                  className="z-0"
                />
              </Link>
            )}
            {!open && (
              <Menu.Button
                className="z-10 w-8 h-8 my-auto"
                aria-label="Open mobile menu button"
              >
                <OpenMenuIcon />
              </Menu.Button>
            )}
          </div>
          {open && (
            <div className="absolute bg-white rounded transform left-1/2 -translate-x-1/2 w-96vw">
              <nav className="shadow-menu">
                <div className="flex justify-between mx-4 mt-5 mb-3">
                  <Link
                    href="/"
                    className="my-auto"
                    aria-label="Link to homepage"
                  >
                    <Image
                      src={header_logo.url}
                      alt={header_logo.alt}
                      title={header_logo.alt}
                      layout="fixed"
                      width="144"
                      height="40"
                    />
                  </Link>
                  {open && (
                    <Menu.Button
                      aria-label="Close mobile menu button"
                      className="z-10 w-8 h-8 pb-0 my-auto"
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
                      className="mx-5 mt-5 w-max whitespace-nowrap"
                    >
                      <Link
                        href={link}
                        className="text-base underline"
                        activeClassName="underline"
                      >
                        {link_title}
                      </Link>
                    </Menu.Item>
                  ))}
                  <Menu.Item className="mx-5 mt-5 mb-6 w-max whitespace-nowrap">
                    <Link
                      href={secondary_button_link}
                      className="text-base link"
                      activeClassName="underline"
                    >
                      {RichText.asText(secondary_button_label.raw)}
                    </Link>
                  </Menu.Item>
                  <Menu.Item className="w-auto mx-5 mt-2 mb-6 btn btn-primary">
                    <Link
                      href={primary_button_link}
                      className="text-base link"
                      activeClassName="underline"
                    >
                      {RichText.asText(primary_button_label.raw)}
                    </Link>
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
