/*
 * @Descripttion: 描述
 * @Author: ljz
 * @Date: 2021-05-05 08:53:31
 * @LastEditors: ljz
 * @LastEditTime: 2021-05-05 09:28:38
 */

import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Index = (props) => {
  return (
    <div className="counter-container">
      <div className="reduce" onClick={() => props.updateCount(-1)}>-</div>
      <div className="count">{props.count || 0}</div>
      <div className="add" onClick={() => props.updateCount(1)}>+</div>
    </div>
  );
};


Index.propTypes = {
  updateCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default Index;