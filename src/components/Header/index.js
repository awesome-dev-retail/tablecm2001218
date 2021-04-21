import React from "react";

import { MenuOutlined, PrinterOutlined, FileTextFilled, CaretDownOutlined, QuestionCircleFilled, AntDesignOutlined, PlusOutlined } from "@ant-design/icons";
import { Dropdown, Avatar, Badge } from "antd";
import UIMenu from "../UIMenu";

export default function Header() {
  return (
    <div className="home-page-container">
      <header className="header">
        <div>
          <MenuOutlined />
          桌台
        </div>
        <div>
          <PrinterOutlined />
          <FileTextFilled />
          <QuestionCircleFilled />
          <Dropdown overlay={<UIMenu />} trigger={["click"]}>
            <Avatar size={40} icon={<AntDesignOutlined />} />
          </Dropdown>
        </div>
      </header>
    </div>
  );
}
