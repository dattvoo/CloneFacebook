import React from "react";
import { ArrowRight, Plus } from "../../../svg";
import "./style.css";
import { stories } from "../../../constant/Stories";
import { Story } from "./Story";
export const Stories = () => {
  return (
    <div className="stories">
      <div className="create_story_card">
        <img
          src="../../../images/default_pic.png"
          alt=""
          className="create_story_img"
        />
        <div className="plus_story">
          <Plus color="#fff" />
        </div>
        <div className="story_create_text">Create Story</div>
      </div>
      {stories.map((item, index) => (
        <Story key={index} story={item} />
      ))}
      <div className="white_circle">
        <ArrowRight color="#65676b" />
      </div>
    </div>
  );
};
