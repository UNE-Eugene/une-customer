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
import icon2 from "./static/icon2.png";
import icon3 from "./static/icon3.png";
const { Header, Sider, Content } = Layout;

const Center = () => {
  return (
    <Layout className="main">
      <Header className="header">
        <img src={Logo} alt="" />
      </Header>
      <Layout className="body">
        <Sider className="side" width="4vw">
          <Menu mode="inline" className="menu" theme="dark">
            <Menu.Item
              key="1"
              style={{ position: 'absolute',height: "4vw", width: "4vw", paddingLeft: 0, top: 0, textAlign: "center" }}
            >
                <img style={{display: 'inline-block'}} src={icon1} alt="" />
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{ position: 'absolute', height: "4vw", width: "4vw", paddingLeft: 0, top: '7vw', textAlign: "center" }}
            >
                <img style={{display: 'inline-block'}} src={icon2} alt="" />
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{ position: 'absolute', height: "4vw", width: "4vw", paddingLeft: 0, top: '13vw' }}
            >
                <img style={{display: 'inline-block'}} src={icon3} alt="" />
            </Menu.Item>
          </Menu>
        </Sider>
        {/* <Content className='content'>Content</Content> */}
      </Layout>
    </Layout>
  );
};

export default Center;
