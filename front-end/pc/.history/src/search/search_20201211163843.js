import { useState } from "react";
import "./search.css";
import { Row, Col, Button, Input, Card, Select, DatePicker, Tag } from "antd";
import { withRouter } from "react-router-dom";
import Logo from "./static/logo.png";
import moment from "moment";
const { RangePicker } = DatePicker;
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


function tagRender(props) {
  const { label, value, closable, onClose } = props;
  return label === '' ? null : (
    <Tag
      color={value}
      closable={true}
      onClose={onClose}
      style={{ color: "white", fontSize: "15px", backgroundColor: 'black' }}
    >
      {label}
    </Tag>
  );
}

const Search = (props) => {


  const [buttonChecked, setbuttonChecked] = useState(1);
  const [city, setCity] = useState(["北京", "上海", "深圳", "杭州"]);
  const [hotel, setHotel] = useState(["北京金茂万丽", "上海静安洲际"]);
  const [trade, setTrade] = useState(["来福士", "故宫", "外滩", "东方明珠"]);
  const [group, setGroup] = useState(["洲际", "万豪", "凯悦", "希尔顿"]);

  const [cityChecked, setCityChecked] = useState('');
  const [hotelChecked, setHotelChecked] = useState('');
  const [tradeChecked, setTradeChecked] = useState('');
  const [groupChecked, setGroupChecked] = useState('');
  const [dateChecked, setDateChecked] = useState(['']);
  const checked = { backgroundColor: "black", color: "white" };
  const unChecked = { backgroundColor: "white", color: "black" };
  return (
    <div
      className="background"
      style={{ minWidth: "900px", minHeight: "800px" }}
    >
      <img src={Logo} alt="" className="logo" />
      {/* 快捷搜索/代码搜索 */}
      <div className="searchArea">
        <Input className="input" />
        <Button className="button">搜索</Button>
      </div>
      <Row gutter={16} className="buttonArea">
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
      </Row>
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
            // defaultValue={["a10", "c12"]}
            value={[cityChecked, hotelChecked, tradeChecked, groupChecked, dateChecked]]}
            onChange={handleChange}
            bordered={false}
            open={false}
            disabled
            key='select'
          />
        </div>
        <div className="form">
          <div
            className="inputArea"
            style={{ top: "0", left: 0 }}
            key="cityArea"
          >
            <Row className="row" style={{ top: 0, left: 0 }} key="city-row">
              <Col span={4} style={{ display: "flex", alignSelf: "center" }} key="city-label-col">
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
                        setCityChecked(item)

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
            style={{ top: "20%", left: 0 }}
            key="hotelArea"
          >
            <Row className="row" gutter={[16]} key="hotel-row">
              <Col span={4} style={{ display: "flex", alignSelf: "center" }} key="hotel-label-col">
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
                        setHotelChecked(item)

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
            style={{ top: "40%", left: 0 }}
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
                        setTradeChecked(item)

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
            style={{ top: "60%", left: 0 }}
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
                        setGroupChecked(item)

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
          <div className="inputArea" style={{ top: "80%", left: 0 }} key='dateArea'>
            <Row className="row" key='date-row'>
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
              <Col span={20} style={{ display: "flex" }} key='date-col'>
                <RangePicker
                key='1'
                  style={{ alignSelf: "center" }}
                  disabledDate={disabledDate}
                  defaultValue={[
                    moment(moment(), dateFormat),
                    moment(moment().add(1, "days"), dateFormat),
                  ]}
                  bordered={false}
                  format={dateFormat}
                />
              </Col>
            </Row>
            <Button className="form-submit" key="date">
              搜索
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default withRouter(Search);
