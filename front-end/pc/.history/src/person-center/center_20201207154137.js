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

const Center = () => {
  const [states, setStates] = useState({
    area1: "before",
    area2: "before",
    area3: "before",
  });
  return (
    <Layout className="main">
      <Header className="header">
        <img src={Logo} alt="" className="img" />
        <Row className="avatar" gutter={16}>
          <Col xs={12} sm={10} md={10} lg={8} xl={7} xxl={6}>
            <Avatar
              src={<img src={icon1} alt="" />}
              size={{ xs: 30, sm: 30, md: 35, lg: 35, xl: 40, xxl: 50 }}
            />
          </Col>
          <Col xs={12} sm={14} md={14} lg={16} xl={17} xxl={18}>
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <Text className="workerNumber">工号位置</Text>
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <Layout className="body">
        <Sider className="side" width="3vw">
          <Menu className="menu" theme="dark" onClick={() => {}}>
            <Menu.Item
              key="1"
              style={{
                position: "absolute",
                height: "6vw",
                width: "3vw",
                paddingLeft: 0,
                top: 0,
                minWidth: "3vw",
              }}
              onClick={() => {
                setStates({
                  area1: "after",
                  area2: "before",
                  area3: "before",
                });
              }}
            >
              <img
                id="icon1"
                style={{
                  position: "absolute",
                  height: "2vw",
                  width: "2vw",
                  top: "0.5vw",
                  left: "0.5vw",
                  minWidth: "2vw",
                }}
                src={states["area1"] === "before" ? icon1 : icon1_1}
                alt=""
              />
              <Text
                id="text1_1"
                style={{
                  position: "absolute",
                  height: "1vw",
                  width: "2vw",
                  top: "2.5vw",
                  left: "0.5vw",
                  minWidth: "2vw",
                  fontFamily: "Georgia, serif",
                  fontWeight: "800",
                  fontSize: "0.75vw",
                  textAlign: "center",
                  color: states["area1"] === "before" ? "gray" : "white",
                }}
              >
                查 询
              </Text>
              <Text
                id="text1_2"
                style={{
                  position: "absolute",
                  height: "1vw",
                  width: "2vw",
                  top: "3.5vw",
                  left: "0.5vw",
                  minWidth: "2vw",
                  fontFamily: "Georgia, serif",
                  fontWeight: "800",
                  fontSize: "0.75vw",
                  textAlign: "center",
                  color: states["area1"] === "before" ? "gray" : "white",
                }}
              >
                系 统
              </Text>
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{
                position: "absolute",
                height: "6vw",
                width: "3vw",
                paddingLeft: 0,
                top: "10vw",
                minWidth: "3vw",
              }}
              onClick={() => {
                setStates({
                  area1: "before",
                  area2: "after",
                  area3: "before",
                });
              }}
            >
              <img
                id="icon2"
                style={{
                  position: "absolute",
                  height: "2vw",
                  width: "2vw",
                  top: "0.5vw",
                  left: "0.5vw",
                  minWidth: "2vw",
                }}
                src={states["area2"] === "before" ? icon2 : icon2_2}
                alt=""
              />
              <Text
                id="text2_1"
                style={{
                  position: "absolute",
                  height: "1vw",
                  width: "2vw",
                  top: "2.5vw",
                  left: "0.5vw",
                  minWidth: "2vw",
                  fontFamily: "Georgia, serif",
                  fontWeight: "800",
                  fontSize: "0.75vw",
                  textAlign: "center",
                  color: states["area2"] === "before" ? "gray" : "white",
                }}
              >
                个 人
              </Text>
              <Text
                id="text2_2"
                style={{
                  position: "absolute",
                  height: "1vw",
                  width: "2vw",
                  top: "3.5vw",
                  left: "0.5vw",
                  minWidth: "2vw",
                  fontFamily: "Georgia, serif",
                  fontWeight: "800",
                  fontSize: "0.75vw",
                  textAlign: "center",
                  color: states["area2"] === "before" ? "gray" : "white",
                }}
              >
                中 心
              </Text>
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{
                position: "absolute",
                height: "6vw",
                width: "3vw",
                paddingLeft: 0,
                top: "20vw",
                minWidth: "3vw",
              }}
              onClick={() => {
                setStates({
                  area1: "before",
                  area2: "before",
                  area3: "after",
                });
              }}
            >
              <img
                id="icon3"
                style={{
                  position: "absolute",
                  height: "2vw",
                  width: "2vw",
                  top: "0.5vw",
                  left: "0.5vw",
                  minWidth: "2vw",
                }}
                src={states["area3"] === "before" ? icon3 : icon3_3}
                alt=""
              />
              <Text
                id="text3_1"
                style={{
                  position: "absolute",
                  height: "1vw",
                  width: "2vw",
                  top: "2.5vw",
                  left: "0.5vw",
                  minWidth: "2vw",
                  fontFamily: "Georgia, serif",
                  fontWeight: "800",
                  fontSize: "0.75vw",
                  textAlign: "center",
                  color: states["area3"] === "before" ? "gray" : "white",
                }}
              >
                日 志
              </Text>
              <Text
                id="text3_2"
                style={{
                  position: "absolute",
                  height: "1vw",
                  width: "2vw",
                  top: "3.5vw",
                  left: "0.5vw",
                  minWidth: "2vw",
                  fontFamily: "Georgia, serif",
                  fontWeight: "800",
                  fontSize: "0.75vw",
                  textAlign: "center",
                  color: states["area3"] === "before" ? "gray" : "white",
                }}
              >
                查 询
              </Text>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className="content">
          <Card className="card-table-mission">
            <Tabs defaultActiveKey="1" className="table-mission">
                {TabOutMission}
                {TabInMission}
            </Tabs>
          </Card>
          <Card className="card-table-personal"></Card>
        </Content>
      </Layout>
    </Layout>
  );
};

const TabOutMission = (
    <TabPane
      tab="转出任务"
      style={{ position: "absolute", height: "38vh" }}
    >
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          y: "30vh",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "51.7vw",
          height: "30vh",
          minWidth: "300px",
        }}
        pagination={{
          defaultPageSize: 6,
          style: {
            position: "absolute",
            left: "18vw",
            height: "1.5vh",
            width: "10vw",
            minWidth: "190px",
          },
          simple: true,
        }}
      />
    </TabPane>
  )

const TabInMission = (
    <TabPane tab="待接任务" 
    style={{ position: "absolute", height: "38vh" }}>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          y: "35vh",
        }}
        pagination={{
          defaultPageSize: 6,
          style: {
            position: "absolute",
            left: "18vw",
            height: "1.5vh",
            width: "10vw",
            minWidth: "190px",
          },
          simple: true,
        }}
      />
    </TabPane>
  );

export default withRouter(Center);
