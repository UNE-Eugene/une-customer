import { useState } from "react";
import "./result.css";
import { Layout, Row, Col, Avatar, Button, Input, Card, Select, DatePicker, Tag, Typography, Dropdown } from "antd";
import Logo from './static/logo.png'

const {Text} = Typography;
const {Header} = Layout;

const result = () => {
  return (
    <>
      <Header className="header">
      <img src={Logo} alt="" className="img" />
        <Row className="avatar" gutter={16}>
          <Col xs={12} sm={10} md={10} lg={8} xl={7} xxl={6}>
            <Avatar
              src={<img src={icon1} alt="" />}
              size={{ xs: 30, sm: 30, md: 35, lg: 35, xl: 40, xxl: 50 }}
            />
          </Col>
          <Col xs={12} sm={14} md={14} lg={16} xl={17} xxl={18}>
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <Text className="workerNumber">工号位置</Text>
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <div className="content"></div>
    </>
  );
};

export default result;
