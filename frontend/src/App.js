import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import { LoggedInRoutes } from "./routes/LoggedInRoutes";
import { NotLoggedInRoutes } from "./routes/NotLoggedInRoutes";
import Activate from "./pages/home/Activate";
import { ResetPassword } from "./pages/resetpassword";
import { CreatePostPopup } from "./components/createPostPopup";
import { useSelector } from "react-redux";
import { useState } from "react";
function App() {
  const user = useSelector((state) => state.user);
  const [showPostUp, setShowPostUp] = useState(true);

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
