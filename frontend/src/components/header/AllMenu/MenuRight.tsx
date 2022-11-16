import React from "react";
import { create } from "../../../constant/Menu";
export const MenuRight = () => {
  return (
    <div className="all_right">
      <div className="all_right_header">Create</div>
      {create.map((item, index) => (
        <div className="all_right_item hover1" key={index}>
          <div className="all_right_circle">
            <i className={item.icon}></i>
          </div>
          {item.name}
        </div>
      ))}
    </div>
  );
};
