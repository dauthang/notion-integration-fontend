import { Button, Popconfirm, Space, message } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductRes } from "../../api/product/product.interface";
import { actions, TStore, useDispatch, useSelector } from "../../store/store";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteProduct } from "../../api/product/product-api";
export const Product = () => {
  const navigate = useNavigate();
  const { products, isLoading } = useSelector(
    (state: TStore) => state.products
  );

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(actions.product.getListProduct());
  }, [dispatch]);

  const navigateTo = useCallback(() => {
    navigate("create");
  }, [navigate]);

  const confirm = useCallback(
    async (id: string) => {
      const res = await deleteProduct(id);
      if (res) {
        message.success("Delete Success");
        dispatch(actions.product.getListProduct());
      } else {
        message.error("Delete error");
      }
      console.log(id);
      // message.success("Click on Yes");
    },
    [dispatch]
  );

  const cancel = useCallback(() => {}, []);

  const columns: ColumnsType<ProductRes> = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name_product",
      key: "name_product",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ingredient",
      dataIndex: "ingredient",
      key: "ingredient",
    },
    {
      title: "Uses",
      dataIndex: "uses",
      key: "uses",
    },
    {
      title: "Dosage",
      dataIndex: "dosage",
      key: "dosage",
    },
    {
      title: "src_img",
      dataIndex: "src_img",
      key: "src_img",
    },
    {
      title: "src_img_remove_bg",
      dataIndex: "src_img_remove_bg",
      key: "src_img_remove_bg",
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
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => confirm(record.id)}
            onCancel={() => cancel()}
            okButtonProps={{ loading: isLoading }}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Button className="mb-2 float-right" type="primary" onClick={navigateTo}>
        Create
      </Button>
      <Table columns={columns} dataSource={products} loading={isLoading} />
    </>
  );
};
