import dynamic from "next/dynamic";

const componentMap = {
  default: dynamic(() => import("./Default")),
};

const Testimonials = ({ slice: { primary, items, variation }, index }) => {
  const VariableComponent = componentMap[variation];

  return (
    <VariableComponent
      id={`${index}-Testimonials`}
      {...primary}
      items={items}
    />
  );
};

export default Testimonials;

export const testimonialFetchLinks = [
  // Testimonial Fetch Links
  "testimonial.testimonial",
  "testimonial.author",
  "testimonial.avatar",
  "testimonial.position",
  "testimonial.company",
  "testimonial.companyLogo",
  "testimonial.project",
];
