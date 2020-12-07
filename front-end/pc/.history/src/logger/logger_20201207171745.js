import { useState } from "react";
import "./Logger.css";
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
import Logo from "./static/logo.png";
import icon1 from "./static/icon1.png";
import icon2 from "./static/icon2.png";
import icon3 from "./static/icon3.png";
import icon1_1 from "./static/icon1-1.png";
import icon2_2 from "./static/icon2-2.png";
import icon3_3 from "./static/icon3-3.png";
import { withRouter } from "react-router-dom";


const { Text } = Typography;
const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;


const menu = (
  <Menu className="dropdown">
    <Menu.Item
      onClick={{}}
      style={{
        position: "relative",
        width: "100px",
        height: "60px",
        borderRadius: "10px",
      }}
    >
      <Text
        style={{
          position: "absolute",
          top: "20px",
          height: "40px",
          bottom: 0,
          right: 0,
          left: 0,
        }}
      >
        上传头像
      </Text>
    </Menu.Item>
    <Menu.Item
      onClick={{}}
      style={{
        position: "relative",
        width: "100px",
        height: "60px",
        borderRadius: "10px",
      }}
    >
      <Text
        style={{
          position: "absolute",
          top: "20px",
          height: "40px",
          bottom: 0,
          right: 0,
          left: 0,
        }}
      >
        修改密码
      </Text>
    </Menu.Item>
  </Menu>
);

const columns = [
  
  {
    title: "Full Name",
    textWrap: 'word-break',
    dataIndex: "name",
    key: "name",

  },
  {
    title: "Age",
    textWrap: 'word-break',
    dataIndex: "age",
    key: "age",

  },
  {
    title: "Column 1",
    dataIndex: "address",
    key: "1",
    textWrap: 'word-break',

  },
  {
    title: "Column 2",
    dataIndex: "address",
    key: "2",
    textWrap: 'word-break',

  },

  {
    title: "Action",
    key: "operation",
    textWrap: 'word-break',
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

const Logger = (props) =>{
  return(
    <Tabs>
      <TabPane>

      </TabPane>
    </Tabs>
  )
}


export default withRouter(Logger);
