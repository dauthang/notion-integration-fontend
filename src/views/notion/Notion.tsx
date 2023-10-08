import { Space, Tag, theme } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { useEffect } from "react";
import { TaskReponse } from "../../api/task/task.interface";
import { TStore, actions, useSelector, useDispatch } from "../../store/store";

export const NotionView = () => {
  const { getTask, isLoading } = useSelector((state: TStore) => state.task);
  const { getTags } = useSelector((state: TStore) => state.tag);

  const { getStatuses } = useSelector((state: TStore) => state.status);

  const dispatch = useDispatch<any>();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  useEffect(() => {
    dispatch(actions.tag.getListTag());
    dispatch(actions.status.getListStatus());
    dispatch(
      actions.task.getListTask({
        fromDate: new Date("2021-01-01T00:00:00+0100"),
        toDate: new Date("2024-01-01T00:00:00+0100"),
      })
    );
  }, [dispatch]);

  useEffect(() => {}, []);

  const columns: ColumnsType<TaskReponse> = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tag",
      dataIndex: "tags",
      key: "tags",
      render: (text) => {
        return (
          <Space size={[0, "small"]} wrap>
            {text &&
              text.length > 0 &&
              text?.map((item: { name: string }) => (
                <Tag
                  bordered={false}
                  color={
                    getTags.find((i: { name: string }) => i.name === item?.name)
                      ?.color
                  }
                >
                  {item?.name}
                </Tag>
              ))}
          </Space>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        return (
          <Space size={[0, "small"]} wrap>
            <Tag
              bordered={false}
              color={
                getStatuses.find(
                  (i: { name: string }) => i.name === status?.name
                )?.color
              }
            >
              {status?.name}
            </Tag>
          </Space>
        );
      },
    },
    {
      title: "Created time notion",
      dataIndex: "create_time_notion",
      key: "create_time_notion",
      render: (text) => {
        return <a>{text && new Date(text).toLocaleDateString("en-GB")}</a>;
      },
    },
    {
      title: "Created time Database",
      dataIndex: "created_at",
      key: "created_at",
      render: (text) => {
        return <a>{text && new Date(text).toLocaleDateString("en-GB")}</a>;
      },
    },
  ];

  return (
    <>
      <div style={{ background: "white", padding: "20px" }}>
        <Table columns={columns} dataSource={getTask} loading={isLoading} />
      </div>
    </>
  );
};
