import { GET_AIRLINES_DATA } from "../type";

import fetchJsonp from "fetch-jsonp";

export const getAirlinesData = () => {
  return (dispatch, getState) => {
    return fetchJsonp(
      `https://kayak.com/h/mobileapis/directory/airlines/homework`,
      { jsonpCallback: "jsonp" }
    )
      .then((res) => res.json())
      .then((result) => dispatch({ type: GET_AIRLINES_DATA, payload: result }));
  };
};
