import Cookies from "js-cookie";

export function userReducer(
  state = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
  action
) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      console.log("dispath is success");
      return null;

    default:
      return state;
  }
}
