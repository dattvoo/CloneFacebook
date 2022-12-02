import React from "react";
import { ArrowRight, Plus } from "../../../svg";
import "./style.css";
import { stories } from "../../../constant/Stories";
import { Story } from "./Story";
import { useMediaQuery } from "react-responsive";
export const Stories = () => {
  const query1175px = useMediaQuery({
    query: "(max-width: 1175px)"
  });
  const querry1030px = useMediaQuery({
    query: "(max-width: 1030px)"
  })
  const querry885px = useMediaQuery({
    query: "max-width:885px"
  })
  const maxStories = querry885px ? 5 : querry1030px ? 5 : query1175px ? 4 : stories.length;






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
      {stories.slice(0, maxStories).map((item, index) => (
        <Story key={index} story={item} />
      ))}
      <div className="white_circle">
        <ArrowRight color="#65676b" />
      </div>
    </div>
  );
};
