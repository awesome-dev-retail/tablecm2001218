import React, { useState } from "react";

import { PlusOutlined } from "@ant-design/icons";

export default function TableList() {
  const dishListData = [
    {
      id: "1",
      name: "Spring Rolls",
      money: 10,
      concession: "",
    },
    {
      id: "2",
      name: "French Onion Soup",
      money: 10,
      concession: "",
    },
    {
      id: "3",
      name: "Tomato Bruschetta",
      money: 20,
      concession: "",
    },
    {
      id: "4",
      name: "Caesar Salad",
      money: 5,
      concession: "",
    },
    {
      id: "5",
      name: "Mixed Green Salad",
      money: 10,
      concession: "",
    },
    {
      id: "6",
      name: "Garden Vegetables",
      money: 10,
      concession: "",
    },
    {
      id: "1",
      name: "Spring Rolls",
      money: 10,
      concession: "",
    },
    {
      id: "1",
      name: "Spring Rolls",
      money: 10,
      concession: "",
    },
    {
      id: "1",
      name: "Spring Rolls",
      money: 10,
      concession: "",
    },
    {
      id: "1",
      name: "Spring Rolls",
      money: 10,
      concession: "",
    },
    {
      id: "1",
      name: "Spring Rolls",
      money: 10,
      concession: "",
    },
    // {
    //   id: "1",
    //   tag: "2/4",
    //   money: 193,
    //   time: "9124  Mins",
    //   status: "eating",
    // },
  ];

  const [tableList, setTableList] = useState(dishListData);

  const [showTableInfo, setShowTableInfo] = useState(false);

  const getClass = (type) => {
    return type === "eating" ? "eating" : type === "waitPlanOrder" ? "wait-plan-order" : "empty";
  };
  return (
    <div className="table-list">
      {tableList.map((item) => (
        <div key={item.id} className={`table-item ${getClass(item.status)}`} onClick={() => setShowTableInfo(true)}>
          <p className="table-id">{item.name}</p>
          <div className="money">${item.money}</div>
          {/* {item.combination && <div>share {item.combination} table</div>}
          {item.status === "waitPlanOrder" && <div className="wait-plan-order-text">To be ordered</div>}
          <div>
            {item.tag} {item.time && <span>{item.time}</span>}
          </div> */}
        </div>
      ))}
      <div className="table-item add-table">
        <PlusOutlined />
        <div>Add Dish</div>
      </div>
    </div>
  );
}
