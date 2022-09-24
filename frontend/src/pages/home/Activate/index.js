import { Header } from "../../../components/header";
import "../responsive.css";
import { LeftHome } from "../../../components/home/Left";
import { useDispatch, useSelector } from "react-redux";
import { RightHome } from "../../../components/home/Right";
import { Stories } from "../../../components/home/stories";
import { CreatePost } from "../../../components/createPost";
import { useEffect, useState } from "react";
import { ActivateForm } from "./ActivateForm";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
export default function Activate() {
  const user = useSelector(state => state.user);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activateAccount = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/activate`,
        { token },
        {
          headers: { Authorization: `Bearer ${user.token}` }
        }
      )
      setSuccess(data.message);
      Cookies.set("user", JSON.stringify({ ...user, verify: true }));
      dispatch({ type: "ACTIVATE", payload: true });
      setTimeout(() => {
        navigate("/")
      }, 2000);
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  useEffect(() => {
    activateAccount();
  }, []);
  return (
    <div className="home">
      {success && <ActivateForm
        type="success"
        header="Account verification successed."
        text={success}
        loading={loading}
      />}
      {error && <ActivateForm
        type="error"
        header="Account verification failed."
        text={error}
        loading={loading}
      />}
      <Header />
      <LeftHome user={user} />
      <div className="home_middle">
        <Stories />
        <CreatePost />
      </div>
      <RightHome user={user} />
    </div>
  );
}
