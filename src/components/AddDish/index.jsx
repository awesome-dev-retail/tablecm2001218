import React from "react";
import { Form, Input, Modal, Select } from "antd";
import PropTypes from "prop-types";
import "./index.scss";

const { Option } = Select;
const Index = (props) => {
  const [form] = Form.useForm();
  const hideModal = () => {
    form.validateFields().then((res) => {
      console.log(res);
      props.hideModel();
    });
  };

  return (
    <Modal
      className="add-dishes-container"
      width={600}
      destroyOnClose={true}
      title="Add Dish"
      // title="快速添加菜品"
      visible={props.visible}
      onOk={hideModal}
      onCancel={() => props.hideModel()}
      footer={[
        // <div className="model-btn" key="btn" onClick={hideModal}>
        //   保存
        // </div>,
        <div className="model-btn" key="btn1" onClick={hideModal}>
          Save
        </div>,
      ]}>
      <div className="model-content">
        <Form form={form}>
          <Form.Item label="Dish Name" colon={false} name="name" rules={[{ required: true, message: "Please input dish name!" }]}>
            <Input placeholder="please input dish name" />
          </Form.Item>
          <Form.Item label="Dish Category" colon={false} name="type" rules={[{ required: true, message: "Please input dish category!" }]}>
            <Select>
              {["Starter", "Soup"].map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Price($)" colon={false} name="price" rules={[{ required: true, message: "Please input price!" }]}>
            <Input placeholder="Please input price" />
            {/* <Input placeholder="Please input price" suffix="$" /> */}
          </Form.Item>
          <p className="tip" onClick={props.showMoreTypeSetup}>
            More Settings
          </p>
        </Form>
      </div>
    </Modal>
  );
};

Index.propTypes = {
  id: PropTypes.number,
  hideModel: PropTypes.func.isRequired,
  showMoreTypeSetup: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default Index;
