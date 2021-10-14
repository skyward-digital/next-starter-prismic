import { Link } from "../Link";
import { Image } from "../Image";
import SliceZone from "next-slicezone";
import resolver from "../../sm-resolver.js";
import { Menu } from "@headlessui/react";

export const MobileNav = ({ header_logo, slices1 }) => {
  return (
    <Menu as="div" className="flex flex-row justify-between lg:hidden">
      <div id="mobile_menu" className="flex justify-between w-full mx-5 mt-2">
        {header_logo && (
          <Link href="/">
            <Image
              {...header_logo}
              width={144}
              height={35}
              className="z-0 h-auto w-36 md:w-52"
            />
            <span className="sr-only">Home</span>
          </Link>
        )}

        <Menu.Button
          id="navigation-button-open"
          className="z-10 w-8 h-8 my-auto"
          aria-label="Open menu"
        >
          <span className="w-8 h-2 bg-black rounded-sm" />
          <span className="w-8 h-2 bg-black rounded-sm" />
          <span className="w-8 h-2 bg-black rounded-sm" />
        </Menu.Button>
      </div>

      <Menu.Items className="fixed top-0 z-50 w-screen h-screen overflow-auto bg-white">
        <nav id="mobile_nav">
          <div className="flex justify-between mx-5 mt-5 mb-12">
            {header_logo && (
              <Link href="/">
                <Image
                  {...header_logo}
                  width={144}
                  height={35}
                  className="z-0 h-auto w-36 md:w-52"
                />
                <span className="sr-only">Home</span>
              </Link>
            )}
            <Menu.Button
              aria-label="Close menu"
              className="z-10 w-8 h-8 pb-0 my-auto"
            >
              <span className="w-8 h-2 bg-black rounded-sm" />
              <span className="w-8 h-2 bg-black rounded-sm" />
              <span className="w-8 h-2 bg-black rounded-sm" />
            </Menu.Button>
          </div>

          <div className="items-center mx-4 grid gap-6">
            <SliceZone slices={slices1} resolver={resolver} />
          </div>
        </nav>
      </Menu.Items>
    </Menu>
  );
};
