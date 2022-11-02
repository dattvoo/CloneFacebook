import React, { useRef } from "react";
import { EmojiPickerBackgrounds } from "./EmojiPickerBackgrounds";

export const ImagePreview = ({ text, setText, user, images, setImages }) => {
  console.log(
    "🚀 ~ file: ImagePreview.js ~ line 5 ~ ImagePreview ~ images",
    images
  );
  const imageInputRef = useRef(null);
  const handleImages = (e) => {
    let files = Array.from(e.target.files);


    files.forEach((image) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (readerEvent) => {
        console.log(
          "🚀 ~ file: ImagePreview.js ~ line 17 ~ files.forEach ~ readerEvent",
          readerEvent
        );
        setImages((images) => [...images, readerEvent.target.result]);
      };
    });
  };
  return (
    <div className="overflow_a">
      <EmojiPickerBackgrounds text={text} setText={setText} user={user} type2 />
      <div className="add_pics_wrap">
        <input
          type="file"
          multiple
          hidden
          ref={imageInputRef}
          onChange={handleImages}
        />
        {images && images.length ? (
          <img src={images[0]} alt="" />
        ) : (
          <div className="add_pics_inside1">
            <div className="small_white_circle">
              <i className="exit_icon" />
            </div>
            <div
              className="add_col"
              onClick={() => imageInputRef.current.click()}
            >
              <div className="add_circle">
                <i className="addPhoto_icon" />
              </div>
              <span>Add Photos/Videos</span>
              <span>or drag and drop</span>
            </div>
          </div>
        )}
        <div className="add_pics_inside2">
          <div className="add_circle">
            <i className="phone_icon" />
          </div>
          <div className="mobile_text">Add phots from your mobile device</div>
          <div className="addphone_btn">Add</div>
        </div>
      </div>
    </div>
  );
};
