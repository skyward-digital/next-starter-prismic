import "../styles/index.css";

import { SocialProvider } from "../context/SocialContext";
import socials from "../context/SocialContext/mocks.json";

export const parameters = {
  // actions: { argTypesRegex: "^on[A-Z].*" },
  // chromatic: { viewports: [320, 768, 1024, 1440] },
};

export const decorators = [
  (Story) => {
    return (
      <SocialProvider socials={{ socials }}>
        <Story />
      </SocialProvider>
    );
  },
];
