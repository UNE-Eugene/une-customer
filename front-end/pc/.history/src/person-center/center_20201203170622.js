import { useState } from "react";
import "./Center.css";
import {
  Layout,
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Typography,
  Menu,
} from "antd";
import "antd/dist/antd.css";
import Logo from "./static/logo.png";
import icon1 from "./static/icon1.png";

const { Header, Sider, Content } = Layout;

const Center = () => {
  return (
    <Layout className="main">
      <Header className="header">
        <img src={Logo} alt="" />
      </Header>
      <Layout className="body">
        <Sider className="side" width="5vw">
          <Menu mode="inline" className="menu" theme="dark">
            <Menu.Item
              key="1"
              style={{ position: 'absolute',height: "5vw", width: "5vw", paddingLeft: 0, top: 0 }}
              width="100%"
              icon={<img style={{position: 'absolute', top: 0, left: 0}} src={icon1} alt="" />}
            >
              123
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{ position: 'absolute', height: "5vw", width: "5vw", paddingLeft: 0, top: '6vw' }}
              width="100%"
              icon={<img src={icon1} alt="" />}
            >
              456
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{ position: 'absolute', height: "5vw", width: "5vw", paddingLeft: 0, top: '12vw' }}
              width="100%"
              icon={<img src={icon1} alt="" />}
            >
              789
            </Menu.Item>
          </Menu>
        </Sider>
        {/* <Content className='content'>Content</Content> */}
      </Layout>
    </Layout>
  );
};

export default Center;
