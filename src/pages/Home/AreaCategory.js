import React, { Fragment, useState, useEffect } from "react";
import { Badge } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import { fetchAreaList } from "../../slices/areaSlice";
import { selectAreaList } from "../../slices/areaSlice";
import AddArea from "../../components/AddArea";

export default function MenuList() {
  const [showArea, setShowArea] = useState(false);
  const [areaList, setAreaList] = useState([]);
  let modalForm = null;

  const dispatch = useDispatch();
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

  const handleAddArea = () => {
    setShowArea(!showArea);
  };
  return (
    <Fragment>
      <div className="menu-list">
        <div className="menu-item">
          <Badge size="small" count={5} offset={[5]}>
            <span>All Areas</span>
          </Badge>
        </div>
        {areaListFromSlice.map((item) => {
          return (
            <div key={item.id} className="menu-item">
              <Badge size="small" count={5} offset={[5]}>
                <span>{item.area_name}</span>
              </Badge>
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
        <div className="menu-item" onClick={() => handleAddArea()}>
          <PlusOutlined />
          Add
        </div>
      </div>
      <AddArea visible={showArea} hideModel={setShowArea} />
      {/* <AddArea visible={showArea} hideModel={() => setShowArea(false)} /> */}
    </Fragment>
  );
}
