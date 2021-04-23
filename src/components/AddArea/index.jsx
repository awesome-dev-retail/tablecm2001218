import React from "react";
import { Form, Input, Modal } from "antd";
import PropTypes from "prop-types";
import "./index.scss";

const Index = (props) => {
  const [form] = Form.useForm();
  const hideModal = () => {
    form.validateFields().then((res) => {
      console.log(res);
      props.hideModel(false);
    });
  };

  return (
    <Modal
      className="area-container"
      width={500}
      title="添加区域"
      destroyOnClose={true}
      visible={props.visible}
      onOk={hideModal}
      onCancel={hideModal}
      footer={[
        <div className="model-btn" key="btn" onClick={hideModal}>
          保存
        </div>,
      ]}>
      <div className="model-content">
        <Form form={form}>
          <Form.Item label="区域名称" colon={false} name="areaname" rules={[{ required: true, message: "请输入区域名称!" }]}>
            <Input placeholder="例如：大厅" />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

Index.propTypes = {
  hideModel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Index;
