import {useState} from 'react'
import "./App.css";
import { Row, Col, Card, Form, Input, Button, Typography } from "antd";
import "antd/dist/antd.css";
import LogoUrl from "./static/logo.png";
import UserLogo from "./static/icon1.png"
import PassLogo from "./static/icon2.png"

const {Title} = Typography;

function App() {

  const [formMessage, setformMessage] = useState({
    'username': '',
    'password': ''
  })

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="test">
      <div className="header">&nbsp;</div>
      <Row gutter={[16, { xs: 12, sm: 20, md: 28, lg: 36 }]}>
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
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onValuesChange={(changedValues,allValues)=>{set}}
            >
              <Form.Item>
                <Title strong='true'>登录</Title>
              </Form.Item>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<img src={UserLogo} alt="" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<img src={PassLogo} alt="" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span="8">&nbsp;</Col>
      </Row>
    </div>
  );
}

export default App;
