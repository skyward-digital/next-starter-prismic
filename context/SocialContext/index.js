import { createContext } from "react";

const SocialContext = createContext();

const SocialProvider = ({ socials, children }) => (
  <SocialContext.Provider value={socials}>{children}</SocialContext.Provider>
);

export { SocialContext, SocialProvider };
