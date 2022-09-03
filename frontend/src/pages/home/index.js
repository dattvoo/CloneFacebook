import { useRef, useState } from "react";
import { Header } from "../../components/header";
import useClickOutSide from "../../helpers/clickOutSide";

export default function Home() {
  const el = useRef(null);
  const [visable, setVisible] = useState(true);
  useClickOutSide(el, () => {
    setVisible(false);
  });
  return (
    <div>
      <Header />
      {visable && <div className="card" ref={el}></div>}
    </div>
  )
}
