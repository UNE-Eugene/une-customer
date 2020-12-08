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
    <Row gutter={[16, 50]} className="logger">
      <Col span={8} key='8' className='logger-col' >
        {/* <QueueAnim type={["bottom", 'left']} delay={0}> */}
            <Card className="logger-card" hoverable={true} key="1"></Card>
        {/* </QueueAnim> */}
      </Col>
      <Col span={8} key='9'>
        {/* <QueueAnim type={["bottom", 'left']} delay={100}> */}
          <Card className="logger-card" hoverable={true} key="2"></Card>
        {/* </QueueAnim> */}
      </Col>
      <Col span={8} key='10'>
        {/* <QueueAnim type={["bottom", 'left']} delay={200}> */}
          <Card className="logger-card" hoverable={true} key="3"></Card>
        {/* </QueueAnim> */}
      </Col>
      <Col span={6} key='11'>
        {/* <QueueAnim type={["bottom", 'left']} delay={300}> */}
          <Card className="logger-card" hoverable={true} key="4"></Card>
        {/* </QueueAnim> */}
      </Col>
      <Col span={6} key='12'>
        {/* <QueueAnim type={["bottom", 'left']} delay={400}> */}
          <Card className="logger-card" hoverable={true} key="5"></Card>
        {/* </QueueAnim> */}
      </Col>
      <Col span={6} key='13'>
        {/* <QueueAnim type={["bottom", 'left']} delay={500}> */}
          <Card className="logger-card" hoverable={true} key="6"></Card>
        {/* </QueueAnim> */}
      </Col>
      <Col span={6} key='14'>
        {/* <QueueAnim type={["bottom", 'left']} delay={600}> */}
          <Card className="logger-card" hoverable={true} key="7"></Card>
        {/* </QueueAnim> */}
      </Col>
    </Row>
  );
};

export default withRouter(Logger);