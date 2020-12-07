import { useState } from "react";
import "./Center.css";
import {
  Row,
  Col,
  Avatar,
  Table,
  Layout,
  Typography,
  Menu,
  Dropdown,
  Tabs,
  Card,
} from "antd";
import "antd/dist/antd.css";
import { withRouter } from "react-router-dom";

const { Text } = Typography;
const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;



const columns = [
  {
    title: "Full Name",
    textWrap: "word-break",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    textWrap: "word-break",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Column 1",
    dataIndex: "address",
    key: "1",
    textWrap: "word-break",
  },
  {
    title: "Column 2",
    dataIndex: "address",
    key: "2",
    textWrap: "word-break",
  },

  {
    title: "Action",
    key: "operation",
    textWrap: "word-break",
    // eslint-disable-next-line
    render: () => <a>action</a>,
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const Logger = (props) => {
  return (
    <Tabs className='logger'>
      <TabPane tab="登录日志" key="1" >
        <Table
          columns={columns}
          dataSource={data}
          scroll={{
            y: "75vh",
          }}
          pagination={{
            defaultPageSize: 11,
            style: {
              position: "absolute",
              left: "18vw",
              height: "1.5vh",
              width: "10vw",
              minWidth: "190px",
            },
          }}
        />
      </TabPane>
    </Tabs>
  );
};

export default withRouter(Logger);
