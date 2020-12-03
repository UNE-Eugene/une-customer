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
import icon3_3 from "./static/icon3-3.png";

const {Text} = Typography;
const { Header, Sider, Content } = Layout;

const Center = () => {
  return (
    <Layout className="main">
      <Header className="header">
        <img src={Logo} alt="" />
      </Header>
      <Layout className="body">
        <Sider className="side" width="4vw">
          <Menu mode="inline" className="menu" theme="dark" onClick={()=>{}}>
            <Menu.Item
              key="1"
              style={{ position: 'absolute',height: "6vw", width: "4vw", paddingLeft: 0, top: '2vw', minWidth: "4vw" }}
            >
                <img id='icon1' style={{position: "absolute",  height: "2vw", width: "2vw", top: '1vw', left: '1vw', minWidth: "2vw"}} src={icon1} alt="" />
                <Text id='text1_1' style={{position: "absolute",  height: "1vw", width: "2vw", top: '3vw', left: '1vw', minWidth: "2vw", fontFamily: 'Georgia, serif', fontWeight: '800', fontSize: '0.75vw', textAlign: 'center', color: 'gray'}}>查 询</Text>
                <Text id='text1_2' style={{position: "absolute",  height: "1vw", width: "2vw", top: '4vw', left: '1vw', minWidth: "2vw", fontFamily: 'Georgia, serif', fontWeight: '800', fontSize: '0.75vw', textAlign: 'center', color: 'gray'}}>系 统</Text>
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{ position: 'absolute', height: "6vw", width: "4vw", paddingLeft: 0, top: '11vw',  minWidth: "4vw" }}
            >
                <img id='icon2' style={{position: "absolute",  height: "2vw", width: "2vw", top: '1vw', left: '1vw', minWidth: "2vw"}} src={icon2} alt="" />
                <Text id='text2_1' style={{position: "absolute",  height: "1vw", width: "2vw", top: '3vw', left: '1vw', minWidth: "2vw", fontFamily: 'Georgia, serif', fontWeight: '800', fontSize: '0.75vw', textAlign: 'center', color: 'gray'}}>个 人</Text>
                <Text id='text2_2' style={{position: "absolute",  height: "1vw", width: "2vw", top: '4vw', left: '1vw', minWidth: "2vw", fontFamily: 'Georgia, serif', fontWeight: '800', fontSize: '0.75vw', textAlign: 'center', color: 'gray'}}>中 心</Text>
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{ position: 'absolute', height: "6vw", width: "4vw", paddingLeft: 0, top: '20vw', minWidth: "4vw" }}
              onClick={()=>{document.getElementById('icon3').src=icon3_3;
                            document.getElementById('text3_1').style.color='white';
                            document.getElementById('text3_2').style.color='white';}}
            >
                <img id='icon3' style={{position: "absolute",  height: "2vw", width: "2vw", top: '1vw', left: '1vw', minWidth: "2vw"}} src={icon3} alt="" />
                <Text id='text3_1' style={{position: "absolute",  height: "1vw", width: "2vw", top: '3vw', left: '1vw', minWidth: "2vw", fontFamily: 'Georgia, serif', fontWeight: '800', fontSize: '0.75vw', textAlign: 'center', color: 'gray'}}>日 志</Text>
                <Text id='text3_2' style={{position: "absolute",  height: "1vw", width: "2vw", top: '4vw', left: '1vw', minWidth: "2vw", fontFamily: 'Georgia, serif', fontWeight: '800', fontSize: '0.75vw', textAlign: 'center', color: 'gray'}}>查 询</Text>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className='content'>Content</Content>
      </Layout>
    </Layout>
  );
};

export default Center;
