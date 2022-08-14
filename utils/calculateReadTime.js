import { asText } from "@prismicio/helpers";

export const calculateReadTimeFromText = (content) => {
  const wpm = 300;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
};

export const calculateReadTimeFromSlices = (slices) => {
  if (!slices) return 0;
  // Turn our slice content into plain text
  let content = "";
  slices.map((item) => {
    if (!item?.primary?.content) return;
    content += asText(item.primary.content);
  });

  return calculateReadTimeFromText(content);
};
