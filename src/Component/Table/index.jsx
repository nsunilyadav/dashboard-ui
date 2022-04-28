import "antd/dist/antd.less"; // or 'antd/dist/antd.less'
import React, { useState } from "react";
import { Table, Tag, Space, Avatar, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./styles.module.less";

const columns = [
  {
    title: "Name",
    dataIndex: "customName",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => (
      <Tag
        className={`${styles.tag} ${
          status === "Active" ? styles.green : styles.default
        }`}
      >
        {status}
      </Tag>
    ),
  },
  {
    title: "Email Address",
    dataIndex: "email",
  },
  {
    title: "Teams",
    dataIndex: "teams",
    render: (teams = []) => (
      <>
        {teams.map((team) => (
          <Tag
            className={`${
              team === "Product" ? styles.tagBlue : styles.tagPurple
            }`}
          >
            {team}
          </Tag>
        ))}
      </>
    ),
  },
  {
    title: "",
    key: "action",
    render: () => (
      <Space size="middle">
        <Button type="text" size="large" icon={<DeleteOutlined />} />
        <Button type="text" size="large" icon={<EditOutlined />} />
      </Space>
    ),
  },
];

const data = [
  {
    name: "John Brown",
    profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
    at: "@drew",
    status: "Active",
    email: "olivia@untitledui.com",
    teams: ["Design", "Product"],
  },
  {
    name: "John Brown",
    profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
    at: "@drew",
    status: "Active",
    email: "olivia@untitledui.com",
    teams: ["Product", "Design"],
  },
  {
    name: "John Brown",
    profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
    at: "@drew",
    status: "Offline",
    email: "olivia@untitledui.com",
    teams: ["Operation", "Product"],
  },
  {
    name: "John Brown",
    profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
    at: "@drew",
    status: "Active",
    email: "olivia@untitledui.com",
    teams: ["Design", "Product", "Design"],
  },
  {
    name: "John Brown",
    profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
    at: "@drew",
    status: "Offline",
    email: "olivia@untitledui.com",
    teams: ["Design", "Product"],
  },
  {
    name: "John Brown",
    profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
    at: "@drew",
    status: "Active",
    email: "olivia@untitledui.com",
    teams: ["Design", "Product"],
  },
  {
    name: "John Brown",
    profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
    at: "@drew",
    status: "Active",
    email: "olivia@untitledui.com",
    teams: ["Design", "Product"],
  },
];

const processedData = data.map((item) => {
  item.customName = [
    <div className={styles.userProfile}>
      <Avatar size={40} className={styles.userImages} src={item.profileImage} />
      <div className={styles.userName}>
        <h4 className={styles.name}>{item.name}</h4>
        <span className={styles.showAt}>{item.at}</span>
      </div>
    </div>,
  ];
  return item;
});

const CustomTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (keys) => {
    setSelectedRowKeys(keys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <Table
      className={styles.boxTable}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={processedData}
      pagination={false}
    />
  );
};

export default CustomTable;
