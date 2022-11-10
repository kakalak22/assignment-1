import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const EditableCell = (props) => {
  const {
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  } = props;
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const Test = () => {
  const { donHang = {} } = useSelector((state) => state.donHangReducer);
  const { dongDonHang = {} } = useSelector((state) => state.dongDonHangReducer);

  const [form] = Form.useForm();
  const [data, setData] = useState(donHang);
  const [editingKey, setEditingKey] = useState("");
  console.log(editingKey);
  const isEditing = (record) => {
    console.log(record, "isediting");
    if (record.idSanPham) return record.idSanPham === editingKey;
    return record.id === editingKey;
  };

  ///for expanding
  const expandedRowRender = (record) => {
    const { id } = record;
    const index = dongDonHang.findIndex(({ idDonHang }) => id === idDonHang);
    const data = dongDonHang[index].danhSachDongDonHang;

    const expandedColumns = [
      {
        title: "ID Sản Phẩm",
        dataIndex: "idSanPham",
        key: "idSanPham",
      },
      {
        title: "Đơn giá",
        dataIndex: "donGia",
        key: "donGia",
        editable: true,
      },
      {
        title: "Tổng tiền thuế",
        dataIndex: "tongTienThue",
        key: "tongTienThue",
        editable: true,
      },
      {
        title: "Tổng tiền trước thuế",
        dataIndex: "tongTienTruocThue",
        key: "tongTienTruocThue",
        editable: true,
      },
      {
        title: "operation",
        dataIndex: "operation",
        render: (_, record) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <Typography.Link
                onClick={() => save(record)}
                style={{
                  marginRight: 8,
                }}
              >
                Save
              </Typography.Link>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => {
                edit(record);
                console.log(record);
              }}
            >
              Edit
            </Typography.Link>
          );
        },
      },
    ];

    const expandedMergedColumns = expandedColumns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record) => ({
          record,
          inputType: col.dataIndex !== "ten" ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    });
    return (
      <Table
        rowKey={(record) => record.idSanPham}
        bordered
        columns={expandedMergedColumns}
        dataSource={data}
        pagination={false}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
      />
    );
  };

  const edit = (record) => {
    const key = record.idSanPham ? record.idSanPham : record.id;
    setEditingKey(key);
    form.setFieldsValue({
      ten: "",
      tongTruocThue: "",
      tongTien: "",
      ...record,
    });
  };
  const cancel = () => {
    setEditingKey("");
  };

  const save = async (record) => {
    try {
      const key = record.idSanPham ? record.idSanPham : record.id;
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên",
      dataIndex: "ten",
      key: "ten",
      editable: true,
    },
    {
      title: "Tổng thuế",
      dataIndex: "tongThue",
      key: "tongThue",
      editable: true,
    },
    {
      title: "Tổng tiền",
      dataIndex: "tongTien",
      key: "tongTien",
      editable: true,
    },
    {
      title: "Tổng trước thuế",
      dataIndex: "tongTruocThue",
      key: "tongTruocThue",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => {
              edit(record);
            }}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex !== "ten" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        rowKey={(record) => record.id}
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        expandable={{
          expandedRowRender,
        }}
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};
export default Test;
