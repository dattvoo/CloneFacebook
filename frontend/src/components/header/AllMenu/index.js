import React from "react";
import "./style.css";

import { MenuLeft } from "./MenuLeft";
import { MenuRight } from "./MenuRight";
export const AllMenu = () => {
  return (
    <div className="all_menu">
      <div className="all_menu_header">Menu</div>
      <div className="all_menu_wrap scrollbar">
       <MenuLeft/>
       <MenuRight/>
      </div>
    </div>
  );
};
