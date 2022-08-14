import { createContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ globals, children }) => (
  <GlobalContext.Provider value={globals}>{children}</GlobalContext.Provider>
);

export { GlobalContext, GlobalProvider };
