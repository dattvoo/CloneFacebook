import React, { useEffect, useRef, useState } from "react";
import { AddToYourPost } from "./AddToYourPost";
import { EmojiPickerBackgrounds } from "./EmojiPickerBackgrounds";
import "./style.css";

export const CreatePostPopup = ({ user, setShowPostUp }) => {
  const [cursorPosition, setCursorPosition] = useState();
  const [text, setText] = useState("");
  const [showPrevent, setShowPrevent] = useState(false);
  const textRef = useRef(null);


  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);
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

        {!showPrevent && (
          <>
            <div className="flex_center">
              <textarea
                ref={textRef}
                maxLength="100"
                value={text}
                className="post_input"
                placeholder={`What's on your mind, ${user?.first_name}?`}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <EmojiPickerBackgrounds
              text={text}
              setText={setText}
              textRef={textRef}
            />
          </>
        )}
        <AddToYourPost />
        <button className="post_submit">Post</button>
      </div>
    </div>
  );
};
