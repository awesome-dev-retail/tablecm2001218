import React, { useEffect, useState, useRef } from "react";

import moment from "moment";

// function ShopInfo() {
//   return <h1>ShopInfo</h1>
// }

// export default ShopInfo

const ShopInfo = () => {
  const timerRef = useRef();

  const [time, setCurrentTime] = useState();
  const [date, setCurrentDate] = useState();
  const [week, setCurrentWeek] = useState();

  const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  useEffect(() => {
    setCurrentDate(moment().format("MM月DD日"));
    setCurrentWeek(weeks[moment().day()]);
    timerRef.current = setInterval(() => {
      setCurrentTime(moment().format("HH:mm:ss"));
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  return (
    <div className="statistics">
      <h1>{time}</h1>
      <div className="week">
        {date} {week}
      </div>
      <div>福记 1291928129012012</div>
      <div className="statistics-inner">
        <div>
          <span>未结订单</span>
          <h2>8</h2>
        </div>
        <div>
          <span>待支付金额（元）</span>
          <h2>238</h2>
        </div>
      </div>
    </div>
  );
};

export default ShopInfo;
