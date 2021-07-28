import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";

export const Header = ({ data }) => {
  return (
    <header className="py-3 lg:py-6">
      <MobileNav {...data} />
      <DesktopNav {...data} />
    </header>
  );
};
