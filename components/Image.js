export const Image = ({
  url = "",
  dimensions,
  width,
  height,
  alt,
  ...rest
}) => {
  if (!url) return null;

  /* If the image is an SVG, don't try to manipulate it or it'll break */
  if (url.includes(".svg")) {
    return (
      <img
        src={url}
        width={width ?? null}
        height={height ?? null}
        alt={alt}
        {...rest}
      />
    );
  }

  /* Calculate the aspect ratio based on the original picture size */
  const aspectRatio =
    dimensions?.height && dimensions?.width
      ? dimensions?.height / dimensions?.width
      : 1;

  /* A function we use to update our imgix params within the url string */
  const updateImgixParams = (imgixParamName, value) => {
    /* First check if our URL includes the param */
    if (url.includes(`&${imgixParamName}=`)) {
      url.replace(`&${imgixParamName}=d+`, `&${imgixParamName}=${value}`); //Regex d+ only tests for digits currently
      return;
    }

    /* If we haven't returned, the param must not exist so we'll add it instead */
    url = `${url}&${imgixParamName}=${value}`;
  };

  /* If width is set explicitly, assume the user wants to force the width ignoring CMS dimensions */
  if (width) updateImgixParams("w", width);

  /* If width is set explicitly, assume the user wants to force the width ignoring CMS dimensions */
  if (height) updateImgixParams("h", height);

  return (
    <img
      src={url}
      srcSet={`${url}&dpr=1 1x, ${url}&dpr=2 2x, ${url}&dpr=3 3x`}
      width={width ?? (height && Math.ceil(height * aspectRatio)) ?? null}
      height={height ?? (width && Math.ceil(width * aspectRatio)) ?? null}
      alt={alt}
      {...rest}
    />
  );
};
