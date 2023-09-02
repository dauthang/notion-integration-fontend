import React, { useCallback, useState } from "react";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  message,
} from "antd";
import { postProduct } from "../../api/product/product-api";
import { useNavigate } from "react-router-dom";
import { ProductRes } from "../../api/product/product.interface";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
export const ProductForm = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const navigate = useNavigate();
  const onFinish = useCallback(
    async (values: ProductRes) => {
      setComponentDisabled(true);
      const res = await postProduct({
        ...values,
        src_img_remove_bg: "test",
        src_img: "test",
      });
      if (res) {
        setComponentDisabled(false);
        message.success("Save Success");
        navigate("/product");
      } else {
        setComponentDisabled(false);
        message.error("Save error");
      }
      console.log("Finish:", values);
    },
    [navigate]
  );
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Name"
          name="name_product"
          rules={[{ required: true, message: "Please input Name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ingredient"
          name="ingredient"
          rules={[{ required: true, message: "Please input Ingredient!" }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Uses"
          name="uses"
          rules={[{ required: true, message: "Please input Uses!" }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Dosage"
          name="dosage"
          rules={[{ required: true, message: "Please input Dosage!" }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={componentDisabled}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
