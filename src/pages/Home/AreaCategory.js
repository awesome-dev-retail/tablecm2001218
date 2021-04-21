import React from "react";
import { Badge } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default function MenuList() {
  return (
    <div className="menu-list">
      <div className="menu-item">
        <Badge size="small" count={5} offset={[5]}>
          <span>全部</span>
        </Badge>
      </div>
      <div className="menu-item">
        <Badge size="small" count={2} offset={[5]}>
          <span>大厅</span>
        </Badge>
      </div>
      <div className="menu-item">
        <Badge size="small" count={0} offset={[5]}>
          <span>二楼</span>
        </Badge>
      </div>
      <div className="menu-item">
        <Badge size="small" count={0} offset={[5]}>
          <span>三楼</span>
        </Badge>
      </div>
      <div className="menu-item">
        <PlusOutlined />
        添加
      </div>
    </div>
  );
}
