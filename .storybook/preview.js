import "../styles/index.css";

// import { RouterContext } from "next/dist/shared/lib/router-context"; // next 11.2
import { GlobalProvider } from "../context/GlobalContext";
import { socials } from "../context/GlobalContext/mocks.json";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // backgrounds: { //backgrounds for enabling light/dark mode variation testing
  //   default: "dark",
  //   values: [
  //     {
  //       name: "light",
  //       value: "#F3F4F6",
  //     },
  //     {
  //       name: "dark",
  //       value: "#1F2937",
  //     },
  //   ],
  // },
  // nextRouter: {
  //   Provider: RouterContext.Provider,
  // },
};

export const decorators = [
  (Story) => {
    return (
      <GlobalProvider globals={{ socials }}>
        <Story />
      </GlobalProvider>
    );
  },
];
