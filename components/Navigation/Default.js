import { RichText } from "prismic-reactjs";
import { Link } from "../Link";

export const NavItem = ({ title, link }) => (
  <Link
    href={link}
    className="flex-none text-lg font-semibold text-gray-800 lg:text-gray-500 hover:text-gray-900 transition duration-200 hover:underline"
  >
    <RichText render={title} />
  </Link>
);
