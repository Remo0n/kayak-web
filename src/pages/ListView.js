import React from "react";

import SearchFilter from "../components/listview/SearchFilter";
import AirlineItem from "../components/listview/AirlineItem";
import AirlineList from "../components/listview/AirlineList";

const ListView = () => {
  return (
    <>
      <SearchFilter />
      <AirlineItem />
      <AirlineList />
    </>
  );
};

export default ListView;
