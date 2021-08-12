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
            type: "heading2",
            text: "Repurpose innovative functionalities",
            spans: [],
          },
        ],
        description: [
          {
            type: "paragraph",
            text: "Duis eu pariatur consequat aute qui dolore enim.",
            spans: [],
          },
        ],
        primaryLink: { link_type: "Web", url: "https://prismic.io" },
        primaryLinkLabel: "grow efficient supply-chains",
        secondaryLink: { link_type: "Web", url: "http://twitter.com" },
        secondaryLinkLabel: "maximize innovative initiatives",
      },
      id: "_DefaultSlice",
    }}
  />
);
_DefaultSlice.storyName = "Default slice";

export const _SimpleLarge = () => (
  <MyComponent
    slice={{
      variation: "simpleLarge",
      name: "Simple Large",
      slice_type: "call_to_action",
      items: [],
      primary: {
        title: [
          {
            type: "heading2",
            text: "Repurpose compelling relationships",
            spans: [],
          },
        ],
        description: [
          {
            type: "paragraph",
            text: "Sunt enim aliquip non ex. Veniam voluptate esse ad incididunt elit non labore proident. Consequat adipisicing pariatur ullamco sint minim in veniam officia enim incididunt culpa fugiat nostrud non.",
            spans: [],
          },
        ],
        primaryLink: { link_type: "Web", url: "http://google.com" },
        primaryLinkLabel: "incubate viral blockchains",
        secondaryLink: { link_type: "Web", url: "http://twitter.com" },
        secondaryLinkLabel: "strategize cross-media deliverables",
      },
      id: "_SimpleLarge",
    }}
  />
);
_SimpleLarge.storyName = "Simple Large";

export const _SimpleWithVideo = () => (
  <MyComponent
    slice={{
      variation: "simpleWithVideo",
      name: "Simple with Video",
      slice_type: "call_to_action",
      items: [],
      primary: {
        title: [
          {
            type: "heading2",
            text: "Empower frictionless synergies",
            spans: [],
          },
        ],
        description: [
          {
            type: "paragraph",
            text: "Officia do proident cupidatat nisi proident.",
            spans: [],
          },
        ],
        video: {
          title: "Data Modelling — Create your Custom Types and Slices",
          author_name: "Prismic",
          author_url:
            "https://www.youtube.com/channel/UCJq6AEgtWeZt7ziQ-fLKOeA",
          type: "video",
          height: 113,
          width: 200,
          version: "1.0",
          provider_name: "YouTube",
          provider_url: "https://www.youtube.com/",
          thumbnail_height: 360,
          thumbnail_width: 480,
          thumbnail_url: "https://i.ytimg.com/vi/c-ATzcy6VkI/hqdefault.jpg",
          html: '<iframe width="200" height="113" src="https://www.youtube.com/embed/c-ATzcy6VkI?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
      },
      id: "_SimpleWithVideo",
    }}
  />
);
_SimpleWithVideo.storyName = "Simple with Video";

export const _TwoColumn = () => (
  <MyComponent
    slice={{
      variation: "twoColumn",
      name: "Two Column",
      slice_type: "call_to_action",
      items: [
        {
          title: [
            {
              type: "heading3",
              text: "Innovate innovative communities",
              spans: [],
            },
          ],
          description: [
            {
              type: "paragraph",
              text: "Sit pariatur ipsum culpa quis quis commodo ullamco ut ad pariatur velit nostrud.",
              spans: [],
            },
          ],
          link: { link_type: "Web", url: "https://prismic.io" },
          linkLabel: "integrate plug-and-play channels",
        },
        {
          title: [
            { type: "heading3", text: "Brand transparent models", spans: [] },
          ],
          description: [
            {
              type: "paragraph",
              text: "Elit laborum eu consequat in deserunt magna quis veniam anim.",
              spans: [],
            },
          ],
          link: { link_type: "Web", url: "http://google.com" },
          linkLabel: "transform revolutionary web services",
        },
        {
          title: [
            { type: "heading3", text: "Target robust partnerships", spans: [] },
          ],
          description: [
            {
              type: "paragraph",
              text: "Cillum ipsum minim Lorem deserunt ut do Lorem duis ut.",
              spans: [],
            },
          ],
          link: { link_type: "Web", url: "http://google.com" },
          linkLabel: "harness strategic ROI",
        },
        {
          title: [
            { type: "heading3", text: "Deploy sticky bandwidth", spans: [] },
          ],
          description: [
            {
              type: "paragraph",
              text: "Commodo id labore id proident esse quis enim magna nostrud pariatur. Eu officia veniam nulla. Laborum ex veniam veniam magna et amet culpa incididunt enim aliquip officia exercitation.",
              spans: [],
            },
          ],
          link: { link_type: "Web", url: "http://twitter.com" },
          linkLabel: "orchestrate ubiquitous content",
        },
        {
          title: [
            {
              type: "heading3",
              text: "Iterate ubiquitous applications",
              spans: [],
            },
          ],
          description: [
            {
              type: "paragraph",
              text: "Laborum sit nulla sint dolor consectetur elit ex ex duis aute elit in. Nisi veniam elit deserunt ex ea incididunt pariatur.",
              spans: [],
            },
          ],
          link: { link_type: "Web", url: "https://prismic.io" },
          linkLabel: "enhance efficient niches",
        },
      ],
      primary: {
        title: [
          {
            type: "heading2",
            text: "Seize strategic architectures",
            spans: [],
          },
        ],
        description: [
          {
            type: "paragraph",
            text: "Aliquip nostrud eu non mollit qui fugiat ea laboris sunt. Elit nisi commodo consequat deserunt aliqua sint mollit commodo anim dolor laboris Lorem eu.",
            spans: [],
          },
        ],
        primaryLink: { link_type: "Web", url: "https://prismic.io" },
        primaryLinkLabel: "reinvent value-added infrastructures",
        secondaryLink: { link_type: "Web", url: "https://slicemachine.dev" },
        secondaryLinkLabel: "mesh efficient paradigms",
      },
      id: "_TwoColumn",
    }}
  />
);
_TwoColumn.storyName = "Two Column";

export const _TwoColumnWithImage = () => (
  <MyComponent
    slice={{
      variation: "twoColumnWithImage",
      name: "Two Column with Image",
      slice_type: "call_to_action",
      items: [],
      primary: {
        title: [
          {
            type: "heading2",
            text: "Deploy leading-edge partnerships",
            spans: [],
          },
        ],
        description: [
          {
            type: "paragraph",
            text: "Ut ad commodo ex ipsum non magna sunt aliqua ad et amet. Culpa proident cupidatat fugiat. Nulla deserunt nulla ex ex irure mollit ullamco velit enim est culpa.",
            spans: [],
          },
        ],
        primaryLink: { link_type: "Web", url: "http://twitter.com" },
        primaryLinkLabel: "seize holistic networks",
        secondaryLink: { link_type: "Web", url: "https://slicemachine.dev" },
        secondaryLinkLabel: "exploit frictionless functionalities",
        image: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url: "https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop",
        },
      },
      id: "_TwoColumnWithImage",
    }}
  />
);
_TwoColumnWithImage.storyName = "Two Column with Image";
