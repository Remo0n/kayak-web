import React from "react";

import { connect } from "react-redux";
import { handleSearch } from "../../Redux/actions/searchAction";

import "./SearchFilter.scss";

const SearchFilter = (props) => {
  return (
    <div className="search-container">
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Airline filter ..."
        value={props.q}
        onChange={(e) => props.handleSearch(e)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({ search: state.search });

export default connect(mapStateToProps, { handleSearch })(SearchFilter);
