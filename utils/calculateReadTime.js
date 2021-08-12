export const calculateReadTime = (content) => {
  const wpm = 300;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
};
