import React, { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePickerProps, Select } from "antd";
import { DatePicker, Space, Button, Checkbox, Form, Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { actions, TStore, useDispatch, useSelector } from "../../store/store";
import { ViewTotal } from "./component/ViewTotal";
import LayoutChart from "./component/charts/LayoutChart";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";
const weekFormat = "MM/DD";
const monthFormat = "YYYY/MM";

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

const customFormat: DatePickerProps["format"] = (value) =>
  `custom format: ${value.format(dateFormat)}`;

const customWeekStartEndFormat: DatePickerProps["format"] = (value) =>
  `${dayjs(value).startOf("week").format(weekFormat)} ~ ${dayjs(value)
    .endOf("week")
    .format(weekFormat)}`;

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
  dateRange?: any;
  tags?: string;
  status?: string;
};

export interface IOption {
  value: string;
  label: string;
}
export const DashboardView = () => {
  const [size, setSize] = useState<SizeType>("middle");
  const dispatch = useDispatch<any>();
  const { getStatuses } = useSelector((state: TStore) => state.status);
  const { getTags } = useSelector((state: TStore) => state.tag);
  const [listStatus, setListStatus] = useState<IOption[]>();
  const [listTag, setListTag] = useState<IOption[]>();
  useEffect(() => {
    dispatch(actions.tag.getListTag());
    dispatch(actions.status.getListStatus());
  }, [dispatch]);

  useEffect(() => {
    const tags = getTags.map((item) => {
      return { value: item.id, label: item.name };
    });
    setListTag(tags || []);
  }, [getTags]);

  useEffect(() => {
    const statuses = getStatuses.map((item) => {
      return { value: item.id, label: item.name };
    });
    setListStatus(statuses || []);
  }, [getStatuses]);

  const initialValues = useMemo(() => {
    return {
      status: "a469d811-0850-4c86-9e7a-7fe99e701f57",
      tags: [
        "a100c84e-8d8a-410d-9b3f-82dd21287c65",
        "2cd3c644-c9de-41d1-9f7d-99125691cf6d",
        "a2fb0242-a3f1-492c-9502-e7b3b6797e16",
        "1d0aeac0-da18-4d4f-8b00-33ed4ffe0563",
        "c36effb3-0127-4c88-b118-52653e559561",
      ],
      dateRange: [
        dayjs("2021/01/01", dateFormat),
        dayjs("2024/01/01", dateFormat),
      ],
    };
  }, []);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex gap-5 flex-col">
      <div
        style={{ background: "white", padding: "20px", alignItems: "center" }}
      >
        <Form
          name="basic"
          labelCol={{ span: 32 }}
          wrapperCol={{ span: 32 }}
          style={{ width: "100%" }}
          initialValues={initialValues}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Space wrap align="center">
            <Form.Item<FieldType>
              label="Status"
              name="status"
              rules={[{ required: true, message: "Please select status!" }]}
            >
              <Select
                size={size}
                placeholder="Please select"
                style={{ width: "200px" }}
                options={listStatus}
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="Tag"
              name="tags"
              rules={[{ required: true, message: "Please select tag!" }]}
            >
              <Select
                mode="multiple"
                size={size}
                placeholder="Please select"
                style={{ minWidth: "250px", width: "100%" }}
                options={listTag}
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="Date range"
              name="dateRange"
              rules={[
                {
                  type: "array" as const,
                  required: true,
                  message: "Please select time!",
                },
              ]}
            >
              <RangePicker format={dateFormat} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Space>
        </Form>
      </div>
      <ViewTotal />
      <LayoutChart />
    </div>
  );
};
