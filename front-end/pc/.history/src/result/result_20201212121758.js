import { useState } from "react";
import "./result.css";
import { Layout, Row, Col, Button, Input, Card, Select, DatePicker, Tag } from "antd";

const {Header} = Layout;

const result = () => {
  return (
    <>
      <Header className="header"></Header>
      <div className="content"></div>
    </>
  );
};

export default result;
