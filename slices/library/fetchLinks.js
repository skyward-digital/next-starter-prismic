import { heroFetchLinks } from "./Hero";
import { projectsFetchLinks } from "./Projects";
import { testimonialFetchLinks } from "./Testimonials";

export const fetchLinks = [
  ...heroFetchLinks,
  ...projectsFetchLinks,
  ...testimonialFetchLinks,
];
