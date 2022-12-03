type ActionType = {
  type: string;
  payload: any;
};
type StateType = {
  loading: boolean;
  error: string;
  posts: [];
};
const initState: StateType = {
  loading: false,
  error: "",
  posts: [],
};
export function postReducer(state = initState, action: ActionType) {
  switch (action.type) {
    case "POST_REQUEST":
      console.log("state: ", state);

      return { ...state, loading: false, error: "" };
    case "POST_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        posts: action.payload,
      };
    default:
      return state;
  }
}
