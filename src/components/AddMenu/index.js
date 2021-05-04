import React, { useEffect, useState } from "react";
import { Form, Input, Modal } from "antd";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { saveMenu, fetchMenuList } from "../../slices/menuSlice";
import { selectMenuId } from "../../slices/menuSlice";
import { fetchDishListInShop, fetchDishListInMenu } from "../../slices/dishSlice";

import "./index.scss";

const Index = (props) => {
  const dispatch = useDispatch();
  const menuIdFromSlice = useSelector((state) => selectMenuId(state));
  // console.log("menuIdFromSlice", menuIdFromSlice);

  const [form] = Form.useForm();
  // const [isUpdate, setIsUpdate] = useState(false);

  const hideModal = () => {
    form.resetFields();
    props.hideModel(false);
  };

  const addMenu = () => {
    form.validateFields().then(async (res) => {
      // console.log("res", res);
      form.resetFields();
      props.hideModel(false);
      const menuObj = {
        // id: 1, // [not required for creating]
        id: props.id,
        cid: 1, // [required] int
        class_name: res.menuName, // [required] string
        // active: true, // [not required for creating]
        // description: "The Hall Menu",
      };
      // console.log("menuObj", menuObj);
      await dispatch(saveMenu(menuObj));
      await dispatch(fetchMenuList(1));
      // await dispatch(fetchDishListInShop(1));
      await dispatch(fetchDishListInMenu(1)); //not work
      // await dispatch(fetchDishListInMenu(menuIdFromSlice));
    });
  };

  return (
    <Modal
      className="area-container"
      width={500}
      title="Add Menu"
      destroyOnClose={true}
      visible={props.visible}
      // onOk={addMenu}
      // onOk={saveModal}
      onCancel={hideModal}
      footer={[
        <div className="model-btn" key="btn" onClick={addMenu}>
          {/* <div className="model-btn" key="btn" onClick={hideModal}> */}
          Save
        </div>,
      ]}>
      <div className="model-content">
        <Form form={form}>
          <Form.Item label="Menu Name" colon={false} name="menuName" rules={[{ required: true, message: "Please input menu name!" }]}>
            <Input placeholder="eg: Soup" defaultValue={props.id ? props.name : ""} />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

Index.propTypes = {
  hideModel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  id: PropTypes.number,
  name: PropTypes.string,
  // isUpdate: PropTypes.bool.isRequired,
};

export default Index;
