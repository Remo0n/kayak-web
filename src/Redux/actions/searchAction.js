import { SEARCH } from "../type";

export const handleSearch = (e) => (dispatch) => {
  try {
    dispatch({
      type: SEARCH,
      payload: e.target.value,
    });
  } catch (e) {
    console.log(e);
  }
};
