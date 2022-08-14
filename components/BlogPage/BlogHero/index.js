import { format } from "date-fns";
import { asDate } from "@prismicio/helpers";
import { RichText, Image } from "../../";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faFacebookMessenger,
  faLinkedin,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const BlogHero = ({
  id,
  title,
  description,
  featuredImage,
  author,
  category,
  readTime,
  publishDate,
  updatedDate,
}) => (
  <section id={id} className="py-12 md:py-20">
    <div className="container">
      <div className="max-w-5xl">
        <div className="inline-flex items-center mb-6 bg-gray-100 rounded-full dark:bg-gray-800 p-[0.4rem] gap-2">
          {/* <Link href={category}> */}
          <RichText
            field={category?.data?.title}
            plainText
            as="p"
            className="text-white bg-gray-800 rounded-full dark:text-gray-900 dark:bg-gray-50 px-[0.65rem] py-[0.15rem]"
          />
          {/* </Link> */}
          <p className="pr-2">{readTime} min read</p>
        </div>

        <RichText
          field={title}
          className="mb-8 text-4xl font-normal leading-none tracking-tight text-gray-900 md:text-5xl lg:text-7xl dark:text-gray-50"
        />

        <RichText
          field={description}
          className="mb-12 text-lg font-light text-gray-700 md:text-xl lg:text-2xl dark:text-gray-200"
        />
      </div>

      <Image {...featuredImage} width={1504} height={516} className="mb-8" />

      {/* Author, Dates & Social Sharing */}
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-wrap mb-6 gap-4 md:gap-6 lg:gap-12 md:mb-0">
          {/* <InfoCard title="Written by">
            <Image
              {...author.data.avatar}
              dimensions={{ width: 24, height: 24 }}
              className="rounded-full"
            />
            <RichText
              field={author.data.name}
              plainText
              as="p"
              className="md:text-lg"
            />
          </InfoCard> */}

          <InfoCard title="Published on">
            <p className="md:text-lg">
              {publishDate
                ? format(asDate(publishDate), "d MMMM, yyyy")
                : "Draft post"}
            </p>
          </InfoCard>

          <InfoCard title="Updated on">
            <p className="md:text-lg">
              {updatedDate
                ? format(asDate(updatedDate), "d MMMM, yyyy")
                : "Draft post"}
            </p>
          </InfoCard>
        </div>

        <div className="flex flex-wrap items-start gap-4">
          <ShareButton
            icon={faTwitter}
            CustomComponent={TwitterShareButton}
            color="#1DA1F2"
          />
          <ShareButton
            icon={faFacebook}
            CustomComponent={FacebookShareButton}
            color="#1877F2"
          />

          <ShareButton
            icon={faFacebookMessenger}
            CustomComponent={FacebookMessengerShareButton}
            color="#0283fe"
          />

          <ShareButton
            icon={faLinkedin}
            CustomComponent={LinkedinShareButton}
            color="#0A66C2"
          />

          <ShareButton
            icon={faReddit}
            CustomComponent={RedditShareButton}
            color="#FF4500"
          />

          <CopyLinkButton />
        </div>
      </div>
    </div>
  </section>
);

export default BlogHero;

const InfoCard = ({ title, children }) => (
  <div className="flex flex-wrap items-center w-full md:w-auto md:block gap-4">
    <p className="text-sm text-gray-600 md:mb-3 dark:text-gray-300">{title}</p>
    <div className="flex gap-2">{children}</div>
  </div>
);

const ShareButton = ({ icon, CustomComponent, color, ...rest }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) return null;

  return (
    <CustomComponent url={window.location.href} className="group" {...rest}>
      <span className="inline-flex p-3 bg-gray-100 rounded-lg group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700 transition duration-200">
        <FontAwesomeIcon
          icon={icon}
          className="w-6 h-6 rounded-full"
          style={{ color }}
        />
      </span>
    </CustomComponent>
  );
};

const CopyLinkButton = () => {
  const [linkCopied, setLinkCopied] = useState(false);

  if (linkCopied) {
    setTimeout(() => setLinkCopied(false), 3000);
    return (
      <button className="inline-flex p-3 bg-gray-100 rounded-lg hover:bg-gray-200 gap-2 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-200">
        Link Copied
        <FontAwesomeIcon icon={faCheck} className="w-6 h-6" />
      </button>
    );
  }

  return (
    <button
      onClick={() =>
        navigator?.clipboard
          ?.writeText(window?.location?.href)
          .then(() => setLinkCopied(true))
      }
      className="inline-flex p-3 bg-gray-100 rounded-lg hover:bg-gray-200 gap-2 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-200"
    >
      Copy Link
      <FontAwesomeIcon icon={faCopy} className="w-6 h-6" />
    </button>
  );
};
