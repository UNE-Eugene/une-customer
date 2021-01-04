import { useState, useEffect } from "react";
import "./result.css";
import {
  Layout,
  Row,
  Col,
  Avatar,
  AutoComplete,
  Button,
  Input,
  Card,
  Select,
  DatePicker,
  Table,
  Tag,
  Space,
  Typography,
  Dropdown,
  Menu,
  InputNumber,
  Badge,
} from "antd";
import Logo from "./static/logo.png";
import moment from "moment";
import { withRouter } from "react-router-dom";
import hotelJPG from "./static/广州东圃合景福朋喜来登酒店_2.jpg";
import { EnvironmentFilled } from "@ant-design/icons";
import useLoginState from "../dataCenter/loginMessage";
import axios from "axios";
import useSearchResult from "../dataCenter/searchResult";
import useSearchForm from '../dataCenter/searchForm'


axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "LoginToken";
axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.withCredentials = true;

const { RangePicker } = DatePicker;
const { Text } = Typography;
const { Header, Footer } = Layout;
const dateFormat = "YYYY/MM/DD";
const { Paragraph } = Typography;

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().add(-1, "days").endOf("day");
}

const columns = [
  {
    title: "房型",
    dataIndex: "room",
    key: "room",
    align: "center",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "价格类型",
    dataIndex: "priceType",
    key: "priceType",
    align: "center",
  },
  {
    title: "价格",
    dataIndex: "price",
    key: "price",
    align: "center",
  },
  {
    title: "房态",
    key: "tags",
    dataIndex: "tags",
    align: "center",
    render: (tags) => (
      <Space direction="horizontal">
        <Avatar
          style={{
            alignSelf: "center",
            marginLeft: "auto",
            backgroundColor: "red",
          }}
        >
          10
        </Avatar>
        <Avatar
          style={{
            alignSelf: "center",
            marginLeft: "auto",
            backgroundColor: "red",
          }}
        >
          10
        </Avatar>
        <Avatar
          style={{
            alignSelf: "center",
            marginLeft: "auto",
            backgroundColor: "red",
          }}
        >
          10
        </Avatar>
        <Avatar
          style={{
            alignSelf: "center",
            marginLeft: "auto",
            backgroundColor: "red",
          }}
        >
          10
        </Avatar>
        <Avatar
          style={{
            alignSelf: "center",
            marginLeft: "auto",
            backgroundColor: "red",
          }}
        >
          10
        </Avatar>
        <Avatar
          style={{
            alignSelf: "center",
            marginLeft: "auto",
            backgroundColor: "red",
          }}
        >
          10
        </Avatar>
        <Avatar
          style={{
            alignSelf: "center",
            marginLeft: "auto",
            backgroundColor: "red",
          }}
        >
          10
        </Avatar>
      </Space>
    ),
  },

  {
    title: "价格等级",
    dataIndex: "priceLevel",
    key: "priceLevel",
    align: "center",
    render: (text, record) => <Tag color="gold">SS</Tag>,
  },
  {
    title: "预估客户等级",
    dataIndex: "customerLevel",
    key: "customerLevel",
    align: "center",
    render: (text, record) => <Tag color="gold">AA</Tag>,
  },
  {
    title: "操作",
    key: "action",
    align: "center",
    render: (text, record) => (
      <Space size="middle">
        <Button>询价</Button>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const menu = (
  <Menu className="result-dropdown">
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

const TitleRender = (props) => {
  console.log(props.tags);
  return (
    <Row style={{ height: "200px", width: "100%" }}>
      <Col span={6} style={{ display: "flex" }}>
        <img
          src={hotelJPG}
          alt=""
          style={{
            height: "200px",
            width: "65%",
            alignSelf: "center",
            alignItems: "center",
            margin: "auto",
          }}
        />
      </Col>
      <Col span={18} style={{display: 'flex'}}>
        <Space direction='vertical' style={{alignSelf: 'center'}}>
            <a
              style={{
                fontSize: "30px",
                fontWeight: "700",
                alignSelf: "center",
                display: "flex",
                color: 'black'
              }}
              href={props.data}
              target='_blank'
              rel="noreferrer"
            >
              {props.hotelName}&nbsp;
              {
                <Tag color="gold" style={{ alignSelf: "center" }}>
                  SSS
                </Tag>
              }
            </a>
            <Paragraph style={{ alignSelf: "center" }}>
              {props.suggestion}
            </Paragraph>
          {/* <Col span={24} style={{ display: "flex" }}>
            <Paragraph style={{ alignSelf: "center" }}>
              备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注
            </Paragraph>
          </Col> */}
            <Space>
              {props.tags.map((item, index) => {
                return (
                  <Tag
                    style={{
                      alignSelf: "center",
                      height: "25px",
                      fontSize: "13px",
                    }}
                  >
                    {item}
                  </Tag>
                );
              })}
            </Space>
            <Text style={{ alignSelf: "center", height: "30px" }}>
              {<EnvironmentFilled />} { props.address}
            </Text>
        </Space>
      </Col>
    </Row>
  );
};

const Result = (props) => {
  const { username, setUsername } = useLoginState();
  const { searchResult, setSearchResult } = useSearchResult();
  const { searchForm, setSearchForm } = useSearchForm();

  const [dateChecked, setDateChecked] = useState("");
  const [pageDate, setPageDate] = useState([
    moment(moment(), dateFormat),
    moment(moment().add(1, "days"), dateFormat),
  ]);

  useEffect(() => {
    if (username === "") {
      axios
        .get("/user/")
        .then((response) => {
          setUsername(response.data);
        })
        .catch((error) => {
          props.history.push("/");
        });
    }
  }, []);
  return (
    <Layout style={{ position: "relative", height: "100%", width: "100%" }}>
      <Header className="result-header" theme="light">
        <img src={Logo} alt="" className="result-img" />
        <Row className="result-avatar" gutter={16}>
          <Col xs={12} sm={10} md={10} lg={8} xl={7} xxl={6}>
            <Avatar
              size={{ xs: 30, sm: 30, md: 35, lg: 35, xl: 40, xxl: 50 }}
            />
          </Col>
          <Col xs={12} sm={14} md={14} lg={16} xl={17} xxl={18}>
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <Text className="result-workerNumber">{username}</Text>
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <section className="result-content">
        <Input.Group compact={true} className="InputGroup">
          <AutoComplete
            style={{ width: "10%", height: "100%" }}
            children={
              <Input
                style={{ height: "50px", fontSize: "16px" }}
                placeholder={searchForm.city}
                
              />
            }
          />
          <AutoComplete
            style={{ width: "25%", height: "100%" }}
            children={
              <Input
                style={{ height: "50px", fontSize: "16px" }}
                placeholder={searchForm.hotel}
                defaultValue={searchForm.hotel}
              />
            }
          />
          <AutoComplete
            style={{ width: "15%", height: "100%" }}
            children={
              <Input
                style={{ height: "50px", fontSize: "16px" }}
                placeholder={searchForm.trade}
                defaultValue={searchForm.trade}
              />
            }
          />
          <AutoComplete
            style={{ width: "10%", height: "100%" }}
            children={
              <Input
                style={{ height: "50px", fontSize: "16px" }}
                placeholder={searchForm.group}
                defaultValue={searchForm.group}
              />
            }
          />
          <RangePicker
            key="1"
            style={{
              alignSelf: "center",
              height: "50px",
              width: "30%",
              textAlign: "center",
            }}
            defaultValue={searchForm.date}
            disabledDate={disabledDate}
            value={pageDate}
            className="result-rangePicker"
            inputReadOnly
            format={dateFormat}
            onCalendarChange={(dates, dateString, info) => {
              switch (dateString[1]) {
                case dateString[0]:
                  setDateChecked(
                    `${dateString[0]} 入住 ${dates[1]
                      .add(1, "days")
                      .format(dateFormat)} 离开`
                  );
                  setPageDate([dates[0], dates[1].add(1, "days")]);
                  break;
                case "":
                  setDateChecked(
                    `${dateString[0]} 入住 ${dates[0]
                      .add(1, "days")
                      .format(dateFormat)} 离开`
                  );
                  setPageDate([dateString[0], dates[0].add(1, "days")]);
                  break;
                default:
                  setDateChecked(`${dateString[0]} 入住 ${dateString[1]} 离开`);
                  setPageDate(dates);
                  break;
              }
            }}
          />
          <Button style={{ height: "50px", width: "10%" }}>123</Button>
        </Input.Group>
        <Space
          style={{
            position: "absolute",
            top: "10%",
            left: "20%",
            minWidth: "800px",
            width: "60%",
          }}
          direction="vertical"
        >
          {/* 根据搜索结果循环生成card */}
          {searchResult.map((item, index) => {
            return (
              <Card
                className="result-card"
                hoverable
                title={
                  <TitleRender
                    hotelName={item.name}
                    suggestion={item.suggestion}
                    tags={item.tags}
                    data={item.dataUrl}
                    address={item.address}
                  />
                }
              >
                <div style={{ display: "flex" }}>
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    房价详情
                  </Text>
                  <RangePicker
                    style={{ alignSelf: "center", marginLeft: "auto", width: '20%' }}
                    disabledDate={disabledDate}
                    value={pageDate}
                    className="result-rangePicker"
                    inputReadOnly
                    format={dateFormat}
                    onCalendarChange={(dates, dateString, info) => {
                      switch (dateString[1]) {
                        case dateString[0]:
                          setDateChecked(
                            `${dateString[0]} 入住 ${dates[1]
                              .add(1, "days")
                              .format(dateFormat)} 离开`
                          );
                          setPageDate([dates[0], dates[1].add(1, "days")]);
                          break;
                        case "":
                          setDateChecked(
                            `${dateString[0]} 入住 ${dates[0]
                              .add(1, "days")
                              .format(dateFormat)} 离开`
                          );
                          setPageDate([dateString[0], dates[0].add(1, "days")]);
                          break;
                        default:
                          setDateChecked(
                            `${dateString[0]} 入住 ${dateString[1]} 离开`
                          );
                          setPageDate(dates);
                          break;
                      }
                    }}
                  />
                  <div>&nbsp;</div>
                  <Button style={{ alignSelf: "center", width: "5%" }}>
                    查询
                  </Button>
                </div>
                <div>&nbsp;</div>
                <Table columns={columns} dataSource={data} pagination={false} />
              </Card>
            );
          })}
        </Space>
        <Footer>&nbsp;</Footer>
      </section>
    </Layout>
  );
};

export default withRouter(Result);
