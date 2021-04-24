import React from "react";
import { Form, Input, Modal } from "antd";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";

import { addArea } from "../../slices/areaSlice";
// import { selectAreaList } from "../../slices/areaSlice";

import "./index.scss";

const Index = (props) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const hideModal = () => {
    form.validateFields().then((res) => {
      console.log(res);
      props.hideModel(false);
    });
  };

  const addArea = () => {
    form.validateFields().then(async (res) => {
      console.log(res);
      form.resetFields();
      props.hideModel(false);
      const areaObj = {
        // id: 1, // [not required for creating]
        cid: 1, // [required] int
        shop_id: 1, // [required] int
        area_name: res.areaname, // [required] string
        // active: true, // [not required for creating]
        // description: "The Hall Area",
      };
      const areaStr = JSON.stringify(areaObj);
      await dispatch(addArea("areaStr"));
    });
    // form.validateFields((err, values) => {
    // if (!err) {
    // props.hideModel(false);
    // const { areaname } = values;
    // console.log(areaname);
    // const { parentId, categoryName } = values;
    // form.resetFields();
    // const result = await reqAddCategory({ parentId, categoryName });
    /* below is diff from origin */
    // if (result.status === 0) {
    // console.log(parentId);
    // this.getCategorys(parentId);
    // }
    // }
    // });
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
        <div className="model-btn" key="btn" onClick={addArea}>
          {/* <div className="model-btn" key="btn" onClick={hideModal}> */}
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
