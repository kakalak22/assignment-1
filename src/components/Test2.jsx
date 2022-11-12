import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../actionsTypes";
import { Image, Table } from "antd";

const Test2 = () => {
  const dispatch = useDispatch();
  const { listDog = [] } = useSelector((state) => state.apiReducer);
  useEffect(() => {
    dispatch({
      type: Actions.CALL_API,
    });
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "ID",
      key: "ID",
    },
    {
      title: "IMAGE",
      dataIndex: "IMAGE",
      key: "IMAGE",
      render: (IMAGE) => <Image src={IMAGE} width={150} />,
    },
    {
      title: "NAME",
      dataIndex: "NAME",
      key: "NAME",
    },
    {
      title: "PARTICIPANT_TYPE_ID",
      dataIndex: "PARTICIPANT_TYPE_ID",
      key: "PARTICIPANT_TYPE_ID",
    },
    // {
    //   title: "SPORT_ID",
    //   dataIndex: "SPORT_ID",
    //   key: "SPORT_ID",
    // },

    // {
    //   title: "TITLE",
    //   dataIndex: "TITLE",
    //   key: "TITLE",
    // },
    // {
    //   title: "COUNTRY_ID",
    //   dataIndex: "COUNTRY_ID",
    //   key: "COUNTRY_ID",
    // },
    {
      title: "COUNTRY_NAME",
      dataIndex: "COUNTRY_NAME",
      key: "COUNTRY_NAME",
    },
    {
      title: "FAVOURITE_KEY",
      dataIndex: "FAVOURITE_KEY",
      key: "FAVOURITE_KEY",
    },
    {
      title: "FLAG_ID",
      dataIndex: "FLAG_ID",
      key: "FLAG_ID",
    },
    {
      title: "GENDER_ID",
      dataIndex: "GENDER_ID",
      key: "GENDER_ID",
    },
  ];

  return (
    <Table
      columns={columns}
      pagination={false}
      rowKey={(record) => record.ID}
    />
  );
};

export default Test2;
