import React, { useEffect, useRef, useState } from "react";
import { Dropdown, Avatar, Badge } from "antd";

import Header from "../../components/Header";
// import UIMenu from "../../components/UIMenu";
import OrderList from "./OrderList";
import DishList from "./DishList";
import DishCategory from "./DishCategory";

import { MenuOutlined, PrinterOutlined, FileTextFilled, CaretDownOutlined, QuestionCircleFilled, AntDesignOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";
// import "./index.less";
import "./index.scss";

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
        {/* <ShopInfo></ShopInfo> */}
        <OrderList></OrderList>
        {/* ) : ( */}

        {/* )} */}
        <div className="right-container">
          <DishList></DishList>
          {/* <div className='menu-list'>
            <div className='menu-item'>
              <Badge size='small' count={5} offset={[5]}>
                <span>全部</span>
              </Badge>
            </div>
            <div className='menu-item'>
              <Badge size='small' count={2} offset={[5]}>
                <span>大厅</span>
              </Badge>
            </div>
            <div className='menu-item'>
              <Badge size='small' count={0} offset={[5]}>
                <span>二楼</span>
              </Badge>
            </div>
            <div className='menu-item'>
              <Badge size='small' count={0} offset={[5]}>
                <span>三楼</span>
              </Badge>
            </div>
            <div className='menu-item'>
              <PlusOutlined />
              添加
            </div>
          </div> */}
          <DishCategory></DishCategory>
        </div>
      </main>
    </div>
  );
};

export default Home;
