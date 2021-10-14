import { Link } from "../Link";
import { Image } from "../Image";
import SliceZone from "next-slicezone";
import resolver from "../../sm-resolver.js";

export const DesktopNav = ({
  header_logo,
  slices1,
  primaryLink,
  primaryLinkLabel,
}) => (
  <div className="container justify-between hidden mx-auto lg:flex">
    <Link href="/">
      {header_logo && (
        <div className="h-16 w-52">
          <Image
            {...header_logo}
            width={208}
            height={64}
            className="object-contain w-full h-full -mt-3 xl:w-80"
          />
          <span className="sr-only">Home</span>
        </div>
      )}
    </Link>
    <nav className="flex items-center justify-evenly gap-12">
      <SliceZone slices={slices1} resolver={resolver} />
    </nav>
    {primaryLink && primaryLinkLabel && (
      <div className="flex flex-row mt-0 justify-self-end gap-2">
        <Link href={primaryLink} className="btn btn-primary">
          {primaryLinkLabel}
        </Link>
      </div>
    )}
  </div>
);
