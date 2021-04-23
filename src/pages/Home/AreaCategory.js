import React from "react";
import { Badge } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default function MenuList() {
  return (
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
      <div className="menu-item">
        <PlusOutlined />
        Add Area
      </div>
    </div>
  );
}
