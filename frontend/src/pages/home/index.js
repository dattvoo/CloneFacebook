import { Header } from "../../components/header";
import "./style.css";
import "./responsive.css";
import { LeftHome } from "../../components/home/Left";
import { useSelector } from "react-redux";
import { RightHome } from "../../components/home/Right";
import { Stories } from "../../components/home/stories";
import "./style.css"; 
import { CreatePost } from "../../components/createPost";
export default function Home() {
  const user = useSelector(state => state.user);
  return (
    <div className="home">
      <Header />
      <LeftHome user={user} />
      <div className="home_middle">
        <Stories/>
        <CreatePost/>
      </div>
      <RightHome user={user}/>
    </div>
  );
}
