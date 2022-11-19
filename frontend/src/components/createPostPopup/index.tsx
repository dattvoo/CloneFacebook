import axios from "axios";
import { useRef, useState } from "react";
import PlulseLoader from "react-spinners/PulseLoader";
import useClickOutSide from "../../helpers/clickOutSide";
import { AddToYourPost } from "./AddToYourPost";
import { EmojiPickerBackgrounds } from "./EmojiPickerBackgrounds";
import { ImagePreview } from "./ImagePreview";
import { PostError } from "./PostError";
import "./style.css";

interface IProps {
  user: any;
  setShowPostUp: any;
}

export const CreatePostPopup = ({ user, setShowPostUp }: IProps) => {
  const [text, setText] = useState<string>("");
  const [showPrevent, setShowPrevent] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("asdasdsadsad");
  const [images, setImages] = useState<[]>([]);
  const [background, setBackground] = useState("");
  const postupRef = useRef(null);
  useClickOutSide(postupRef, () => {
    setShowPostUp(false);
  });
  const createPost = async (
    type: string | null,
    background: string,
    text: string,
    images: [] | null,
    user: any,
    token: string
  ) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/createPost`,
        {
          type,
          background,
          text,
          images,
          user,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return "success";
    } catch (error: any) {
      return error.response.data.message;
    }
  };
  const handlePostSubmit = async () => {
    if (background) {
      setLoading(true);
      const respone = await createPost(
        null,
        background,
        text,
        null,
        user?.id,
        user?.token
      );

      setLoading(false);
      if (respone === "success") {
        setBackground("");
        setText("");
        setShowPostUp(false);
      } else {
        setError(respone);
      }
    }
  };

  return (
    <div className="blur">
      <div className="postBox" ref={postupRef}>
        {error && <PostError error={error} setError={setError} />}
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
              <i className="arrowDown_icon"></i>
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
        ) : (
          <ImagePreview
            text={text}
            setText={setText}
            user={user}
            images={images}
            setImages={setImages}
            setShowPrevent={setShowPrevent}
          />
        )}
        <AddToYourPost setShowPrevent={setShowPrevent} />
        <button
          className="post_submit"
          onClick={() => {
            handlePostSubmit();
          }}
        >
          {loading ? <PlulseLoader color="#fff" size={5} /> : "Post"}
        </button>
      </div>
    </div>
  );
};
