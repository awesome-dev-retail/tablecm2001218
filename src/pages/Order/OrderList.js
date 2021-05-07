import React, { useEffect, useMemo, useState } from "react";

import { MenuOutlined, PrinterOutlined, FileTextFilled, CaretDownOutlined, CheckCircleTwoTone, AntDesignOutlined, PlusOutlined } from "@ant-design/icons";

import { selectDishObjInOrder, setDishObjInOrder, setCurrentDish, selectCurrentDish } from "../../slices/dishSlice";
import { fetchTableById } from "../../slices/tableSlice";
import { selectTable } from "../../slices/tableSlice";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router";
import Counter from "../../components/Counter";
import "./OrderList.scss";

function OrderList(props) {

  const [showMore, setShowMore] = useState(false);

  const tableMenus = [{ name: "规格/做法", key: "spec" }, { name: "加料", key: "feeding" }, { name: "备注", key: "remark" }, { name: "稍后上菜", key: "wait" }, , { name: "买赠", key: "buyGift" }, { name: "删除", key: "delete" }];
  const dispatch = useDispatch();
  // eslint-disable-next-line react/prop-types
  const tableId = props.match.params.id;
  // debugger;
  const table = useSelector((state) => selectTable(state));
  const currentDish = useSelector((state) => selectCurrentDish(state));
  console.log(table);

  useEffect(async () => {
    // debugger;
    await dispatch(fetchTableById(tableId));
    console.log(tableId);
  }, []);

  const updateCount = async (value) => {
    if (currentDish.id) {
      let copyCurrentDish = JSON.parse(JSON.stringify(currentDish));
      copyCurrentDish.count += value;
      // 数量为0  删除
      if (!copyCurrentDish.count) {
        dispatch(setCurrentDish({}));
      } else {
        dispatch(setCurrentDish(copyCurrentDish));
      }
      let copyDishOrder = JSON.parse(JSON.stringify(dishObjFromSlice));
      let index = copyDishOrder.findIndex(i => {
        return i.id === currentDish.id;
      });
      if (!copyCurrentDish.count) {
        copyDishOrder.splice(index, 1);
      } else {
        copyDishOrder[index].count += value;
      }
      await dispatch(setDishObjInOrder(copyDishOrder));
    }
  };

  const dishObjFromSlice = useSelector((state) => selectDishObjInOrder(state));

  const handleCheckDishOrder = async (item) => {
    let copyDishOrder = JSON.parse(JSON.stringify(dishObjFromSlice));
    copyDishOrder.forEach(i => {
      i.checked = i.id === item.id;
    });
    dispatch(setCurrentDish(item));
    await dispatch(setDishObjInOrder(copyDishOrder));
  };

  const handleOperation = async (key) => {
    // 删除
    if (key === "delete") {
      let copyDishOrder = JSON.parse(JSON.stringify(dishObjFromSlice));
      let index = copyDishOrder.findIndex(i => {
        return i.id === currentDish.id;
      });
      copyDishOrder.splice(index, 1);
      dispatch(setCurrentDish({}));
      await dispatch(setDishObjInOrder(copyDishOrder));
    } else if (key === "feeding") {
      debugger;
    }
  };

  // 计算商品总数和总价
  const total = useMemo(() => {
    let count = dishObjFromSlice.reduce((total, currentValue) => {
      return total + currentValue.count || 1;
    }, 0);

    let price = dishObjFromSlice.reduce((total, currentValue) => {
      return total + (currentValue.count || 1) * currentValue.unit_price;
    }, 0);

    return { count, price: price.toFixed(2) };

  }, [JSON.stringify(dishObjFromSlice)]);

  console.log(total);
  return (
    <div className="table-info-container">
      <div className="inner">
        <div className="table-info-inner">
          <div className="top-info">
            {/* <div className="top-info" onClick={() => setShowTableInfo(false)}> */}
            <span>
              Table Name: {table.table_name || ""}，2/{table.capacity}
            </span>
            {/* <span>桌台1，人数12/12</span> */}
            <CaretDownOutlined />
          </div>
          <div className="bill-list">
            {dishObjFromSlice.map((item, index) => (
              <div className={`bill-item ${item.checked ? "bill-item-current" : ""}`} key={item.id} onClick={() => handleCheckDishOrder(item)}>
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
        </div>
        <div className="table-bottom">
          <div className="tatal-money-container">
            <span>Total: {total.count} dishes</span>&emsp;
            {/* <span>共3项</span> */}
            <div className="tatal-money">${total.price}</div>
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
        <Counter count={currentDish.count || 0} updateCount={updateCount} />
        {tableMenus.map((item) => (
          <div className="table-info-menu-item" key={item.key} onClick={() => handleOperation(item.key)}>
            {item.name}
          </div>
        ))}
        <div className="table-info-menu-item" onClick={() => setShowMore(!showMore)}>
          <span>More</span>
          <div className={`table-info-childs-menu ${showMore ? "show" : "hide"}`}>
            <div>Share Table</div>
            <div>Change Table</div>
            <div>Combine Table</div>
            <div>Batch</div>
          </div>
        </div>
      </div>
      <div className="drawer">
        <div className="drawer-header">
          <h3 className="drawer-title">备注-海皇哈哈哈阿萨</h3>
          <CheckCircleTwoTone twoToneColor="#ea7e52" />
        </div>
      </div>
    </div>
  );
}

export default withRouter(OrderList);
