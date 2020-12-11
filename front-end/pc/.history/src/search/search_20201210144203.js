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

const optionss = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

function tagRender(props) {
  const { label, value, closable, onClose } = props;
  return (
    label===null?null:
    <Tag color={value} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
      {label}
    </Tag>
  );
}

const Search = (props) => {
  let formData = {
    city: null,
    hotel: null,
    date: null,
    trade: null,
    group: null,
    budget: null,
  }
  const [chosen, setChosen] = useState([formData.city, formData.hotel,formData.date[0],formData.date[1], formData.trade, formData.group, formData.budget]);
  const [buttonChecked, setbuttonChecked] = useState(1);
  const [city, setCity] = useState(["北京", "上海", "深圳", "杭州"]);
  const [hotel, setHotel] = useState(["北京金茂万丽", "上海静安洲际"]);
  const [trade, setTrade] = useState(["来福士", "故宫", "外滩", "东方明珠"]);
  const [group, setGroup] = useState(["洲际", "万豪", "凯悦", "希尔顿"]);

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
          >
            已选条件：
          </label>
          <Select
            tagRender={tagRender}
            mode="multiple"
            className="chosen-fields"
            placeholder="Please select"
            // defaultValue={["a10", "c12"]}
            value={chosen}
            onChange={handleChange}
            bordered={false}
            open={false}
            options={optionss}
            disabled
          />
        </div>
        <div className="form">
          <div className="inputArea" style={{ top: "0", left: 0 }}>
            <Row className="row" style={{ top: 0, left: 0 }}>
              <Col span={4} style={{ display: "flex", alignSelf: "center" }}>
                <label
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
                    key={index}
                    style={{ display: "flex", alignSelf: "center" }}
                  >
                    <Button key={index} type="text" onClick={()=>{
                      setCity(item)
                    }}>
                      {item}
                    </Button>
                  </Col>
                );
              })}
            </Row>
            <Input className="form-input" />
          </div>
          <div className="inputArea" style={{ top: "20%", left: 0 }}>
            <Row className="row" gutter={[16]}>
              <Col span={4} style={{ display: "flex", alignSelf: "center" }}>
                <label
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
                    key={index}
                    style={{ display: "flex", alignSelf: "center" }}
                  >
                    <Button key={index} type="text">
                      {item}
                    </Button>
                  </Col>
                );
              })}
            </Row>
            <Input className="form-input" />
          </div>
          <div className="inputArea" style={{ top: "40%", left: 0 }}>
            <Row className="row">
              <Col span={4} style={{ display: "flex" }}>
                <label
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
                    key={index}
                    style={{ display: "flex", alignSelf: "center" }}
                  >
                    <Button key={index} type="text">
                      {item}
                    </Button>
                  </Col>
                );
              })}
            </Row>
            <Input className="form-input" />
          </div>
          <div className="inputArea" style={{ top: "60%", left: 0 }}>
            <Row className="row">
              <Col span={4} style={{ display: "flex" }}>
                <label
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
                    key={index}
                    style={{ display: "flex", alignSelf: "center" }}
                  >
                    <Button key={index} type="text">
                      {item}
                    </Button>
                  </Col>
                );
              })}
            </Row>
            <Input className="form-input" />
          </div>
          <div className="inputArea" style={{ top: "80%", left: 0 }}>
            <Row className="row">
              <Col span={4} style={{ display: "flex" }}>
                <label
                  style={{
                    alignSelf: "center",
                    fontWeight: "900",
                    fontSize: "16px",
                  }}
                >
                  日期：
                </label>
              </Col>
              <Col span={20} style={{ display: "flex" }}>
                <RangePicker
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
            <Button className="form-submit">搜索</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default withRouter(Search);
