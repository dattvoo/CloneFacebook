import React, { useEffect, useRef, useState } from "react";
import { AddToYourPost } from "./AddToYourPost";
import { EmojiPickerBackgrounds } from "./EmojiPickerBackgrounds";
import { ImagePreview } from "./ImagePreview";
import "./style.css";

export const CreatePostPopup = ({ user, setShowPostUp }) => {
  const [text, setText] = useState("");
  const [showPrevent, setShowPrevent] = useState(true);
  const [images, setImages] = useState([]);


  return (
    <div className="blur">
      <div className="postBox">
        <div className="box_header">
          <div className="small_circle" onClick={() => setShowPostUp(false)}>

            <i className="exit_icon" />
          </div>
          <span>Create Post</span>
        </div>
        <div className="box_profile">
          <img src={user?.picture} alt="" className="box_profile_img" />
          <div className="box_col">
            <div className="box_profile_name">
              {user?.first_name} {user?.last_name}
            </div>
            <div className="box_privacy">
              <img src="../../../icons/public.png" alt="" />
              <span>Public</span>
              <i className="arrowDown_icon" ></i>

            </div>
          </div>
        </div>

        {!showPrevent ? (
          <>
            <EmojiPickerBackgrounds
              text={text}
              setText={setText}
              user={user}
            />
          </>
        ) : <ImagePreview text={text}
          setText={setText}
          user={user}
          images={images}
          setImages={setImages}
          setShowPrevent={setShowPrevent}
        />}
        <AddToYourPost setShowPrevent={setShowPrevent} />
        />}
        <AddToYourPost />
        <button className="post_submit">Post</button>
      </div>
    </div>
  );
};
