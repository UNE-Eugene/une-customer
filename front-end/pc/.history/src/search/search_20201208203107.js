import { useState } from "react";
import "./search.css";
import { Row, Col, Button, Input, Card, Form, Select } from "antd";
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
  const onFinish = (values) => {
    props.history.push("/center");
    console.log("Received values of form: ", values);
  };
  const [chosen, setChosen] = useState(["杭州", "杭州洲际酒店"]);
  const [buttonChecked, setbuttonChecked] = useState(1);
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
        <Form
          name="normal_login"
          className="form"
          initialValues={{ layout: "horizontal" }}
          onFinish={onFinish}
          labelAlign='right'
        >
          <Form.Item label="城市"></Form.Item>
          <Form.Item label="酒店"></Form.Item>
          <Form.Item label="日期"></Form.Item>
          <Form.Item label="商圈"></Form.Item>
          <Form.Item label="集团"></Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default withRouter(Search);
