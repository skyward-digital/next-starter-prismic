import MyComponent from "../../../../slices/Navigation";

export default {
  title: "slices/Navigation",
};

export const _DefaultSlice = () => (
  <MyComponent
    slice={{
      variation: "default-slice",
      name: "Default slice",
      slice_type: "navigation",
      items: [],
      primary: {
        title: [
          {
            type: "paragraph",
            text: "Anim cillum voluptate mollit ex est aliquip et anim occaecat cupidatat est ea. Pariatur nostrud enim ullamco laborum cupidatat anim fugiat est cupidatat incididunt veniam laborum non eu.",
            spans: [],
          },
        ],
        link: { link_type: "Web", url: "http://google.com" },
      },
      id: "_DefaultSlice",
    }}
  />
);
_DefaultSlice.storyName = "Default slice";

export const _WithSubnav = () => (
  <MyComponent
    slice={{
      variation: "withSubnav",
      name: "With Subnav",
      slice_type: "navigation",
      items: [
        {
          title: [
            {
              type: "paragraph",
              text: "Officia excepteur occaecat mollit irure amet mollit reprehenderit minim aliquip aute sunt et ut duis sint. Amet commodo mollit incididunt incididunt.",
              spans: [],
            },
          ],
          link: { link_type: "Web", url: "https://prismic.io" },
        },
        {
          title: [
            {
              type: "paragraph",
              text: "Voluptate eu laboris anim ullamco deserunt reprehenderit fugiat irure. Nostrud ipsum anim reprehenderit sint deserunt ex enim cupidatat sunt.",
              spans: [],
            },
          ],
          link: { link_type: "Web", url: "https://slicemachine.dev" },
        },
        {
          title: [
            {
              type: "paragraph",
              text: "Eu elit amet anim ea duis irure dolore aliquip nisi consectetur adipisicing. Excepteur aliqua officia Lorem eiusmod duis commodo commodo cupidatat aute mollit nulla qui eu ad enim.",
              spans: [],
            },
          ],
          link: { link_type: "Web", url: "https://prismic.io" },
        },
      ],
      primary: {
        title: [
          {
            type: "paragraph",
            text: "Pariatur mollit enim nostrud veniam.",
            spans: [],
          },
        ],
        link: { link_type: "Web", url: "http://google.com" },
      },
      id: "_WithSubnav",
    }}
  />
);
_WithSubnav.storyName = "With Subnav";
