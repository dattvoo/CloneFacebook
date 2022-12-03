import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import { LoggedInRoutes } from "./routes/LoggedInRoutes";
import { NotLoggedInRoutes } from "./routes/NotLoggedInRoutes";
import Activate from "./pages/home/Activate";
import { ResetPassword } from "./pages/resetpassword";
import { CreatePostPopup } from "./components/createPostPopup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const user = useSelector((state) => state.user);
  const [showPostUp, setShowPostUp] = useState(true);

  const dispatch = useDispatch();

  const getAllPosts = async () => {
    try {
      dispatch({ type: "POST_REQUEST" });
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getAllPosts`, {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
      });
      if (data) {
        console.log("Have data");
        dispatch({ type: "POST_SUCCESS", payload: data })
      }
    } catch (error) {
      dispatch({ type: "POST_ERROR", payload: error.response.data.message })
    }
  }

  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div>
      {showPostUp && <CreatePostPopup user={user} setShowPostUp={setShowPostUp} />}

      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/activate/:token" element={<Activate />} exact />
          <Route path="/" element={<Home setShowPostUp={setShowPostUp} />} exact />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
        <Route element={<ResetPassword />} path="/reset" />
      </Routes>
    </div>
  );
}

export default App;
