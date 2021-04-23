import React, { useState } from "react";

import { MenuOutlined, PrinterOutlined, FileTextFilled, CaretDownOutlined, QuestionCircleFilled, AntDesignOutlined, PlusOutlined } from "@ant-design/icons";

export default function OrderList() {
  const [showMore, setShowMore] = useState(false);

  const tableMenus = ["Urge", "Forword", "Refund", "Discount", "Concession", "Print", "Cancel"];
  const billData = [
    {
      id: 1,
      name: "Steak",
      count: 1,
      oldPrice: 23,
      newPrice: 2.3,
      tip: "cooked：spicy, lemon",
    },
    {
      id: 2,
      name: "Masala Steak",
      count: 1,
      oldPrice: 23,
      newPrice: 2.3,
    },
    {
      id: 3,
      name: "Tuna",
      count: 1,
      oldPrice: 23,
      newPrice: 2.3,
    },
  ];

  return (
    <div className="table-info-container">
      <div className="inner">
        <div className="table-info-inner">
          <div className="top-info">
            {/* <div className="top-info" onClick={() => setShowTableInfo(false)}> */}
            <span>Table Number: 1，12/12</span>
            {/* <span>桌台1，人数12/12</span> */}
            <CaretDownOutlined />
          </div>
          <div className="bill-list">
            {billData.map((item, index) => (
              <div className={`bill-item ${index === 0 ? "bill-item-current" : ""}`} key={item.id}>
                <div className="bill-name">
                  <div>{item.name}</div>
                  {item.tip && <div className="food-tip">{item.tip}</div>}
                </div>
                <div className="count">X {item.count}</div>
                <div className="price">
                  <div className="new-price">${item.newPrice}</div>
                  <div className="old-price">$ {item.oldPrice}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="table-bottom">
          <div className="tatal-money-container">
            <span>Total: 3 dishes</span>
            {/* <span>共3项</span> */}
            <div className="tatal-money">$6.9</div>
          </div>
          <div className="btn-group">
            <div>Add Dish</div>
            {/* <div>加菜</div> */}
            <div>Checkout</div>
            {/* <div>去结账</div> */}
          </div>
        </div>
      </div>
      <div className="table-info-menus">
        {tableMenus.map((item) => (
          <div className="table-info-menu-item" key={item}>
            {item}
          </div>
        ))}
        <div className="table-info-menu-item" onClick={() => setShowMore(!showMore)}>
          <span>More</span>
          <div className={`table-info-childs-menu ${showMore ? "show" : "hide"}`}>
            <div>Share Table</div>
            <div>Change Table</div>
            <div>Combine Table</div>
            <div>Batch</div>
            {/* <div>拼桌</div>
            <div>换桌</div>
            <div>合桌</div>
            <div>批量</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
