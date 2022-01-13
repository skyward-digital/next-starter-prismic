import { PrismicRichText, PrismicText } from "@prismicio/react";
import { Link } from "../Link";
import { Menu } from "@headlessui/react";

export const NavItemWithSubnav = ({
  title,
  // link,
  items,
}) => (
  <span className="relative flex flex-row w-full mt-0 lg:justify-center gap-2">
    {/* Desktop view */}
    <Menu>
      <Menu.Button className="flex-none hidden text-lg font-semibold text-gray-500 lg:block hover:text-gray-900 transition duration-200 hover:underline">
        <PrismicText field={title} />
      </Menu.Button>
      <Menu.Items className="absolute z-50 p-6 bg-white shadow-lg grid gap-3 w-max rounded-xl top-16 transform left-1/2 -translate-x-1/2">
        {items.map((item, index) => (
          <Menu.Item key={index}>
            {/* {({ active }) => ( */}
            <Link
              href={item.link}
              className="font-semibold text-gray-500 hover:underline hover:text-gray-900 transition duration-200"
            >
              <PrismicRichText field={item.title} />
            </Link>
            {/* )} */}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>

    {/* Mobile view */}
    <div className="lg:hidden grid">
      <span className="flex-none text-lg font-semibold text-gray-800 transition duration-200 hover:underline">
        <PrismicText field={title} />
      </span>
      <span className="p-6 pb-0 grid gap-4 w-max">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="font-semibold text-gray-500 "
          >
            <PrismicRichText field={item.title} />
          </Link>
        ))}
      </span>
    </div>
  </span>
);
