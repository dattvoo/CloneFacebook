import { Header } from "../../components/header";
import "./style.css";
import "./responsive.css";
import { LeftHome } from "../../components/home/Left";
import { useSelector } from "react-redux";
export default function Home() {
  const user = useSelector(state => state.user);
  return (
    <div>
      <Header />
      <LeftHome user={user}/>
    </div>
  );
}
