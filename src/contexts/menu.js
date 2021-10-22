import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export function MenuProvider(props) {
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
  

