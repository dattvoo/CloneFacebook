import React, { useRef, useState } from "react";
import "./style.css";
import Picker from "emoji-picker-react";
import { useEffect } from "react";

export const CreatePostPopup = ({ user }) => {
  const [text, setText] = useState("");
  const [showPrevent, setShowPrevent] = useState(false);
  const [picker, setPicker] = useState(false);
  const textRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState();

  const handleEmoji = ({ emoji }) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);
    setCursorPosition(start.length + 2);
  };
  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);
  return (
    <div className="blur">
      <div className="postBox">
        <div className="box_header">
          <div className="small_circle">
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
              <i className="arrowDown_icon"></i>
            </div>
          </div>
        </div>

        {!showPrevent && (
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
        )}
        <div className="post_emojis_wrap">
          {picker && (
            <div className="comment_emoji_picker rlmove">
              <Picker onEmojiClick={handleEmoji} height="350px" />
            </div>
          )}
          <img src="../../../icons/colorful.png" alt="" />
          <i
            className="emoji_icon_large"
            onClick={() => setPicker((prev) => !prev)}
          ></i>
        </div>
      </div>
    </div>
  );
};
