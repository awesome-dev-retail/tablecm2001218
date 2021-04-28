/* eslint-disable react/prop-types */
import React, { Fragment, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Badge, Modal, Button } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import { fetchDishListInShop, deleteDish } from "../../slices/dishSlice";
import { selectDishList } from "../../slices/dishSlice";

import AddDish from "../../components/AddDish";

function DishList(props) {
  const [showDish, setShowDish] = useState(false);
  const [dishId, setDishId] = useState(0);
  const [dishName, setDishName] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [isAdmin, setIsAdmin] = useState(true);

  // const [isUpdate, setIsUpdate] = useState(false);

  const dishListData = [
    {
      id: "1",
      tag: "2/4",
      money: 1934,
      time: "9124 Mins",
      status: "eating",
    },
    {
      id: "2",
      tag: "2/4",
      money: 193,
      time: "9124 Mins",
      status: "eating",
    },
    {
      id: "3",
      tag: "2/4",
      money: 193,
      time: "9124 Mins",
      status: "eating",
    },
    {
      id: "4",
      tag: "2/4",
      money: 193,
      time: "9124 Mins",
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
      time: "9124 Mins",
      status: "eating",
    },
    {
      id: "7",
      tag: "2/4",
      money: 193,
      combination: 2,
      time: "9124 Mins",
      status: "eating",
    },
    {
      id: "8",
      tag: "2/4",
      money: 193,
      time: "9124 Mins",
      status: "eating",
    },
    {
      id: "9",
      tag: "2/4",
      money: 193,
      time: "9124 Mins",
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
      time: "9124 Mins",
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
      time: "9124 Mins",
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
  const [dishList, setDishList] = useState(dishListData);

  // const [showDishInfo, setShowDishInfo] = useState(false);

  const { confirm } = Modal;

  const dispatch = useDispatch();
  const dishListFromSlice = useSelector((state) => selectDishList(state)) || [];
  console.log("dishListFromSlice", dishListFromSlice);

  useEffect(() => {
    dispatch(fetchDishListInShop(1));
  }, []);

  const getClass = (type) => {
    return type === "eating" ? "eating" : type === "waitPlanOrder" ? "wait-plan-order" : "empty";
  };

  // const redirectToOrder = () => {
  //   // eslint-disable-next-line react/prop-types
  //   props.history.push("/order");
  // };

  const handleSaveDish = (dishId, dishName, capacity) => {
    setShowDish(true);
    setDishId(dishId);
    setDishName(dishName);
    setCapacity(capacity);
  };

  function showDeleteConfirm(id) {
    confirm({
      title: "Are you sure to delete this item?",
      icon: <ExclamationCircleOutlined />,
      // content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        await dispatch(deleteDish(id));
        await dispatch(fetchDishListInShop(1));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  return (
    <Fragment>
      <div className="dish-list">
        {dishListFromSlice.map((item) => (
          <div key={item.id} className={`dish-item ${getClass(item.status)}`}>
            {/* <div key={item.id} className={`dish-item ${getClass(item.status)}`} onClick={() => setShowDishInfo(true)}> */}
            <div>
              <p className="dish-id">{item.description}</p>
              {item.money && <div className="money">${item.money}</div>}
              {item.combination && <div>Share {item.combination} Dishs</div>}
              {/* {item.combination && <div>拼{item.combination}桌</div>} */}
              {item.status === "waitPlanOrder" && <div className="wait-plan-order-text">To be ordered</div>}
              <div>
                {item.tag} {item.time && <span>{item.time}</span>}
              </div>
            </div>
            <div className="edit-delete">
              {isAdmin && <EditOutlined onClick={(event) => handleSaveDish(item.id, item.dish_name, item.capacity)} />}
              {isAdmin && <DeleteOutlined onClick={() => showDeleteConfirm(item.id)} />}
            </div>
          </div>
        ))}
        <div className="dish-item add-dish" onClick={() => handleSaveDish()}>
          <PlusOutlined />
          <div>Add Dish</div>
          {/* <div>添加桌台</div> */}
        </div>
      </div>
      <AddDish visible={showDish} hideModel={setShowDish} id={dishId} name={dishName} capacity={capacity}></AddDish>
    </Fragment>
  );
}

export default withRouter(DishList);
