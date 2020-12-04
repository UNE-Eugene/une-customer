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

  return (
    <div className="test">
      {/* <img src={Bg} alt='' className='background'></img> */}
      {/* <div className="header">&nbsp;</div> */}
      <Row gutter={[16, { xs: 14, sm: 20, md: 30, lg: 36 }]}>
        <div className='header'></div>
        <Col span="24">&nbsp;</Col>
        <Col span="24">&nbsp;</Col>
        <Col span="24">&nbsp;</Col>
        <Col span="8">&nbsp;</Col>
        <Col span="8" style={{ alignItems: "center" }}>
          <img src={LogoUrl} alt="" />
        </Col>
        <Col span="8">&nbsp;</Col>
        <Col xs={2} sm={5} md={7} lg={8} xl={8} xxl={9}>&nbsp;</Col>
        <Col xs={20} sm={14} md={10} lg={8} xl={8} xxl={6} style={{ alignItems: "center" }}>
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
              <Row gutter={[4, 18]}>
                <Col span="24">&nbsp;</Col>
                <Col span="24">
                  <Form.Item>
                    <Title strong="true">登 录</Title>
                  </Form.Item>
                </Col>
                <Col span="1">&nbsp;</Col>
                <Col span="22">
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "请输入用户名!",
                      },
                    ]}
                  >
                    <Input
                      autocomplete="off"
                      className="login-input"
                      prefix={<img src={UserLogo} alt="" />}
                      placeholder="用 户 名"
                      style={{ borderTop: 0, borderRight: 0, borderLeft: 0 }}
                    />
                  </Form.Item>
                </Col>
                <Col span="1">&nbsp;</Col>

                <Col span="1">&nbsp;</Col>
                <Col span="22">
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "请输入密码!",
                      },
                    ]}
                  >
                    <Input
                      autocomplete="off"
                      className='login-input'
                      prefix={<img src={PassLogo} alt="" />}
                      type="password"
                      placeholder="密 码"
                      style={{ borderTop: 0, borderRight: 0, borderLeft: 0 }}
                    />
                  </Form.Item>
                </Col>
                <Col span="1">&nbsp;</Col>
                <Col span="2">&nbsp;</Col>
                <Col span="20">
                  <Form.Item>
                    <Button
                      size="large"
                      type="primary"
                      htmlType="submit"
                      style={{
                        width: "100%",
                        borderRadius: 10,
                        backgroundColor: "black",
                      }}
                    >
                      登录
                    </Button>
                  </Form.Item>
                </Col>
                <Col span="2">&nbsp;</Col>
              </Row>
            </Form>
          </Card>
        </Col>
        <Col xs={2} sm={5} md={7} lg={8} xl={8} xxl={9}>&nbsp;</Col>
      </Row>
    </div>
  );
}

export default App;
