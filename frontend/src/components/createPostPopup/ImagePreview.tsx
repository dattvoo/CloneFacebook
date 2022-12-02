import React, { useRef } from "react";
import { EmojiPickerBackgrounds } from "./EmojiPickerBackgrounds";

interface IProps {
  text: string;
  setText: any;
  user?: any;
  type2?: boolean;
  background?: any;
  setBackground?: any;
  images: [];
  setImages: any;
  setShowPrevent: any;
  setError?: React.Dispatch<React.SetStateAction<string>> | any;
}
export const ImagePreview = ({
  text,
  setText,
  user,
  images,
  setImages,
  setShowPrevent,
  setError,
}: IProps) => {
  const imageInputRef = useRef(null);
  const handleImages = (e: any) => {
    let files = Array.from(e.target.files);
    files.forEach((image: any) => {
      console.log(image.type === "image/jpeg");
      if (
        image.type !== "image/jpeg" &&
        image.type !== "image/png" &&
        image.type !== "image/webp" &&
        image.type !== "image/gif" &&
        image.type !== "image/jpg"
      ) {
        setError(
          `${image.name} format is not supported! Only Jpeg, Png, Webp, Gif are allowed`
        );
        return;
      } else if (image.size > 1024 * 1024 * 5) {
        files = files.filter((img: any) => img?.name !== image.name);
        setError(`${image.name} size is too large max 5mb alowed`);
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (readerEvent) => {
        setImages((images: any) => [...images, readerEvent?.target?.result]);
      };
    });
  };
  return (
    <div className="overflow_a scrollbar">
      <EmojiPickerBackgrounds text={text} setText={setText} user={user} type2 />
      <div className="add_pics_wrap">
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          multiple
          hidden
          ref={imageInputRef}
          onChange={handleImages}
        />
        {images && images.length ? (
          <div className="add_pics_inside1 p0">
            <div className="preview_actions">
              <button className="hover1">
                <i className="edit_icon"></i>
                Edit
              </button>
              <button className="hover1">
                <i className="addPhoto_icon"></i>
                Add Photos/Videos
              </button>
            </div>
            <div
              className="small_white_circle"
              onClick={() => setShowPrevent(false)}
            >
              <i className="exit_icon" onClick={() => setImages([])}></i>
            </div>
            <div
              className={
                images.length === 1
                  ? "preview1"
                  : images.length === 2
                  ? "preview2"
                  : images.length === 3
                  ? "preview3"
                  : images.length === 4
                  ? "preview4"
                  : images.length === 5
                  ? "preview5"
                  : images.length % 2 === 0
                  ? "preview6"
                  : "preview6 singular_grid"
              }
            >
              {images.map((img: any, index: number) => {
                return <img key={index} src={img} />;
              })}
            </div>
          </div>
        ) : (
          <div className="add_pics_inside1">
            <div
              className="small_white_circle"
              onClick={() => setShowPrevent(false)}
            >
              <i className="exit_icon" />
            </div>
            <div
              className="add_col"
              onClick={() =>
                // @ts-ignore
                imageInputRef.current.click()
              }
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
