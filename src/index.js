import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { MenuProvider } from "./contexts/menu";

import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
