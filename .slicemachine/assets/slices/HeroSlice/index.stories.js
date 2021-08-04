import MyComponent from "../../../../slices/HeroSlice";

export default {
  title: "slices/HeroSlice",
};

export const _DefaultSlice = () => (
  <MyComponent
    slice={{
      variation: "default-slice",
      name: "Default slice",
      slice_type: "hero_slice",
      items: [],
      primary: {
        title: [
          { type: "heading1", text: "Aggregate enterprise portals", spans: [] },
        ],
        description: [
          {
            type: "paragraph",
            text: "Nisi id quis ex magna amet aliqua. Incididunt tempor nulla qui nulla laboris exercitation.",
            spans: [],
          },
        ],
        primaryLink: { link_type: "Web", url: "http://google.com" },
        secondaryLink: { link_type: "Web", url: "https://slicemachine.dev" },
        primaryLinkLabel: "transition dynamic metrics",
        secondaryLinkLabel: "grow dot-com interfaces",
      },
      id: "_DefaultSlice",
    }}
  />
);
_DefaultSlice.storyName = "Default slice";

export const _WithImage = () => (
  <MyComponent
    slice={{
      variation: "withImage",
      name: "with Image",
      slice_type: "hero_slice",
      items: [],
      primary: {
        title: [
          {
            type: "heading1",
            text: "Empower holistic partnerships",
            spans: [],
          },
        ],
        description: [
          {
            type: "paragraph",
            text: "Magna sint adipisicing ex magna voluptate ex sit irure cillum minim.",
            spans: [],
          },
        ],
        primaryLink: { link_type: "Web", url: "http://twitter.com" },
        primaryLinkLabel: "synergize intuitive partnerships",
        secondaryLink: { link_type: "Web", url: "http://google.com" },
        secondaryLinkLabel: "seize viral initiatives",
        image: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop",
        },
      },
      id: "_WithImage",
    }}
  />
);
_WithImage.storyName = "with Image";
