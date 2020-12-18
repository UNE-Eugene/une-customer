import { useState, useEffect } from "react";
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
  Pagination,
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
import QueueAnim from "rc-queue-anim";
import Logger from "./Logger";
import {
  UserOutlined,
  FileTextFilled,
  DesktopOutlined,
} from "@ant-design/icons";
import axios from "axios";
import useLoginState from "../dataCenter/loginMessage";

// axios 基本配置， 配置csrf验证
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "LoginToken";
axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.withCredentials = true;

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
    // eslint-disable-next-line
    render: () => <a>action</a>,
  },
];

const columns1 = [
  {
    title: "qwewqr",
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
for (let i = 0; i < 6; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const tabList = [
  {
    key: "outMission",
    tab: "转出任务",
  },
  {
    key: "inMission",
    tab: "待接任务",
  },
];

const contentList = {
  inMission: (
    <Table
      columns={columns}
      dataSource={data}
      scroll={true}
      pagination={false}
    />
  ),
  outMission: (
    <Table
      columns={columns1}
      dataSource={data}
      scroll={true}
      pagination={false}
    />
  ),
};


const Center = (props) => {
  // 通过hox全局管理变量
  const { username, setUsername } = useLoginState();

  // 定义hook
  const [TabKey, setTabKey] = useState('outMission')
  const [logger, setlogger] = useState(false);
  const [states, setStates] = useState({
    area1: "before",
    area2: "after",
    area3: "before",
  });

  useEffect(() => {
    if(username === ''){
      axios.get('/user/').then(
        response => {
          setUsername(response.data)
        }
      ).catch(
        error=>{
          props.history.push('/')
        }
      )
    }
  }, [])

  return (
    <Layout className="main">
      <Header
        className="header"
        style={{ minHeight: "60px", minWidth: "100%" }}
      >
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
              <Text className="workerNumber">{username}</Text>
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <Layout className="body">
        <Sider className="side" width="70px">
          <Menu className="menu" theme="dark" defaultSelectedKeys="2">
            <Menu.Item
              key="1"
              style={{
                position: "absolute",
                height: "12.5%",
                width: "100%",
                paddingLeft: 0,
                paddingTop: 0,
                top: 0,
                minWidth: "50px",
              }}
              onClick={() => {
                console.log(username==='')
                axios.get("/user/").then((response) => {
                  console.log(response.data);
                });
                // props.history.push("/search");
                setStates({
                  area1: "after",
                  area2: "before",
                  area3: "before",
                });
              }}
            >
              <DesktopOutlined
                width={"60%"}
                height={"30%"}
                className="SideLogo"
                style={{
                  position: "absolute",
                  height: "35%",
                  width: "70%",
                  top: "15%",
                  left: "15%",
                  minWidth: "40px",
                }}
              />
              {/* <img
                id="icon1"
                style={{
                  position: "absolute",
                  height: "35%",
                  width: "70%",
                  top: "15%",
                  left: "15%",
                  minWidth: "40px",
                  minHeight: "20px",
                }}
                src={states["area1"] === "before" ? icon1 : icon1_1}
                alt=""
              /> */}
              <Text
                id="text1_1"
                style={{
                  position: "absolute",
                  height: "10%",
                  width: "70%",
                  top: "55%",
                  left: "15%",
                  minWidth: "40px",
                  fontFamily: "Georgia, serif",
                  fontWeight: "800",
                  fontSize: "18px",
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
                  height: "10%",
                  width: "70%",
                  top: "70%",
                  left: "15%",
                  minWidth: "40px",
                  fontFamily: "Georgia, serif",
                  fontWeight: "800",
                  fontSize: "18px",
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
                height: "12.5%",
                width: "100%",
                paddingLeft: 0,
                top: "17.5%",
                minWidth: "50px",
              }}
              onClick={() => {
                setlogger(false);
                setStates({
                  area1: "before",
                  area2: "after",
                  area3: "before",
                });
              }}
            >
              <UserOutlined
                width={"60%"}
                height={"30%"}
                className="SideLogo"
                style={{
                  position: "absolute",
                  height: "35%",
                  width: "70%",
                  top: "15%",
                  left: "15%",
                  minWidth: "40px",
                }}
              />
              {/* <img
                id="icon2"
                style={{
                  position: "absolute",
                  height: "35%",
                  width: "70%",
                  top: "15%",
                  left: "15%",
                  minWidth: "40px",
                }}
                src={states["area2"] === "before" ? icon2 : icon2_2}
                alt=""
              /> */}
              <Text
                id="text2_1"
                style={{
                  position: "absolute",
                  height: "10%",
                  width: "70%",
                  top: "55%",
                  left: "15%",
                  minWidth: "40px",
                  fontFamily: "Georgia, serif",
                  fontWeight: "800",
                  fontSize: "18px",
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
                  height: "10%",
                  width: "70%",
                  top: "70%",
                  left: "15%",
                  minWidth: "40px",
                  fontFamily: "Georgia, serif",
                  fontWeight: "800",
                  fontSize: "18px",
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
                height: "12.5%",
                width: "100%",
                paddingLeft: 0,
                top: "35%",
                minWidth: "50px",
              }}
              onClick={() => {
                setlogger(true);
                setStates({
                  area1: "before",
                  area2: "before",
                  area3: "after",
                });
              }}
            >
              <FileTextFilled
                width={"60%"}
                height={"30%"}
                className="SideLogo"
                style={{
                  position: "absolute",
                  height: "35%",
                  width: "70%",
                  top: "15%",
                  left: "15%",
                  minWidth: "40px",
                }}
              />
              {/* <img
                id="icon3"
                style={{
                  position: "absolute",
                  height: "35%",
                  width: "70%",
                  top: "15%",
                  left: "15%",
                  minWidth: "40px",
                }}
                src={states["area3"] === "before" ? icon3 : icon3_3}
                alt=""
              /> */}
              <Text
                id="text3_1"
                style={{
                  position: "absolute",
                  height: "10%",
                  width: "70%",
                  top: "55%",
                  left: "15%",
                  minWidth: "40px",
                  fontFamily: "Georgia, serif",
                  fontWeight: "800",
                  fontSize: "18px",
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
                  height: "10%",
                  width: "70%",
                  top: "70%",
                  left: "15%",
                  minWidth: "40px",
                  fontFamily: "Georgia, serif",
                  fontWeight: "800",
                  fontSize: "18px",
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
          {logger === true ? (
            <Logger />
          ) : (
            <>
              <QueueAnim type="left" delay={0}>
                <Card
                  className="card-table-mission"
                  tabBarExtraContent={<Pagination pageSizeOptions={[6]} total={18}/>}
                  key="card1"
                  tabList={tabList}
                  activeTabKey={TabKey}
                  onTabChange = {key=>{console.log(contentList[TabKey]);setTabKey(key);console.log(contentList[TabKey]);}}
                  
                >
                  {contentList[TabKey]}
                </Card>
              </QueueAnim>
              <QueueAnim type="bottom" delay={100}>
                <Card className="card-table-personal" key="card2"></Card>
              </QueueAnim>
            </>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(Center);
