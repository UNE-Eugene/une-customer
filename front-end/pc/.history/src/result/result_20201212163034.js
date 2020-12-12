import { useState } from "react";
import "./result.css";
import {
  Layout,
  Row,
  Col,
  Avatar,
  AutoComplete,
  Form,
  Button,
  Input,
  Card,
  Select,
  DatePicker,
  Tag,
  Typography,
  Dropdown,
  Menu,
} from "antd";
import Logo from "./static/logo.png";
import moment from 'moment'


const { RangePicker } = DatePicker;
const { Text } = Typography;
const { Header } = Layout;
function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().add(-1, "days").endOf("day");
  }
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
  </Menu>
);

const result = () => {
  return (
    <Layout>
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
              <Text className="result-workerNumber">工号位置</Text>
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <div className="content-result">
        <Input.Group compact={true} className="InputGroup">
          <AutoComplete style={{ width: "15%", height: "100%" }}  children={<Input style={{height:"40px"}} placeholder='城市' />}/>
          <AutoComplete style={{ width: "15%", height: "100%" }} children={<Input style={{height:"40px"}} placeholder='酒店' />} />
          <AutoComplete style={{ width: "15%", height: "100%" }} children={<Input style={{height:"40px"}} placeholder='商圈' />} />
          <AutoComplete style={{ width: "15%", height: "100%" }} children={<Input style={{height:"40px"}} placeholder='集团' />} />
          <AutoComplete style={{ width: "15%", height: "100%" }} children={<Input style={{height:"40px"}} placeholder='日期' />} />
          <Button>123</Button>
        </Input.Group>
      </div>
    </Layout>
  );
};

export default result;
