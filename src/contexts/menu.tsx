import React, { createContext, ReactNode, useState } from "react";

type MenuContextData = {
    sideBar: boolean;
    showSidebar: () => void;
};

export const MenuContext = createContext({} as MenuContextData);

type MenuProvider = {
    children: ReactNode;
};

export function MenuProvider(props: MenuProvider) {
    const [sideBar, setSideBar] = useState(false);
  
    function showSidebar() {
      if(sideBar) {
          setSideBar(false);
      } else {
          setSideBar(true);
      }
    }
  
    return (
      <MenuContext.Provider value={{ showSidebar, sideBar }}>
        {props.children}
      </MenuContext.Provider>
    );
  }
  

