import { createContext, useContext, useState } from "react";

export const UIContext: any = createContext({});
export const useUIContext: any = () => useContext(UIContext);

export const UIProvider: any = ({ children }: { children: any }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

  const value = {
    drawerOpen,
    setDrawerOpen,
    showSearchBox,
    setShowSearchBox,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
