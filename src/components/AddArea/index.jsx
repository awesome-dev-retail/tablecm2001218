import React from "react";
import { Form, Input, Modal } from "antd";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";

import { saveArea, fetchAreaList } from "../../slices/areaSlice";
// import { selectAreaList } from "../../slices/areaSlice";

import "./index.scss";

const Index = (props) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  console.log(props.name);
  const saveModal = () => {
    form.validateFields().then((res) => {
      console.log(res);
      props.hideModel(false);
    });
  };

  const hideModal = () => {
    props.hideModel(false);
  };

  const addArea = () => {
    form.validateFields().then(async (res) => {
      // console.log(res);
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
      await dispatch(saveArea(areaObj));
      await dispatch(fetchAreaList(1));
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
      onOk={saveModal}
      onCancel={hideModal}
      footer={[
        <div className="model-btn" key="btn" onClick={addArea}>
          {/* <div className="model-btn" key="btn" onClick={hideModal}> */}
          Save
        </div>,
      ]}>
      <div className="model-content">
        <Form form={form}>
          <Form.Item label="Area Name" colon={false} name="areaname" rules={[{ required: true, message: "Please input area name!" }]}>
            <Input placeholder="eg: hall" defaultValue={props.name} />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

Index.propTypes = {
  hideModel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Index;
