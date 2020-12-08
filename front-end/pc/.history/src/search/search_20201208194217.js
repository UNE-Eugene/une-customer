import { useState } from "react";
import "./search.css";
import { Row, Col, Button, Input, Card,  Select } from "antd";
import { withRouter } from "react-router-dom";
import Logo from "./static/logo.png";

const Search = () => {
  const [buttonChecked, setbuttonChecked] = useState(1);
  const checked = { backgroundColor: "black", color: "white" };
  const unChecked = { backgroundColor: "white", color: "black" };
  return (
    <div className="background" style={{minWidth: '900px', minHeight: '800px'}}>
      <img src={Logo} alt="" className="logo" />

      {/* 快捷搜索/代码搜索 */}
      <div className="searchArea">
        <Input className="input" />
        <Button className="button">搜索</Button>
      </div>
      <Card className="card"></Card>
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
    </div>
  );
};

export default withRouter(Search);
