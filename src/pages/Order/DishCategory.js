import React from "react";
import { Badge } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default function MenuList() {
  return (
    <div className="menu-list">
      <div className="menu-item">
        <Badge size="small" count={5} offset={[5]}>
          <span>All</span>
        </Badge>
      </div>
      <div className="menu-item">
        <Badge size="small" count={2} offset={[5]}>
          <span>Starters</span>
        </Badge>
      </div>
      <div className="menu-item">
        <Badge size="small" count={0} offset={[5]}>
          <span>Side Dishes</span>
        </Badge>
      </div>
      <div className="menu-item">
        <Badge size="small" count={0} offset={[5]}>
          <span>Main Course</span>
        </Badge>
      </div>
      <div className="menu-item">
        <Badge size="small" count={0} offset={[5]}>
          <span>Dessert</span>
        </Badge>
      </div>
      <div className="menu-item">
        <PlusOutlined />
        &nbsp; Add
      </div>
    </div>
  );
}
