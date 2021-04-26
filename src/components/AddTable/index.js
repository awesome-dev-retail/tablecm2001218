import React from "react";
import { Form, Input, Modal, Select } from "antd";
import PropTypes from "prop-types";
import "./index.scss";

const { Option } = Select;
const Index = (props) => {
  const hideModal = () => {
    props.hideModel();
  };

  const onFinish = () => {
    return;
  };
  return (
    <Modal
      className="add-desk-container"
      width={500}
      title="Add Table"
      destroyOnClose={true}
      visible={props.visible}
      onOk={hideModal}
      onCancel={hideModal}
      footer={[
        <div className="model-btn" key="btn" onClick={hideModal}>
          Save
        </div>,
        // <div className="model-btn" key="btn1" onClick={hideModal}>
        //   保存并继续添加
        // </div>,
      ]}>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item colon={false} label="Table ID/Name" name="username2" rules={[{ required: false, message: "Please input table ID or name!" }]}>
          <Input placeholder="please input table ID or name, eg：A01" />
        </Form.Item>
        <Form.Item colon={false} label="Area" name="use3rname" rules={[{ required: false, message: "Please input area!" }]}>
          <Select placeholder="">
            {/* <Select placeholder="去设置"> */}
            {["Hall", "First Floor", "Second Floor"].map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item colon={false} label="Capacity" name="us4ername" rules={[{ required: false, message: "Please input your username!" }]}>
          <Input placeholder="Please input capacity" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

Index.propTypes = {
  hideModel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Index;
