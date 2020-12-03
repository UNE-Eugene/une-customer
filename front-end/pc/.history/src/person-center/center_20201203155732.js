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
import Logo from './static/logo.png'


const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

const Center = () => {
  return (
    <Layout className='main'>
      <Header className='header'>
          <img src={Logo} alt=''/>
      </Header>
      <Layout className='body'>
        <Sider className='sider' style={{width: '100%'}}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            className='menu'
          >
            <SubMenu key="sub1"  title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2"  title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content className='content'>Content</Content>
      </Layout>
    </Layout>
  );
};

export default Center;
