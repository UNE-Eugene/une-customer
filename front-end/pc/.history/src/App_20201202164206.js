import { useState } from "react";
import "./App.css";
import { Row, Col, Card, Form, Input, Button, Typography } from "antd";
import "antd/dist/antd.css";
import LogoUrl from "./static/logo.png";
import UserLogo from "./static/icon1.png";
import PassLogo from "./static/icon2.png";

const { Title } = Typography;

function App() {
  const [formMessage, setformMessage] = useState({
    username: "",
    password: "",
  });

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const formItemLayout = {
    labelCol: {
      span: 10,
    },
    // wrapperCol: {
    //   span: 14,
    // },
  };
  return (
    <div className="test">
      <div className="header">&nbsp;</div>
      <Row gutter={[16, 80]}>
        <Col span="8">&nbsp;</Col>
        <Col span="8" style={{ alignItems: "center" }}>
          <img src={LogoUrl} alt="" />
        </Col>
        <Col span="8">&nbsp;</Col>
        <Col span="8">&nbsp;</Col>
        <Col span="8" style={{ alignItems: "center" }}>
          <Card className="inline-center" style={{ alignSelf: "center" }}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ layout: "horizontal" }}
              onFinish={onFinish}
              onValuesChange={(changedValues, allValues) => {
                setformMessage(allValues);
              }}
            >
              <Row gutter={[4, 20]}>
                  <Col span='24'>
                    <Form.Item>
                      <Title strong="true">登录</Title>
                    </Form.Item>
                  </Col>
                  <Col span="3">&nbsp;</Col>
                  <Col span="18">
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username!",
                      },
                    ]}
                    className="login-form-input"
                  >
                    <Input
                      prefix={<img src={UserLogo} alt="" />}
                      placeholder="Username"
                    />
                  </Form.Item>
                </Col>
                <Col span="3">&nbsp;</Col>

                <Col span="3">&nbsp;</Col>
                <Col span="18">
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                    className="login-form-input"
                  >
                    <Input
                      prefix={<img src={PassLogo} alt="" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                </Col>
                <Col span="3">&nbsp;</Col>
              <Col span="4">&nbsp;</Col>
              <Col span="16">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  登录
                </Button>
              </Form.Item>
              </Col>
              <Col span="4">&nbsp;</Col>
              </Row>
            </Form>
          </Card>
        </Col>
        <Col span="8">&nbsp;</Col>
      </Row>
    </div>
  );
}

export default App;
