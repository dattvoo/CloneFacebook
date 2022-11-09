import React, { useEffect, useRef, useState } from "react";
import Picker from "emoji-picker-react";

export const EmojiPickerBackgrounds = ({
  text,
  setText,
  user,
  type2,
  background,
  setBackground,
}) => {
  const [picker, setPicker] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();
  const textRef = useRef(null);
  const backgroundRef = useRef(null);

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

  const postBackgrounds = [
    "../../../images/postBackgrounds/1.jpg",
    "../../../images/postBackgrounds/2.jpg",
    "../../../images/postBackgrounds/3.jpg",
    "../../../images/postBackgrounds/4.jpg",
    "../../../images/postBackgrounds/5.jpg",
    "../../../images/postBackgrounds/6.jpg",
    "../../../images/postBackgrounds/7.jpg",
    "../../../images/postBackgrounds/8.jpg",
    "../../../images/postBackgrounds/9.jpg",
  ];
  const handleChangeBackground = (index) => {
    backgroundRef.current.classList.add("bgHandler");
    backgroundRef.current.style.backgroundImage = `url(${postBackgrounds[index]})`;
    setBackground(postBackgrounds[index]);
  };
  const removeBackground = () => {
    backgroundRef.current.classList.remove("bgHandler");
    backgroundRef.current.style.backgroundImage = "";
  };
  return (
    <div className={type2 ? "images_input" : ""}>
      <div className={`${!type2 ? "flex_center" : ""}`} ref={backgroundRef}>
        <textarea
          style={{
            paddingTop: `${
              background
                ? Math.abs(textRef.current.value.length * 0.1 - 32)
                : "0"
            }%`,
          }}
          ref={textRef}
          maxLength="250"
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

        {!type2 && (
          <img
            src="../../../icons/colorful.png"
            alt=""
            onClick={() => setShowBackground((prev) => !prev)}
          />
        )}
        {!type2 && showBackground && (
          <div className="post_Backgrounds">
            <div className="no_bg" onClick={() => removeBackground()}></div>
            {postBackgrounds.map((post, index) => (
              <img
                src={post}
                alt=""
                key={index}
                onClick={() => {
                  handleChangeBackground(index);
                }}
              />
            ))}
          </div>
        )}
        <i
          className={`emoji_icon_large ${type2 ? "moveleft" : ""}`}
          onClick={() => setPicker((prev) => !prev)}
        ></i>
      </div>
    </div>
  );
};
