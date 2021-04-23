import React, { Fragment, useState } from "react";
import { Badge } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import AddArea from "../../components/AddArea";

export default function MenuList() {
  const [showArea, setShowArea] = useState(false);
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
        <div className="menu-item">
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
        </div>
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
