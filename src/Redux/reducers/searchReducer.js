import { SEARCH } from "../type";

const initialState = {
  q: "",
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        q: action.payload,
      };
    default:
      return state;
  }
}
