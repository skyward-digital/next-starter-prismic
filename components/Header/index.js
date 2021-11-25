import { useContext } from "react";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { GlobalContext } from "../../context/GlobalContext";
import { linkResolver } from "../../utils/linkResolver";
import { Link, Image, RichText } from "..";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Header = ({
  navLinks,
  primaryLink,
  primaryLinkLabel,
  primaryLinkStyle,
}) => {
  // const { logos } = useContext(GlobalContext);
  // const { icon } = logos.data;

  const btnStyle =
    primaryLinkStyle === "Outline" ? "btn-outline" : "btn-accent";

  return (
    <header>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <div className="container">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center justify-center md:flex-1 sm:items-stretch sm:justify-between">
                {/* Main Logo */}
                <Link href="/" className="flex items-center flex-shrink-0">
                  {/* <Image {...icon} className="w-auto h-8" /> */}
                  <span className="sr-only">Home</span>
                </Link>

                {/* Navigation Links */}
                <div className="flex hidden sm:block sm:ml-6 space-x-4">
                  {navLinks.map((item, index) => (
                    <NavLink key={index} {...item} />
                  ))}
                  <Link
                    href={primaryLink}
                    className={`btn ${btnStyle} text-[1rem]`}
                  >
                    {primaryLinkLabel}
                  </Link>
                </div>
              </div>

              <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <span className="block w-6 h-6" aria-hidden="true">
                      Close
                    </span>
                  ) : (
                    <span className="block w-6 h-6" aria-hidden="true">
                      open
                    </span>
                  )}
                </Disclosure.Button>
              </div>
            </div>

            {/* Mobile Nav */}
            <Disclosure.Panel className="px-2 pt-2 pb-3 sm:hidden space-y-1 grid">
              {navLinks.map((item, index) => (
                <Disclosure.Button key={index} as={NavLink} {...item} />
              ))}
              <Link
                href={primaryLink}
                className={`btn ${btnStyle} text-[1rem]`}
              >
                {primaryLinkLabel}
              </Link>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </header>
  );
};

const NavLink = ({ link, linkLabel }) => {
  const { pathname } = useRouter();
  const isCurrent = pathname === linkResolver(link);

  return (
    <Link
      href={link}
      className={classNames(
        isCurrent ? "underline" : "no-underline",
        "px-3 py-2 text-[1rem] font-medium font-heading text-white"
      )}
      aria-current={isCurrent ? "page" : undefined}
    >
      <RichText asText={linkLabel} />
    </Link>
  );
};
