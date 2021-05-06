import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Index = (props) => {
  return (
    <div className="counter-container">
      <div className="reduce" onClick={() => props.updateCount(-1)}>
        -
      </div>
      <div className="count">{props.count || 0}</div>
      <div className="add" onClick={() => props.updateCount(1)}>
        +
      </div>
    </div>
  );
};

Index.propTypes = {
  updateCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default Index;
