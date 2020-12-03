import { useState } from "react";
import "./Center.css";
import { Layout, Row, Col, Card, Form, Input, Button, Typography, Menu } from "antd";
import "antd/dist/antd.css";

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

const Center = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Center;