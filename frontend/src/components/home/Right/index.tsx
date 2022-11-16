import { Dots, NewRoom, Search } from "../../../svg";
import { Splitter1 } from "../../Splitter1";
import { ContactList } from "./ContactList";
import "./style.css";
export const RightHome = ({user}:any) => {
    const color = "#65676b";
  return (
    <div className="right_home">
      <div className="heading">Sponsored</div>
      <Splitter1 />
      <div className="contacts_wrap">
        <div className="contacts_header">
          <div className="contacts_header_left">Contacts</div>
          <div className="contacts_header_right">
            <div className="contact_circle hover1">
              <NewRoom color={color} />
            </div>
            <div className="contact_circle hover1">
              <Search color={color} />
            </div>
            <div className="contact_circle hover1">
              <Dots color={color} />
            </div>
          </div>
        </div>
        <div className="contacts_list">
            <ContactList user={user}/>
        </div>
      </div>
    </div>
  );
};
