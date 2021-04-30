import React, { Fragment, useState, useEffect } from "react";
import { Badge, Modal, Button } from "antd";

import { PlusOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import { fetchAreaList, deleteArea, getAreaId } from "../../slices/areaSlice";
import { selectAreaList } from "../../slices/areaSlice";

import { fetchTableListInArea, fetchTableListInShop } from "../../slices/tableSlice";
import { fetchTableList } from "../../slices/tableSlice";

import AddArea from "../../components/AddArea";

export default function MenuList() {
  const [showArea, setShowArea] = useState(false);
  // const [showDeleteModal, setShowDeleteModal] = useState(false);
  // const [areaList, setAreaList] = useState([]);
  const [areaId, setAreaId] = useState(0);
  const [areaName, setAreaName] = useState("");

  const [isAdmin, setIsAdmin] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  // let modalForm = null;

  const dispatch = useDispatch();

  const { confirm } = Modal;

  function showDeleteConfirm(id) {
    confirm({
      title: "Are you sure to delete this item?",
      icon: <ExclamationCircleOutlined />,
      // content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        // console.log("OK");
        // console.log(id);
        await dispatch(deleteArea(id));
        await dispatch(fetchAreaList(1));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  const areaListFromSlice = useSelector((state) => selectAreaList(state)) || [];
  console.log("areaListFromSlice", areaListFromSlice);
  // console.log(areaListFromSlice.data.list);
  // setAreaList(areaListFromSlice.data.list);

  useEffect(async () => {
    await dispatch(fetchAreaList(1));
    // const areaList = useSelector((state) => selectAreaList(state));
    // await setAreaList(areaListFromSlice);
    // console.log("useEffect");
  }, []);

  const showTablesInArea = (areaId) => {
    dispatch(fetchTableListInArea({ shopId: 1, areaId }));
  };
  const showTablesInShop = () => {
    dispatch(fetchTableListInShop(1));
  };

  const handleSaveArea = (isUpdate, areaId, areaName) => {
    setShowArea(!showArea);
    if (isUpdate) {
      setAreaId(areaId);
      setAreaName(areaName);
      setIsUpdate(true);
    } else {
      setAreaId(null);
      setIsUpdate(false);
    }
  };
  return (
    <Fragment>
      <div className="menu-list">
        <div className="menu-item">
          {/* <Badge size="small" count={5} offset={[5]}> */}
          <div onClick={showTablesInShop}>All Areas</div>
          {/* <span>All Areas</span> */}
          {/* </Badge> */}
        </div>
        {areaListFromSlice.map((item) => {
          return (
            <div
              key={item.id}
              className="menu-item"
              onClick={() => {
                showTablesInArea(item.id);
              }}>
              {/* <Badge size="small" count={5} offset={[5]}> */}
              <div>{item.area_name}</div>
              {isAdmin && <EditOutlined onClick={() => handleSaveArea(true, item.id, item.area_name)} />}
              {isAdmin && <DeleteOutlined onClick={() => showDeleteConfirm(item.id)} />}
              {/* {isAdmin && <DeleteOutlined onClick={() => setShowDeleteModal(!ShowDeleteModal)} />} */}
              {/* </Badge> */}
            </div>
          );
        })}

        {/* <div className="menu-item">
          <Badge size="small" count={2} offset={[5]}>
            <span>Ground Floor</span>
          </Badge>
        </div>
        <div className="menu-item">
          <Badge size="small" count={0} offset={[5]}>
            <span>First Floor</span>
          </Badge>
        </div>
        <div className="menu-item">
          <Badge size="small" count={0} offset={[5]}>
            <span>Second Floor</span>
          </Badge>
        </div> */}
        <div className="menu-item" onClick={() => handleSaveArea(false)}>
          <PlusOutlined />
          Add
        </div>
      </div>
      <AddArea visible={showArea} hideModel={setShowArea} id={areaId} name={areaName} isUpdate={isUpdate} />
      {/* <AddArea visible={showArea} hideModel={() => setShowArea(false)} /> */}
    </Fragment>
  );
}
