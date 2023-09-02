import { Space } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { useEffect } from "react";
import { UserRes } from "../../api/user/user.interface";
import { TStore, actions, useSelector, useDispatch } from "../../store/store";

export const UserView = () => {
  const { listUser, isLoading } = useSelector(
    (state: TStore) => state.userList
  );

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(actions.user.getListUser());
  }, [dispatch]);

  const columns: ColumnsType<UserRes> = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "first_name",
      dataIndex: "first_name",
      key: "first_name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "last_name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "created_at",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "updated_at",
      dataIndex: "updated_at",
      key: "updated_at",
    },
    {
      title: "updated_at",
      dataIndex: "updated_at",
      key: "updated_at",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.username}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={listUser} loading={isLoading} />
    </>
  );
};
