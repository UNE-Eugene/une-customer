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
        <Sider className='side' width='5%'>
          <Menu
            mode="inline"
            className='menu'
          >
            <Menu.Item key='1' className='menuitem'>
                
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className='content'>Content</Content>
      </Layout>
    </Layout>
  );
};

export default Center;
