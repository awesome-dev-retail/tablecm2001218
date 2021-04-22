/* eslint-disable react/prop-types */
import React, { useState } from "react";

import { withRouter } from "react-router-dom";

import { PlusOutlined } from "@ant-design/icons";

function TableList(props) {
  const tableListData = [
    {
      id: "1",
      tag: "2/4",
      money: 193,
      time: "9124分",
      status: "eating",
    },
    {
      id: "2",
      tag: "2/4",
      money: 193,
      time: "9124分",
      status: "eating",
    },
    {
      id: "3",
      tag: "2/4",
      money: 193,
      time: "9124分",
      status: "eating",
    },
    {
      id: "4",
      tag: "2/4",
      money: 193,
      time: "9124分",
      status: "eating",
    },
    {
      id: "5",
      tag: "2/4",
      status: "waitPlanOrder",
    },
    {
      id: "6",
      tag: "2/4",
      money: 193,
      combination: 2,
      time: "9124分",
      status: "eating",
    },
    {
      id: "7",
      tag: "2/4",
      money: 193,
      combination: 2,
      time: "9124分",
      status: "eating",
    },
    {
      id: "8",
      tag: "2/4",
      money: 193,
      time: "9124分",
      status: "eating",
    },
    {
      id: "9",
      tag: "2/4",
      money: 193,
      time: "9124分",
      status: "eating",
    },
    {
      id: "10",
      tag: "2/4",
      status: "empty",
    },
    {
      id: "11",
      tag: "2/4",
      money: 193,
      time: "9124分",
      status: "eating",
    },
    {
      id: "12",
      tag: "2/4",
      status: "empty",
    },
    {
      id: "13",
      tag: "2/4",
      status: "empty",
    },
    {
      id: "14",
      tag: "2/4",
      status: "empty",
    },
    {
      id: "15",
      tag: "2/4",
      status: "empty",
    },
    {
      id: "17",
      tag: "2/4",
      money: 193,
      time: "9124分",
      status: "eating",
    },
    {
      id: "18",
      tag: "2/4",
      status: "empty",
    },
    {
      id: "VIP",
      tag: "2/4",
      status: "empty",
    },
  ];
  const [tableList, setTableList] = useState(tableListData);

  // const [showTableInfo, setShowTableInfo] = useState(false);

  const getClass = (type) => {
    return type === "eating" ? "eating" : type === "waitPlanOrder" ? "wait-plan-order" : "empty";
  };

  const handleClick = () => {
    // eslint-disable-next-line react/prop-types
    props.history.push("/order");
  };

  return (
    <div className="table-list">
      {tableList.map((item) => (
        <div key={item.id} className={`table-item ${getClass(item.status)}`} onClick={() => handleClick()}>
          {/* <div key={item.id} className={`table-item ${getClass(item.status)}`} onClick={() => setShowTableInfo(true)}> */}
          <p className="table-id">{item.id}</p>
          {item.money && <div className="money">￥{item.money}</div>}
          {item.combination && <div>拼{item.combination}桌</div>}
          {item.status === "waitPlanOrder" && <div className="wait-plan-order-text">待下单</div>}
          <div>
            {item.tag} {item.time && <span>{item.time}</span>}
          </div>
        </div>
      ))}
      <div className="table-item add-table">
        <PlusOutlined />
        <div>添加桌台</div>
      </div>
    </div>
  );
}

export default withRouter(TableList);
