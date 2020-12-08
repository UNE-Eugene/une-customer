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
import QueueAnim from "rc-queue-anim";

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
    <Row gutter={[16, 30]} className="logger">
      <Col span={8} key="1">
        <QueueAnim type="bottom">
            <Card className="logger-card" hoverable={true}></Card>
        </QueueAnim>
      </Col>
      <Col span={8} key="2">
        <QueueAnim type="bottom">
          <Card className="logger-card" hoverable={true}></Card>
        </QueueAnim>
      </Col>
      <Col span={8} key="3">
        <QueueAnim type="bottom">
          <Card className="logger-card" hoverable={true}></Card>
        </QueueAnim>
      </Col>
      <Col span={6} key="4">
        <QueueAnim type="bottom">
          <Card className="logger-card" hoverable={true}></Card>
        </QueueAnim>
      </Col>
      <Col span={6} key="5">
        <QueueAnim type="bottom">
          <Card className="logger-card" hoverable={true}></Card>
        </QueueAnim>
      </Col>
      <Col span={6} key="6">
        <QueueAnim type="bottom">
          <Card className="logger-card" hoverable={true}></Card>
        </QueueAnim>
      </Col>
      <Col span={6} key="7">
        <QueueAnim type="bottom">
          <Card className="logger-card" hoverable={true}></Card>
        </QueueAnim>
      </Col>
    </Row>
  );
};

export default withRouter(Logger);
