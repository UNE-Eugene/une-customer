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
  InputNumber,
  DatePicker,
  Table,
  Tag,
  Space,
  Typography,
  Dropdown,
  Menu,
  Modal,
  message,
  Popover,
} from "antd";
import Logo from "./static/logo.png";
import moment from "moment";
import { withRouter } from "react-router-dom";
import hotelJPG from "./static/广州东圃合景福朋喜来登酒店_2.jpg";
import { EnvironmentFilled } from "@ant-design/icons";
import useLoginState from "../dataCenter/loginMessage";
import axios from "axios";
import useSearchResult from "../dataCenter/searchResult";
import useSearchForm from "../dataCenter/searchForm";

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

// const data = [
//   {
//     key: "1",
//     room: "John Brown",
//     priceType: 32,
//     price: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//     priceLevel: "SS",
//   },
//   {
//     key: "2",
//     room: "Jim Green",
//     priceType: 42,
//     price: "London No. 1 Lake Park",
//     tags: ["loser"],
//     priceLevel: "AA",
//   },
//   {
//     key: "3",
//     room: "Joe Black",
//     priceType: 32,
//     price: "Sidney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//     priceLevel: "BB",
//   },
// ];

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
      <Col span={18} style={{ display: "flex" }}>
        <Space direction="vertical" style={{ alignSelf: "center" }}>
          <a
            style={{
              fontSize: "30px",
              fontWeight: "700",
              alignSelf: "center",
              display: "flex",
              color: "black",
            }}
            href={props.data}
            target="_blank"
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
            {<EnvironmentFilled />} {props.address}
          </Text>
        </Space>
      </Col>
    </Row>
  );
};

const ResultCard = (props) => {
  const { searchForm, setSearchForm } = useSearchForm();

  const item = props.item;
  const defaultDate = props.defaultDate;

  const [pageDate, setPageDate] = useState([
    moment(defaultDate[0], "YYYY/MM/DD"),
    moment(defaultDate[1], "YYYY/MM/DD"),
  ]);
  const [privital, setPrivate] = useState("");
  const [ps, setPs] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [resultBudget, setResultBudget] = useState(searchForm.budget[1]);

  const [data, setData] = useState("");
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    axios.post('/ask', {
      message: privital,
      remark: ps
    }).then(
      response=>{
        message.success(response.data)
      }
    )
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    axios
      .post("http://127.0.0.1:9000/staticPrice/", {
        name: item.name,
        group: item.platform,
        budget: [0, resultBudget],
        date: [pageDate[0].format("YYYY-MM-DD"), pageDate[1].format("YYYY-MM-DD")],
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }, []);
  const columns = [
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
      dataIndex: "dates",
      align: "center",
      render: (dates) => (
        <Space direction="horizontal">
          {dates.map((item, index) => {
            console.log(item["room"] === "0");
            return (
              <Popover
                content={`
                ${item.room}
                ${item.price}
                `}
                trigger="hover"
                style={{
                  borderRadius: "10px",
                }}
              >
                <Avatar
                  style={{
                    alignSelf: "center",
                    marginLeft: "auto",
                    backgroundColor:
                      item["room"] === "0"
                        ? "black"
                        : item["room"] === "预算内无房"
                        ? "gray"
                        : "green",
                  }}
                >
                  {item["date"]}
                </Avatar>
              </Popover>
            );
          })}
        </Space>
      ),
    },

    {
      title: "价格等级",
      dataIndex: "priceLevel",
      key: "priceLevel",
      align: "center",
      render: (text, record) => <Tag color="gold">{text}</Tag>,
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
      render: (text, record) => {
        return (
          <Space size="middle">
            <Button
              onClick={() => {
                setPrivate(
                  `
                酒店：${item.name} 
                价格类型：${record.priceType}
                价格：${record.price}
                价格等级：${record.priceLevel}
                `
                );
                showModal();
              }}
            >
              询价
            </Button>
            <Modal
              title={
                <Input.TextArea
                  bordered={false}
                  value={privital}
                  autoSize={true}
                  onChange={(e) => {
                    setPrivate(e.target.value);
                  }}
                />
              }
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              closable={false}
              okText={"询价"}
              cancelText={"取消"}
            >
              <p>备注：</p>
              <Input.TextArea
                bordered={false}
                autoSize={true}
                value={ps}
                onChange={(e) => {
                  setPs(e.target.value);
                }}
              />
            </Modal>
          </Space>
        );
      },
    },
  ];

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
        <InputNumber 
        style={{
          alignSelf: "center",
          marginLeft: "auto",
          width: "10%",
          minWidth: "120px",
        }}
        value={resultBudget} onChange={value=>{setResultBudget(value)}}/>
        <div>&nbsp;</div>
        <RangePicker
          style={{
            alignSelf: "center",
            width: "20%",
            minWidth: "240px",
          }}
          disabledDate={disabledDate}
          value={pageDate}
          // value={pageDate}
          className="result-rangePicker"
          inputReadOnly
          format={dateFormat}
          onCalendarChange={(dates, dateString, info) => {
            switch (dateString[1]) {
              case dateString[0]:
                setPageDate([dates[0], dates[1].add(1, "days")]);
                break;
              case "":
                setPageDate([moment(dateString[0], "YYYY/MM/DD"), dates[0].add(1, "days")]);
                break;
              default:
                setPageDate(dates);
                break;
            }
          }}
        />
        <div>&nbsp;</div>
        <Button
          style={{ alignSelf: "center", width: "5%", minWidth: "60px" }}
          onClick={() => {
            setData("");
            axios
              .post("http://127.0.0.1:9000/staticPrice/", {
                name: item.name,
                group: item.platform,
                budget: [0, resultBudget],
                date: [pageDate[0].format("YYYY-MM-DD"), pageDate[1].format("YYYY-MM-DD")],
              })
              .then((response) => {
                console.log(response.data);
                setData(response.data);
              });
          }}
        >
          查询
        </Button>
      </div>
      <div>&nbsp;</div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Card>
  );
};

const Result = (props) => {
  const { username, setUsername } = useLoginState();
  const { searchResult, setSearchResult } = useSearchResult();
  const { searchForm, setSearchForm } = useSearchForm();

  const [result, setResult] = useState(searchResult);
  const [dateChecked, setDateChecked] = useState(searchForm.date);

  const [cityChecked, setCityChecked] = useState(searchForm.city);
  const [hotelChecked, setHotelChecked] = useState(searchForm.hotel);
  const [tradeChecked, setTradeChecked] = useState(searchForm.trade);
  const [groupChecked, setGroupChecked] = useState(searchForm.group);
  const [budget1, setBudget1] = useState(searchForm.budget[0]);
  const [budget2, setBudget2] = useState(searchForm.budget[1]);

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
        onClick={() => {
          axios.get("/logout/").then((response) => {
            message.success("注销成功， 请重新登录");
            props.history.push("/");
          });
        }}
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
      <Menu.Item
        onClick={() => {
          props.history.push("/center");
        }}
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
          我的主页
        </Text>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          props.history.push("/center");
        }}
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
          退出登录
        </Text>
      </Menu.Item>
    </Menu>
  );

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
            value={cityChecked}
            children={
              <Input
                style={{ height: "50px", fontSize: "16px" }}
                // placeholder={searchForm.city}

                onChange={(e) => {
                  console.log(e.target.value);
                  setCityChecked(e.target.value);
                }}
              />
            }
          />
          <AutoComplete
            style={{ width: "25%", height: "100%" }}
            value={hotelChecked}
            children={
              <Input
                style={{ height: "50px", fontSize: "16px" }}
                placeholder={searchForm.hotel}
                onChange={(e) => {
                  setHotelChecked(e.target.value);
                }}
              />
            }
          />
          <AutoComplete
            style={{ width: "15%", height: "100%" }}
            value={tradeChecked}
            children={
              <Input
                style={{ height: "50px", fontSize: "16px" }}
                placeholder={searchForm.trade}
                onChange={(e) => {
                  setTradeChecked(e.target.value);
                }}
              />
            }
          />
          <AutoComplete
            style={{ width: "10%", height: "100%" }}
            value={groupChecked}
            children={
              <Input
                style={{ height: "50px", fontSize: "16px" }}
                placeholder={searchForm.group}
                onChange={(e) => {
                  setGroupChecked(e.target.value);
                }}
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
            defaultValue={dateChecked}
            disabledDate={disabledDate}
            //    value={pageDate}
            className="result-rangePicker"
            inputReadOnly
            format={dateFormat}
            onCalendarChange={(dates, dateString, info) => {
              switch (dateString[1]) {
                case dateString[0]:
                  setDateChecked([
                    dateString[0],
                    dates[1].add(1, "days").format(dateFormat),
                  ]);
                  break;
                case "":
                  setDateChecked([
                    dateString[0],
                    dates[0].add(1, "days").format(dateFormat),
                  ]);
                  break;
                default:
                  setDateChecked([dateString[0], dateString[1]]);
                  break;
              }
            }}
          />
          <Button
            style={{ height: "50px", width: "10%" }}
            onClick={() => {
              setSearchForm({
                city: cityChecked,
                hotel: hotelChecked,
                trade: tradeChecked,
                group: groupChecked,
                budget: [budget1, budget2],
                date: dateChecked,
              });
              setResult([
                {
                  name: "",
                  dataUrl: "",
                  suggestion: "",
                  tags: [],
                  address: "",
                },
              ]);
              axios
                .post("/api/search/", {
                  city: cityChecked,
                  hotel: hotelChecked,
                  trade: tradeChecked,
                  group: groupChecked,
                  budget: [budget1, budget2],
                  date: dateChecked,
                })
                .then((response) => {
                  setSearchResult(response.data);
                  setResult(response.data);
                });
            }}
          >
            搜索
          </Button>
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
          {result.map((item, index) => {
            return item.name === "" ? null : (
              <ResultCard item={item} defaultDate={dateChecked} />
            );
          })}
        </Space>
        <Footer>&nbsp;</Footer>
      </section>
    </Layout>
  );
};

export default withRouter(Result);
