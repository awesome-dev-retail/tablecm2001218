import React from "react";
import { Menu } from "antd";

const UIMenu = () => {
  return (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">退出</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">设置</a>
      </Menu.Item>
      <Menu.Item key="3">个人信息</Menu.Item>
    </Menu>
  );
};

export default UIMenu;
