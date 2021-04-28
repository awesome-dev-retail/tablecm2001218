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
      title="快速添加菜品"
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
          <Form.Item label="菜品名称" colon={false} name="name" rules={[{ required: true, message: "请输入菜品名称!" }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item label="菜品分类" colon={false} name="type" rules={[{ required: true, message: "请选择菜品分类!" }]}>
            <Select>
              {["火锅", "中餐"].map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="售卖价" colon={false} name="price" rules={[{ required: true, message: "请输入售卖价!" }]}>
            <Input placeholder="请输入" suffix="元" />
          </Form.Item>
          <p className="tip" onClick={props.showMoreTypeSetup}>
            更多分类设置
          </p>
        </Form>
      </div>
    </Modal>
  );
};

Index.propTypes = {
  hideModel: PropTypes.func.isRequired,
  showMoreTypeSetup: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Index;
