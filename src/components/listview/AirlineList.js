import React, { useEffect } from "react";
import useState from "react-usestateref";

import { connect } from "react-redux";
import { getAirlinesData } from "../../Redux/actions/airlinesDataAction";

import { ThreeDots } from "react-loader-spinner";

import AirlineItem from "./AirlineItem";
import "./AirlineList.scss";

const AirlineList = (props) => {
  const { data, loading } = props.airline;
  const q = props.search.q;

  const [count, setCount, countRef] = useState({
    prev: 0,
    next: 10,
  });
  const [airlinesData, setAirlinesData, airlinesDataRef] = useState(
    data.slice(count.prev, count.next)
  );
  const [airlinesCount, setAirlinesCount, airlinesCountRef] = useState(
    data.length
  );

  const loadMoreData = () => {
    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }));

    let newArr = data.slice(countRef.current.prev, countRef.current.next);

    setAirlinesData((oldArr) => [...oldArr, ...newArr]);
  };

  const handleScroll = (e) => {
    const airlinesContainer = document.getElementById("airlines-container");
    if (
      airlinesContainer.scrollHeight -
        airlinesContainer.scrollTop -
        airlinesContainer.clientHeight <
        1 &&
      airlinesDataRef.current.length < airlinesCountRef.current
    ) {
      console.log(
        airlinesDataRef.current.length,
        "s",
        airlinesCountRef.current
      );
      loadMoreData();
    }
  };

  useEffect(() => {
    const airlinesContainer = document.getElementById("airlines-container");
    props.getAirlinesData();
    airlinesContainer.addEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (q) {
      let searchData = data.filter((item) => {
        return Object.values(item.name)
          .join("")
          .toLowerCase()
          .includes(q.toLowerCase());
      });
      setCount({
        prev: 0,
        next: 10,
      });
      setAirlinesData(
        searchData.length > 10
          ? searchData.slice(countRef.current.prev, countRef.current.next)
          : searchData
      );
      setAirlinesCount(searchData.length);
      console.log(searchData.length);
    }
    if (q.length === 0) {
      setCount({
        prev: 0,
        next: 10,
      });
      setAirlinesData(data.slice(countRef.current.prev, countRef.current.next));
      setAirlinesCount(data.length);
    }
  }, [q]);
  console.log(airlinesCount);

  return (
    <>
      {loading && (
        <div className="loader-container">
          <ThreeDots
            height="100"
            width="100"
            color="#f49000"
            ariaLabel="loading"
          />
        </div>
      )}
      <div id="airlines-container" className="airlines-container">
        {airlinesData &&
          airlinesData.map((item, index) => (
            <AirlineItem
              key={index}
              id={item.code}
              img={item.logoURL}
              name={item.name}
            />
          ))}
      </div>

      <div className="airlines-counter-container">
        <span className="airlines-counter">
          Displaying - {airlinesData.length}/{airlinesCount}
        </span>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  airline: state.airline,
  search: state.search,
});

export default connect(mapStateToProps, { getAirlinesData })(AirlineList);
