import React from "react";
import { useParams } from "react-router-dom";

import AirlinesDetails from "../components/detailsView/AirlinesDetails";

const Details = (props) => {
  console.log(useParams());
  let id = useParams().id;

  return (
    <>
      <AirlinesDetails id={id} />
    </>
  );
};

export default Details;
