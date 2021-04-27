import React from "react";
import { Form, Input, Modal, Select } from "antd";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { saveTable, fetchTableListInShop, fetchTableListInArea } from "../../slices/tableSlice";
import "./index.scss";

const { Option } = Select;

const Index = (props) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const hideModal = () => {
    form.resetFields();
    props.hideModel(false);
  };

  const onFinish = () => {
    return;
  };

  const addTable = () => {
    form.validateFields().then(async (res) => {
      console.log("addTable---------------------", res);
      form.resetFields();
      props.hideModel(false);
      const tableObj = {
        id: props.id, // [not required for creating]
        // id: 5,
        // id: props.id ? props.id : null,
        cid: 1, // [required] int
        shop_id: 1, // [required] int
        area_id: 47,
        table_name: res.tableName, // [required] string
        capacity: res.capacity * 1, // [required] int
        active: true, // [not required for creating]
        // description: "The Hall Area",
      };
      console.log("tableObj", tableObj);
      await dispatch(saveTable(tableObj));
      dispatch(fetchTableListInShop(1));
    });
  };

  return (
    <Modal
      className="add-table-container"
      width={500}
      title="Add Table"
      destroyOnClose={true}
      visible={props.visible}
      // onOk={hideModal}
      onCancel={hideModal}
      footer={[
        <div className="model-btn" key="btn" onClick={addTable}>
          Save
        </div>,
        // <div className="model-btn" key="btn1" onClick={hideModal}>
        //   保存并继续添加
        // </div>,
      ]}>
      <Form form={form} name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item colon={false} label="Table Name" name="tableName" rules={[{ required: true, message: "Please input table ID or name!" }]}>
          <Input placeholder="please input table ID or name, eg：A01" defaultValue={props.id ? props.name : ""} />
        </Form.Item>
        <Form.Item colon={false} label="Area" name="areaName" rules={[{ required: true, message: "Please input area!" }]}>
          <Select placeholder="">
            {/* <Select placeholder="去设置"> */}
            {["Hall", "First Floor", "Second Floor"].map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item colon={false} label="Capacity" name="capacity" rules={[{ required: true, message: "Please input capacity!" }]}>
          <Input placeholder="Please input capacity" initialValues={props.id ? props.capacity : ""} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

Index.propTypes = {
  hideModel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  // areaId: PropTypes.number.isRequired,
  id: PropTypes.number,
  name: PropTypes.string,
  capacity: PropTypes.number,
  // isUpdate: PropTypes.bool.isRequired,
};

export default Index;
