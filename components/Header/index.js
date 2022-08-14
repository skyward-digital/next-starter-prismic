import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { linkResolver } from "../../prismic";
import { Link, Image } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ logo, navigation }) => {
  return (
    <header>
      <Disclosure as="nav">
        {({ open }) => (
          <div className="container">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center justify-center md:flex-1 sm:items-stretch sm:justify-between">
                {/* Main Logo */}
                <Link href="/" className="flex items-center flex-shrink-0">
                  <Image {...logo} loading="eager" className="w-auto h-10" />
                  <span className="sr-only">Home</span>
                </Link>

                {/* Navigation Links */}
                <div className="items-center hidden sm:flex sm:ml-6 space-x-8">
                  {navigation &&
                    navigation.map((item, index) => (
                      <NavLink key={index} {...item} />
                    ))}
                </div>
              </div>

              <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2">
                  <span className="block w-6 h-6" aria-hidden="true">
                    <FontAwesomeIcon icon={open ? faBars : faXmark} />
                  </span>
                  <span className="sr-only">
                    {open ? "Open" : "Close"} main menu
                  </span>
                </Disclosure.Button>
              </div>
            </div>

            {/* Mobile Nav */}
            <Disclosure.Panel className="pt-2 pb-3 sm:hidden gap-2 grid">
              {navigation &&
                navigation.map((item, index) => (
                  <Disclosure.Button key={index} as={NavLink} {...item} />
                ))}
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
      className={isCurrent ? "underline" : "no-underline"}
      aria-current={isCurrent ? "page" : undefined}
    >
      {linkLabel}
    </Link>
  );
};
