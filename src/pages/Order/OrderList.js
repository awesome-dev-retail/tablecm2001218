import React, { useState } from "react";

import { MenuOutlined, PrinterOutlined, FileTextFilled, CaretDownOutlined, QuestionCircleFilled, AntDesignOutlined, PlusOutlined } from "@ant-design/icons";

export default function OrderList() {
  const [showMore, setShowMore] = useState(false);

  const tableMenus = ["催菜", "转菜", "退菜", "打折/赠菜", "取消优惠", "打印结算单", "撤单"];
  const billData = [
    {
      id: 1,
      name: "海皇豆腐煲",
      count: 1,
      oldPrice: 23,
      newPrice: 2.3,
      tip: "甜度：正常，半塘",
    },
    {
      id: 2,
      name: "海皇豆腐煲",
      count: 1,
      oldPrice: 23,
      newPrice: 2.3,
    },
    {
      id: 3,
      name: "海皇豆腐煲",
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
            <span>桌台1，人数12/12</span>
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
                  <div className="new-price">￥{item.newPrice}</div>
                  <div className="old-price">￥{item.oldPrice}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="table-bottom">
          <div className="tatal-money-container">
            <span>共3项</span>
            <div className="tatal-money">￥5.4</div>
          </div>
          <div className="btn-group">
            <div>加菜</div>
            <div>去结账</div>
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
          <span>更多</span>
          <div className={`table-info-childs-menu ${showMore ? "show" : "hide"}`}>
            <div>拼桌</div>
            <div>换桌</div>
            <div>合桌</div>
            <div>批量</div>
          </div>
        </div>
      </div>
    </div>
  );
}
