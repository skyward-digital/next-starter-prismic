import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "../Link";
import { SocialContext } from "../../context/SocialContext";

export const Socials = (props) => {
  const { socials } = useContext(SocialContext);

  return (
    <div {...props}>
      <div className="flex justify-center -mx-2">
        {Object.entries(socials.data).map((social, index) => {
          const [type, link] = social;

          return (
            <Link
              key={index}
              href={link}
              className="mx-4 transition duration-200"
              aria-label={type}
            >
              <FontAwesomeIcon
                icon={mapSocialIcon[type]}
                className="fill-current"
                size="lg"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const mapSocialIcon = {
  twitter: faTwitter,
  linkedin: faLinkedinIn,
  instagram: faInstagram,
  facebook: faFacebookF,
  github: faGithub,
  dribbble: faDribbble,
};
