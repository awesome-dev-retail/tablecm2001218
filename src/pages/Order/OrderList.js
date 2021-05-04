import React, { useEffect, useState } from "react";

import { MenuOutlined, PrinterOutlined, FileTextFilled, CaretDownOutlined, QuestionCircleFilled, AntDesignOutlined, PlusOutlined } from "@ant-design/icons";

import { selectDishObjInOrder } from "../../slices/dishSlice";
import { fetchTableById } from "../../slices/tableSlice";
import { selectTable } from "../../slices/tableSlice";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router";

function OrderList(props) {
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
      name: "Soup",
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
  const dispatch = useDispatch();
  // eslint-disable-next-line react/prop-types
  const tableId = props.match.params.id;
  // debugger;
  const table = useSelector((state) => selectTable(state));
  console.log(table);

  useEffect(async () => {
    // debugger;
    await dispatch(fetchTableById(tableId));
    console.log(tableId);
  }, []);

  const dishObjFromSlice = useSelector((state) => selectDishObjInOrder(state));
  console.log(dishObjFromSlice);
  return (
    <div className="table-info-container">
      <div className="inner">
        <div className="table-info-inner">
          <div className="top-info">
            {/* <div className="top-info" onClick={() => setShowTableInfo(false)}> */}
            <span>
              Table Name: {table.table_name}，2/{table.capacity}
            </span>
            {/* <span>桌台1，人数12/12</span> */}
            <CaretDownOutlined />
          </div>
          <div className="bill-list">
            {dishObjFromSlice.map((item, index) => (
              <div className={`bill-item ${index === 0 ? "bill-item-current" : ""}`} key={item.id}>
                <div className="bill-name">
                  <div>{item.description}</div>
                  {item.tip && <div className="food-tip">{item.tip}</div>}
                </div>
                <div className="count">X {item.count}</div>
                <div className="price">
                  <div className="new-price">${item.unit_price}</div>
                  <div className="old-price">$ {item.unit_cost}</div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="bill-list">
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
          </div> */}
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

export default withRouter(OrderList);
