import React, { useEffect, useRef, useState } from "react";
import Picker from "emoji-picker-react";

export const EmojiPickerBackgrounds = ({ text, setText, user, type2 }) => {
  const [picker, setPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);
  const handleEmoji = ({ emoji }) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);
    setCursorPosition(start.length + 2);
  };
  return (
    <div className={type2 ? "images_input" : ""}>
      <div className={`${!type2 ? "flex_center" : ""}`}>
        <textarea
          ref={textRef}
          maxLength="100"
          value={text}
          className="post_input"
          placeholder={`What's on your mind, ${user?.first_name}?`}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className={`post_emojis_wrap ${type2 ? "input2" : ""}`}>
        {picker && (
          <div
            className={`comment_emoji_picker ${
              type2 ? "removepicker2" : "rlmove"
            }`}
          >
            <Picker onEmojiClick={handleEmoji} height="350px" />
          </div>
        )}

        {!type2 && <img src="../../../icons/colorful.png" alt="" />}
        <i
          className={`emoji_icon_large ${type2 ? "moveleft" : ""}`}
          onClick={() => setPicker((prev) => !prev)}
        ></i>
      </div>
    </div>
  );
};