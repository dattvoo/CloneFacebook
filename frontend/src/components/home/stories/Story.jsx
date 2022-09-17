import React from "react";

export const Story = ({ story }) => {
  console.log("🚀 ~ file: Story.jsx ~ line 4 ~ Story ~ story", story.img);

  return (
    <div className="story">
      <img src={story.image} alt="" className="story_img" />
      <div className="story_profile_pic">
        <img src={story.profile_picture} alt=""/>
      </div>  
      <div className="story_profile_name">{story.profile_name}</div>
    </div>
  );
};
