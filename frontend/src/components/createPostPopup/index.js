import React, { useEffect, useRef, useState } from "react";
import useClickOutSide from "../../helpers/clickOutSide";
import { AddToYourPost } from "./AddToYourPost";
import { EmojiPickerBackgrounds } from "./EmojiPickerBackgrounds";
import { ImagePreview } from "./ImagePreview";
import "./style.css";

export const CreatePostPopup = ({ user, setShowPostUp }) => {
  const [text, setText] = useState("");
  const [showPrevent, setShowPrevent] = useState(false);
  const [images, setImages] = useState([]);
  const [background, setBackground] = useState("");
  const postupRef = useRef(null);
  useClickOutSide(postupRef, () => {
    setShowPostUp(false);
  });
  return (
    <div className="blur">
      <div className="postBox" ref={postupRef}>
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
              background={background}
              setBackground={setBackground}
            />
          </>
        ) : <ImagePreview 
          text={text}
          setText={setText}
          user={user}
          images={images}
          setImages={setImages}
          setShowPrevent={setShowPrevent}

        />}
        <AddToYourPost setShowPrevent={setShowPrevent} />
        <button className="post_submit">Post</button>
      </div>
    </div>
  );
};
