/* eslint-disable react/prop-types */
import React, { Fragment, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Badge, Modal, Button } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import { fetchTableListInShop, deleteTable } from "../../slices/tableSlice";
import { selectTableList } from "../../slices/tableSlice";

import AddTable from "../../components/AddTable";

function TableList(props) {
  const [showTable, setShowTable] = useState(false);
  const [tableId, setTableId] = useState(0);
  const [tableName, setTableName] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [isAdmin, setIsAdmin] = useState(true);

  // const [isUpdate, setIsUpdate] = useState(false);

  const tableListData = [
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
  const [tableList, setTableList] = useState(tableListData);

  // const [showTableInfo, setShowTableInfo] = useState(false);

  const { confirm } = Modal;

  const dispatch = useDispatch();
  const tableListFromSlice = useSelector((state) => selectTableList(state)) || [];
  console.log("tableListFromSlice", tableListFromSlice);

  useEffect(() => {
    dispatch(fetchTableListInShop(1));
  }, []);

  const getClass = (type) => {
    return type === "eating" ? "eating" : type === "waitPlanOrder" ? "wait-plan-order" : "empty";
  };

  const redirectToOrder = () => {
    // eslint-disable-next-line react/prop-types
    props.history.push("/order");
  };

  const handleSaveTable = (tableId, tableName, capacity) => {
    setShowTable(true);
    setTableId(tableId);
    setTableName(tableName);
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
        await dispatch(deleteTable(id));
        await dispatch(fetchTableListInShop(1));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  return (
    <Fragment>
      <div className="table-list">
        {tableListFromSlice.map((item) => (
          <div key={item.id} className={`table-item ${getClass(item.status)}`}>
            {/* <div key={item.id} className={`table-item ${getClass(item.status)}`} onClick={() => setShowTableInfo(true)}> */}
            <div
              onClick={() => {
                redirectToOrder();
              }}>
              <p className="table-id">{item.table_name}</p>
              {item.money && <div className="money">${item.money}</div>}
              {item.combination && <div>Share {item.combination} Tables</div>}
              {/* {item.combination && <div>拼{item.combination}桌</div>} */}
              {item.status === "waitPlanOrder" && <div className="wait-plan-order-text">To be ordered</div>}
              <div>
                {item.tag} {item.time && <span>{item.time}</span>}
              </div>
            </div>
            <div className="edit-delete">
              {isAdmin && <EditOutlined onClick={(event) => handleSaveTable(item.id, item.table_name, item.capacity)} />}
              {isAdmin && <DeleteOutlined onClick={() => showDeleteConfirm(item.id)} />}
            </div>
          </div>
        ))}
        <div className="table-item add-table" onClick={() => handleSaveTable()}>
          <PlusOutlined />
          <div>Add Table</div>
          {/* <div>添加桌台</div> */}
        </div>
      </div>
      <AddTable visible={showTable} hideModel={setShowTable} id={tableId} name={tableName} capacity={capacity}></AddTable>
    </Fragment>
  );
}

export default withRouter(TableList);
