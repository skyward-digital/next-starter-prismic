import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";

export const Header = ({
  header_logo,
  slices1,
  primaryLink,
  primaryLinkLabel,
}) => {
  const data = { header_logo, slices1, primaryLink, primaryLinkLabel };
  return (
    <header className="py-3 lg:py-6">
      <MobileNav {...data} />
      <DesktopNav {...data} />
    </header>
  );
};
