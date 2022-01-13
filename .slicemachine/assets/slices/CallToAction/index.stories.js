import MyComponent from "../../../../slices/CallToAction";

export default {
  title: "slices/CallToAction",
};

export const _DefaultSlice = () => (
  <MyComponent
    slice={{
      variation: "default-slice",
      name: "Default slice",
      slice_type: "call_to_action",
      items: [],
      primary: {
        title: [
          {
            type: "heading1",
            text: "Reintermediate magnetic eyeballs",
            spans: [],
          },
        ],
        description: [
          {
            type: "paragraph",
            text: "Mollit amet Lorem fugiat esse enim laborum. Excepteur ad incididunt sint occaecat nisi aliqua tempor reprehenderit. Tempor mollit est deserunt id et anim.",
            spans: [],
          },
        ],
        primaryLink: { link_type: "Web", url: "http://twitter.com" },
        primaryLinkLabel: "evolve synergistic portals",
        secondaryLink: { link_type: "Web", url: "http://google.com" },
        secondaryLinkLabel: "reinvent collaborative experiences",
      },
      id: "_DefaultSlice",
    }}
  />
);
_DefaultSlice.storyName = "Default slice";

export const _Small = () => (
  <MyComponent
    slice={{
      variation: "small",
      name: "Small",
      slice_type: "call_to_action",
      items: [],
      primary: {
        title: [
          {
            type: "heading3",
            text: "Envisioneer web-enabled models",
            spans: [],
          },
        ],
        primaryLink: { link_type: "Web", url: "https://slicemachine.dev" },
        primaryLinkLabel: "monetize e-business synergies",
        secondaryLink: { link_type: "Web", url: "http://google.com" },
        secondaryLinkLabel: "empower vertical e-business",
      },
      id: "_Small",
    }}
  />
);
_Small.storyName = "Small";

export const _WithImage = () => (
  <MyComponent
    slice={{
      variation: "withImage",
      name: "With Image",
      slice_type: "call_to_action",
      items: [],
      primary: {
        title: [
          { type: "heading1", text: "Mesh enterprise deliverables", spans: [] },
        ],
        description: [
          {
            type: "paragraph",
            text: "Dolore culpa cupidatat cillum tempor amet. Et ea sunt Lorem deserunt culpa incididunt commodo et irure anim elit. Reprehenderit enim ad pariatur deserunt esse ea anim laboris ut voluptate sunt nostrud.",
            spans: [],
          },
        ],
        primaryLink: { link_type: "Web", url: "http://twitter.com" },
        primaryLinkLabel: "engineer B2C supply-chains",
        secondaryLink: { link_type: "Web", url: "https://prismic.io" },
        secondaryLinkLabel: "architect dot-com vortals",
        image: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop",
        },
      },
      id: "_WithImage",
    }}
  />
);
_WithImage.storyName = "With Image";
