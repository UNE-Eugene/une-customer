import { useState } from "react";
import "./search.css";
import {
  Row,
  Col,
  Button,
  Input,
  Card,
  Select,
  DatePicker,
  Tag,
  InputNumber,
  Slider,
  Avatar,
  Typography,
  Menu,
  Dropdown,
  message
} from "antd";
import { withRouter } from "react-router-dom";
import Logo from "./static/logo.png";
import moment from "moment";
import { ArrowRightOutlined } from "@ant-design/icons";
import axios from 'axios'
import useLoginState from '../dataCenter/loginMessage'
const { RangePicker } = DatePicker;
const {Text} = Typography;
const dateFormat = "YYYY/MM/DD";

const options = [];


for (let i = 0; i < 1000; i++) {
  const value = `${i.toString(36)}${i}`;
  options.push({
    value,
    disabled: i === 10,
  });
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().add(-1, "days").endOf("day");
}

const Search = (props) => {
  const { username, setUsername } = useLoginState();
  const [buttonChecked, setbuttonChecked] = useState(1);
  const [city, setCity] = useState(["北京", "上海", "深圳", "杭州"]);
  const [hotel, setHotel] = useState(["北京金茂万丽", "上海静安洲际"]);
  const [trade, setTrade] = useState(["来福士", "故宫", "外滩", "东方明珠"]);
  const [group, setGroup] = useState(["洲际", "万豪", "凯悦", "希尔顿"]);

  const [cityChecked, setCityChecked] = useState("");
  const [hotelChecked, setHotelChecked] = useState("");
  const [tradeChecked, setTradeChecked] = useState("");
  const [groupChecked, setGroupChecked] = useState("");
  const [dateChecked, setDateChecked] = useState("");

  const [budget1, setBudget1] = useState(0);
  const [budget2, setBudget2] = useState(10000);
  const [slider, setSlider] = useState([0, 10000]);

  const checked = { backgroundColor: "black", color: "white" };
  const unChecked = { backgroundColor: "white", color: "black" };

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
          退出登录
        </Text>
      </Menu.Item>
    </Menu>
  );

  const tagRender = (props) => {
    const { label, value } = props;
    const onClose = (e) => {
      switch (label) {
        case cityChecked:
          setCityChecked("");
          break;
        case hotelChecked:
          setHotelChecked("");
          break;
        case tradeChecked:
          setTradeChecked("");
          break;
        case groupChecked:
          setGroupChecked("");
          break;
        case dateChecked:
          setDateChecked("");
          break;
        default:
          setBudget1(0)
          setBudget2(10000)
          break;
      }
    };
    switch (label) {
      case "":
        return null;
      case "0元 到 10000元 ":
        return null;
      default:
        console.log(label);
        return (
          <Tag
            color={value}
            closable={true}
            onClose={onClose}
            style={{
              color: "white",
              fontSize: "15px",
              backgroundColor: "black",
            }}
          >
            {label}
          </Tag>
        );
    }
  };
  return (
    <div
      className="background"
      style={{ minWidth: "900px", minHeight: "800px" }}
    >
      <Row className="avatar" gutter={16}>
          <Col xs={12} sm={10} md={10} lg={8} xl={7} xxl={6}>
            <Avatar
              // src={<img src={icon1} alt="" />}
              size={{ xs: 30, sm: 30, md: 35, lg: 35, xl: 40, xxl: 50 }}
            />
          </Col>
          <Col xs={12} sm={14} md={14} lg={16} xl={17} xxl={18}>
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <Text className="workerNumber">{username}</Text>
            </Dropdown>
          </Col>
        </Row>
      <img src={Logo} alt="" className="logo" />
      {/* 快捷搜索/代码搜索 */}
      <div className="searchArea">
        <Input className="input" />
        <Button className="button">搜索</Button>
      </div>
      {/* <Row gutter={16} className="buttonArea">
        <Col span={10}>
          <Button
            className="simple"
            style={buttonChecked === 1 ? checked : unChecked}
            onClick={() => {
              setbuttonChecked(1);
            }}
          >
            基础
          </Button>
        </Col>
        <Col span={4}>&nbsp;</Col>
        <Col span={10}>
          <Button
            className="advance"
            style={buttonChecked === 2 ? checked : unChecked}
            onClick={() => {
              setbuttonChecked(2);
            }}
          >
            高级
          </Button>
        </Col>
      </Row> */}
      <Card className="card">
        <div className="chosen-area">
          <label
            className="chosen-label"
            style={{ fontWeight: "900", fontSize: "18px" }}
            key="chosen-label"
          >
            已选条件：
          </label>
          <Select
            tagRender={tagRender}
            mode="multiple"
            className="chosen-fields"
            placeholder="Please select"
            value={[
              cityChecked,
              hotelChecked,
              tradeChecked,
              groupChecked,
              `${budget1}元 到 ${budget2}元 `,
              dateChecked,
              
            ]}
            onChange={handleChange}
            bordered={false}
            open={false}
            disabled
            key="select"
          />
        </div>
        <div className="form">
          <div
            className="inputArea"
            style={{ top: "0", left: 0 }}
            key="cityArea"
          >
            <Row className="row" style={{ top: 0, left: 0 }} key="city-row">
              <Col
                span={4}
                style={{ display: "flex", alignSelf: "center" }}
                key="city-label-col"
              >
                <label
                  key="city-label"
                  style={{
                    height: "100%",
                    fontWeight: "900",
                    fontSize: "16px",
                  }}
                >
                  城市：
                </label>
              </Col>
              {city.map((item, index) => {
                return (
                  <Col
                    span={5}
                    key={"city-col-" + index.toString()}
                    style={{ display: "flex", alignSelf: "center" }}
                  >
                    <Button
                      key={"city-button-" + index.toString()}
                      type="text"
                      onClick={() => {
                        setCityChecked(item);
                      }}
                    >
                      {item}
                    </Button>
                  </Col>
                );
              })}
            </Row>
            <Input className="form-input" key="city" />
          </div>
          <div
            className="inputArea"
            style={{ top: "16%", left: 0 }}
            key="hotelArea"
          >
            <Row className="row" gutter={[16]} key="hotel-row">
              <Col
                span={4}
                style={{ display: "flex", alignSelf: "center" }}
                key="hotel-label-col"
              >
                <label
                  key="hotel-label"
                  style={{
                    alignSelf: "center",
                    fontWeight: "900",
                    fontSize: "16px",
                  }}
                >
                  酒店：
                </label>
              </Col>
              {hotel.map((item, index) => {
                return (
                  <Col
                    span={10}
                    key={"hotel-col-" + index.toString()}
                    style={{ display: "flex", alignSelf: "center" }}
                  >
                    <Button
                      key={"hotel-button-" + index.toString()}
                      type="text"
                      onClick={() => {
                        setHotelChecked(item);
                      }}
                    >
                      {item}
                    </Button>
                  </Col>
                );
              })}
            </Row>
            <Input className="form-input" key="hotel" />
          </div>
          <div
            className="inputArea"
            style={{ top: "32%", left: 0 }}
            key="tradeArea"
          >
            <Row className="row" key="trade-row">
              <Col span={4} style={{ display: "flex" }} key="trade-label-col">
                <label
                  key="trade-label"
                  style={{
                    alignSelf: "center",
                    fontWeight: "900",
                    fontSize: "16px",
                  }}
                >
                  商圈：
                </label>
              </Col>
              {trade.map((item, index) => {
                return (
                  <Col
                    span={5}
                    key={"trade-col-" + index.toString()}
                    style={{ display: "flex", alignSelf: "center" }}
                  >
                    <Button
                      key={"trade-button-" + index.toString()}
                      type="text"
                      onClick={() => {
                        setTradeChecked(item);
                      }}
                    >
                      {item}
                    </Button>
                  </Col>
                );
              })}
            </Row>
            <Input className="form-input" key="trade" />
          </div>
          <div
            className="inputArea"
            style={{ top: "48%", left: 0 }}
            key="groupArea"
          >
            <Row className="row" key="group-row">
              <Col span={4} style={{ display: "flex" }} key="group-label-col">
                <label
                  key="group-label"
                  style={{
                    alignSelf: "center",
                    fontWeight: "900",
                    fontSize: "16px",
                  }}
                >
                  集团：
                </label>
              </Col>
              {group.map((item, index) => {
                return (
                  <Col
                    span={5}
                    key={"group-col-" + index.toString()}
                    style={{ display: "flex", alignSelf: "center" }}
                  >
                    <Button
                      key={"group-button-" + index.toString()}
                      type="text"
                      onClick={() => {
                        setGroupChecked(item);
                      }}
                    >
                      {item}
                    </Button>
                  </Col>
                );
              })}
            </Row>
            <Input className="form-input" key="group" />
          </div>
          <div
            className="inputArea"
            style={{ top: "64%", left: 0 }}
            key="groupArea"
          >
            <Row className="row" key="group-row">
              <Col span={4} style={{ display: "flex" }} key="group-label-col">
                <label
                  key="group-label"
                  style={{
                    alignSelf: "center",
                    fontWeight: "900",
                    fontSize: "16px",
                  }}
                >
                  预算：
                </label>
              </Col>
              <Col span={20} style={{ display: "flex" }}>
                <Slider
                  range
                  defaultValue={[0, 10000]}
                  step={50}
                  min={0}
                  max={10000}
                  value={slider}
                  onChange={(value) => {
                    setBudget1(value[0]);
                    setBudget2(value[1]);
                    setSlider(value);
                  }}
                  style={{ alignSelf: "center", width: "100%" }}
                />
              </Col>
            </Row>
            <div className="form-input">
              <InputNumber
                style={{ height: "45%", width: "42.5%", alignSelf: "center" }}
                key="budget1"
                value={budget1}
                step={50}
                onChange={(value) => {
                  setBudget1(value);
                  setSlider([budget1, budget2]);
                }}
              />
              <ArrowRightOutlined
                style={{
                  alignSelf: "center",
                  margin: "20px auto",
                  width: "15%",
                }}
              />
              <InputNumber
                key="budget2"
                style={{ height: "45%", width: "42.5%", alignSelf: "center" }}
                step={50}
                value={budget2}
                onChange={(value) => {
                  setBudget2(value);
                  setSlider([budget1, budget2]);
                }}
              />
            </div>
          </div>
          <div
            className="inputArea"
            style={{ top: "80%", left: 0 }}
            key="dateArea"
          >
            <Row className="row" key="date-row">
              <Col span={4} style={{ display: "flex" }} key="date-label-col">
                <label
                  key="date-label"
                  style={{
                    alignSelf: "center",
                    fontWeight: "900",
                    fontSize: "16px",
                  }}
                >
                  日期：
                </label>
              </Col>
              <Col span={20} style={{ display: "flex" }} key="date-col">
                <RangePicker
                  key="1"
                  style={{ alignSelf: "center" }}
                  disabledDate={disabledDate}
                  defaultValue={[
                    moment(moment(), dateFormat),
                    moment(moment().add(1, "days"), dateFormat),
                  ]}
                  bordered={false}
                  format={dateFormat}
                  onCalendarChange={(dates, dateString, info) => {
                    switch (dateString[1]) {
                      case dateString[0]:
                        setDateChecked(
                          `${dateString[0]} 入住 ${dates[1]
                            .add(1, "days")
                            .format(dateFormat)} 离开`
                        );
                        break;
                      case "":
                        setDateChecked(
                          `${dateString[0]} 入住 ${dates[0]
                            .add(1, "days")
                            .format(dateFormat)} 离开`
                        );
                        break;
                      default:
                        setDateChecked(
                          `${dateString[0]} 入住 ${dateString[1]} 离开`
                        );
                        break;
                    }
                  }}
                />
              </Col>
            </Row>
            <Button
              className="form-submit"
              key="date"
              onClick={() => {
                props.history.push("/result");
              }}
            >
              搜索
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default withRouter(Search);
