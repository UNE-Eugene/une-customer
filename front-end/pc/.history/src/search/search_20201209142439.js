import { useState } from "react";
import "./search.css";
import { Row, Col, Button, Input, Card, Select } from "antd";
import { withRouter } from "react-router-dom";
import Logo from "./static/logo.png";

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

const Search = (props) => {
  const [chosen, setChosen] = useState([]);
  const [buttonChecked, setbuttonChecked] = useState(1);
  const [city, setCity] = useState(["北京", "上海", "深圳", "杭州"]);
  const [hotel, setHotel] = useState(["北京金茂万丽酒店", "上海静安洲际酒店", "杭州洲际酒店"]);
  // const [city, setCity] = useState(["北京", "上海", "深圳", "杭州"]);
  // const [city, setCity] = useState(["北京", "上海", "深圳", "杭州"]);

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
          <label className="chosen-label">已选条件：</label>
          <Select
            mode="multiple"
            className="chosen-fields"
            placeholder="Please select"
            // defaultValue={["a10", "c12"]}
            value={chosen}
            onChange={handleChange}
            bordered={false}
            open={false}
          />
        </div>
        <div className="form">
          <div className="inputArea" style={{ top: "0", left: 0 }}>
            <Row className="row" style={{ top: 0, left: 0 }}>
              <Col span={4} style={{ display: "flex",alignSelf: "center" }}>
                <label style={{ height: '100%' }}>
                  城市：
                </label>
              </Col>
              {city.map((item, index) => {
                return (
                  <Col span={5} key={index} style={{ display: "flex",alignSelf: "center" }}>
                    <Button key={index}>{item}</Button>
                  </Col>
                );
              })}
            </Row>
            <Input className="form-input" />
          </div>
          <div className="inputArea" style={{ top: "20%", left: 0 }}>
            <Row className="row" style={{width: '70%'}}>
              <Col span={4} style={{ display: "flex", alignSelf: "center" }}>
                <label style={{  alignSelf: "center" }}>
                  酒店：
                </label>
                
              </Col>
              {hotel.map((item, index) => {
                return (
                  <Col span={6} key={index} style={{ display: "flex",alignSelf: "center" }}>
                    <Button key={index}>{item}</Button>
                  </Col>
                );
              })}
            </Row>
            <Input className="form-input" />
          </div>
          <div className="inputArea" style={{ top: "40%", left: 0 }}>
            <Row className="row" >
              <Col span={4} style={{ display: "flex" }}>
                <label style={{  alignSelf: "center" }}>
                商圈：
                </label>
              </Col>
              {city.map((item, index) => {
                return (
                  <Col span={5} key={index} style={{ display: "flex",alignSelf: "center" }}>
                    <Button key={index}>{item}</Button>
                  </Col>
                );
              })}
            </Row>
          </div>
          <div className="inputArea" style={{ top: "60%", left: 0 }}>
            <Row className="row" >
              <Col span={4} style={{ display: "flex" }}>
                <label style={{  alignSelf: "center" }}>
                集团：
                </label>
              </Col>
              {city.map((item, index) => {
                return (
                  <Col span={5} key={index} style={{ display: "flex",alignSelf: "center" }}>
                    <Button key={index}>{item}</Button>
                  </Col>
                );
              })}
            </Row>
          </div>
          <div className="inputArea" style={{ top: "80%", left: 0 }}>
            <Row className="row" >
              <Col span={4} style={{ display: "flex" }}>
                <label style={{  alignSelf: "center" }}>
                  日期：
                </label>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default withRouter(Search);
