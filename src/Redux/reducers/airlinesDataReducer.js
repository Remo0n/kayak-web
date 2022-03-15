import { GET_AIRLINES_DATA } from "../type";

const initialState = {
  data: [],
  loading: true,
};

const airlinesDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AIRLINES_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default airlinesDataReducer;
