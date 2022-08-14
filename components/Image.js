import "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";

/**
 * Image component used to create optimized images
 * @param {String} url - the source url for your image
 * @param {String} alt - accessible description of your image
 * @param {Boolean} blurUp - Initially loads a very low quality image shown before the high detail image is loaded. Default: true
 * @param {Number} width - a fixed width for your image
 * @param {Number} height - a fixed height for your image
 */
export const Image = ({
  url = "",
  loading = "lazy",
  blurUp = true,
  // sizes,
  dimensions,
  alt,
  ...props
}) => {
  if (!url) return null;

  /* Calculate the aspect ratio based on the original picture size */
  const aspectRatio =
    dimensions?.height && dimensions?.width
      ? dimensions?.height / dimensions?.width
      : 1;

  /* Calculate our width & height if we can based on all the info we're given */
  const width =
    props.width ??
    calcFromAspectRatio(props.height, aspectRatio) ??
    dimensions.width ??
    null;
  const height =
    props.height ??
    calcFromAspectRatio(props.width, aspectRatio) ??
    dimensions.height ??
    null;

  /* If the image is an SVG, don't try to manipulate it or it'll break */
  if (url.includes(".svg")) {
    return (
      <FinalImage
        src={url}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        {...props}
      />
    );
  }

  /* Update our imgix params accordingly - accepts key/value combo as object { w: 1024, h: 900 } */
  const src = updateImgixParams(url, {
    q: 75,
    w: width,
    h: height,
    fit: "crop", //Todo: we could allow this to be adjustable in code
  });

  // const sizes = ["md:50vw", "lg:66vw", width];

  return (
    <FinalImage
      src={src}
      srcSet={`
        ${src}&dpr=0.25 ${width / 4}w,
        ${src}&dpr=0.5 ${width / 2}w,
        ${src}&dpr=0.75 ${(width / 4) * 3}w,
        ${src},
        ${src}&dpr=1.5 ${width * 1.5}w,
        ${src}&dpr=2 ${width * 2}w,
        ${src}&dpr=3 ${width * 3}w`}
      sizes={`(max-width: ${width}px) 100vw, ${width}px`}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      blurUp={blurUp}
      {...props}
    />
  );
};

/* We separate out our image component as we use it in multiple places for SVG and standard images */
const FinalImage = ({
  src,
  srcSet,
  width,
  height,
  alt = "",
  className = "",
  blurUp,
  loading,
  ...props
}) => {
  if (!alt && process.env !== "production") {
    // eslint-disable-next-line no-console
    console.warn(
      "Image components require an alt attribute - is an empty string appropriate or should this image be described?",
      src
    );
  }

  const lqipSource =
    blurUp &&
    updateImgixParams(src, {
      w: width / 4,
      h: height / 4,
      px: 10,
      blur: 200,
    });

  if (loading === "eager") {
    return (
      <img
        src={src}
        srcSet={srcSet}
        width={width}
        height={height}
        alt={alt || ""}
        className={className}
        {...props}
      />
    );
  }

  return (
    <img
      src={lqipSource}
      data-src={src}
      data-srcset={srcSet}
      width={width}
      height={height}
      alt={alt || ""}
      className={`lazyload ${className}`}
      {...props}
    />
  );
};

/* figure out what our image aspect ratio is based on dimensions */
const calcFromAspectRatio = (dimension, aspectRatio) => {
  if (!dimension) return null;
  return Math.ceil(dimension * aspectRatio);
};

/* A function we use to update our imgix params within the url string */
const updateImgixParams = (url = "", imgixParams = []) => {
  Object.entries(imgixParams).map(([key, value]) => {
    const replaceString = `&${key}=${value}`;

    /* First check if our URL includes the param */
    if (url.includes(`&${key}=`)) {
      const findRegex = new RegExp(`&${key}=[0-9a-zA-Z]+`);
      url = url.replace(findRegex, replaceString);
    } else {
      /* If we haven't returned, the param must not exist so we'll add it instead */
      url = `${url}${replaceString}`;
    }
  });

  return url;
};
