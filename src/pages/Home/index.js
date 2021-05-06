import React, { useEffect, useRef, useState } from "react";
import { Dropdown, Avatar, Badge } from "antd";

import Header from "../../components/Header";
// import UIMenu from "../../components/UIMenu";
import ShopInfo from "./ShopInfo";
import TableList from "./TableList";
import AreaCategory from "./AreaCategory";

import { MenuOutlined, PrinterOutlined, FileTextFilled, CaretDownOutlined, QuestionCircleFilled, AntDesignOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";
// import "./index.less";
import "./index.scss";

// const tableMenus = ["催菜", "转菜", "退菜", "打折/赠菜", "取消优惠", "打印结算单", "撤单"];
// const tableMenus = ["Urge Dish", "Forword Dish", "Refund Dish", "Discount/Present", "Cancel Concession", "Print Bill", "Cancel Order"];
// const billData = [
//   {
//     id: 1,
//     name: "Steak&Cheese",
//     count: 1,
//     oldPrice: 23,
//     newPrice: 2.3,
//     tip: "cooked：spicy, lemon",
//   },
//   {
//     id: 2,
//     name: "Masala Steak",
//     count: 1,
//     oldPrice: 23,
//     newPrice: 2.3,
//   },
//   {
//     id: 3,
//     name: "Tuna&Mayonnaise",
//     count: 1,
//     oldPrice: 23,
//     newPrice: 2.3,
//   },
// ];
const Home = () => {
  const timerRef = useRef();
  // const [tableList, setTableList] = useState(tableListData)
  // const [time, setCurrentTime] = useState()
  // const [date, setCurrentDate] = useState()
  // const [week, setCurrentWeek] = useState()
  // const [showTableInfo, setShowTableInfo] = useState(false)
  const [showMore, setShowMore] = useState(false);

  // useEffect(() => {
  //   setCurrentDate(moment().format('MM月DD日'))
  //   setCurrentWeek(weeks[moment().day()])
  //   timerRef.current = setInterval(() => {
  //     setCurrentTime(moment().format('HH:mm:ss'))
  //   }, 1000)
  //   return () => {
  //     clearInterval(timerRef.current)
  //   }
  // }, [])

  // const getClass = (type) => {
  //   return type === 'eating' ? 'eating' : type === 'waitPlanOrder' ? 'wait-plan-order' : 'empty'
  // }

  return (
    <div className="home-page-container">
      {/* <Header></Header> */}
      <main className="main">
        {/* {!showTableInfo ? ( */}
        <ShopInfo></ShopInfo>
        {/* ) : ( */}

        {/* )} */}
        <div className="right-container">
          <TableList></TableList>
          <AreaCategory></AreaCategory>
        </div>
      </main>
    </div>
  );
};

export default Home;
