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
  InputNumber,
} from "antd";
import Logo from "./static/logo.png";
import moment from "moment";
import { withRouter } from "react-router-dom";
import hotelJPG from "./static/广州东圃合景福朋喜来登酒店_2.jpg";
import { EnvironmentFilled } from "@ant-design/icons";
const { RangePicker } = DatePicker;
const { Text } = Typography;
const { Header } = Layout;
const dateFormat = "YYYY/MM/DD";
const { Paragraph } = Typography;

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

const TitleRender = (props) => {
  return (
    <Row style={{ height: "200px", width: "100%" }}>
      <Col span={6} style={{ display: "flex" }}>
        <img
          src={hotelJPG}
          alt=""
          style={{
            height: "200px",
            width: "65%",
            alignSelf: "center",
            alignItems: "center",
            margin: "auto",
          }}
        />
      </Col>
      <Col span={18}>
        <Row gutter={[16, 10]}>
          <Col span={24} style={{ display: "flex" }}>
            <Text
              style={{
                fontSize: "20px",
                fontWeight: "700",
                alignSelf: "center",
                display: "flex",
              }}
            >
              广州东圃合景福朋喜来登酒店&nbsp;
              {
                <Tag color="gold" style={{ alignSelf: "center" }}>
                  SSS
                </Tag>
              }
            </Text>
          </Col>
          <Col span={24} style={{ display: "flex" }}>
            <Paragraph style={{ alignSelf: "center" }}>
              备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注
            </Paragraph>
          </Col>
          <Col span={24} style={{ display: "flex" }}>
            <Paragraph style={{ alignSelf: "center" }}>
              备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注
            </Paragraph>
          </Col>
          <Col span={12} style={{ display: "flex" }}>
            <Tag
              style={{ alignSelf: "center", height: "25px", fontSize: "13px" }}
            >
              地铁周边
            </Tag>
          </Col>
          <Col span={12} style={{ display: "flex" }}>
            <Tag
              style={{ alignSelf: "center", height: "25px", fontSize: "13px" }}
            >
              亲子套房
            </Tag>
          </Col>
          <Col span={24} style={{ display: "flex" }}>
            <Text style={{ alignSelf: "center", height: "30px" }}>
              {<EnvironmentFilled />} 广州市东圃汇彩路菁映路1号
            </Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const Result = () => {
  const [dateChecked, setDateChecked] = useState("");
  const [pageDate, setDatePage] = useState([
    moment(moment(), dateFormat),
    moment(moment().add(1, "days"), dateFormat),
  ])
  return (
    <Layout style={{ position: "relative", height: "100%", width: "100%" }}>
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
      <section className="result-content">
        <Input.Group compact={true} className="InputGroup">
          <AutoComplete
            style={{ width: "10%", height: "100%" }}
            children={
              <Input
                style={{ height: "50px", fontSize: "16px" }}
                placeholder="城市"
              />
            }
          />
          <AutoComplete
            style={{ width: "25%", height: "100%" }}
            children={
              <Input
                style={{ height: "50px", fontSize: "16px" }}
                placeholder="酒店"
              />
            }
          />
          <AutoComplete
            style={{ width: "15%", height: "100%" }}
            children={
              <Input
                style={{ height: "50px", fontSize: "16px" }}
                placeholder="商圈"
              />
            }
          />
          <AutoComplete
            style={{ width: "10%", height: "100%" }}
            children={
              <Input
                style={{ height: "50px", fontSize: "16px" }}
                placeholder="集团"
              />
            }
          />
          <RangePicker
            key="1"
            style={{
              alignSelf: "center",
              height: "50px",
              width: "30%",
              textAlign: "center",
            }}
            disabledDate={disabledDate}
            defaultValue={[
              moment(moment(), dateFormat),
              moment(moment().add(1, "days"), dateFormat),
            ]}
            className="result-rangePicker"
            inputReadOnly
            format={dateFormat}
            onCalendarChange={(dates, dateString, info) => {
              switch (dateString[1]) {
                case dateString[0]:
                  setDateChecked(
                    `${dateString[0]} 入住 ${dates[1]
                      .add(1, "days")
                      .format(dateFormat)} 离开`
                  );
                  break;
                case "":
                  setDateChecked(
                    `${dateString[0]} 入住 ${dates[0]
                      .add(1, "days")
                      .format(dateFormat)} 离开`
                  );
                  break;
                default:
                  setDateChecked(`${dateString[0]} 入住 ${dateString[1]} 离开`);
                  break;
              }
            }}
          />
          <Button style={{ height: "50px", width: "10%" }}>123</Button>
        </Input.Group>
        <Card className="result-card" hoverable title={<TitleRender />}>
          <div style={{display: 'flex'}}>
            <Text style={{alignSelf: 'center', fontSize: '20px', fontWeight: '700'}}>房价详情</Text>
            <RangePicker 
            style={{alignSelf: 'center', marginLeft: 'auto'}} 
            disabledDate={disabledDate}
            defaultValue={[
              moment(moment(), dateFormat),
              moment(moment().add(1, "days"), dateFormat),
            ]}
            className="result-rangePicker"
            inputReadOnly
            format={dateFormat}
            onCalendarChange={(dates, dateString, info) => {
              switch (dateString[1]) {
                case dateString[0]:
                  setDateChecked(
                    `${dateString[0]} 入住 ${dates[1]
                      .add(1, "days")
                      .format(dateFormat)} 离开`
                  );
                  break;
                case "":
                  setDateChecked(
                    `${dateString[0]} 入住 ${dates[0]
                      .add(1, "days")
                      .format(dateFormat)} 离开`
                  );
                  break;
                default:
                  setDateChecked(`${dateString[0]} 入住 ${dateString[1]} 离开`);
                  break;
              }
            }}/>
          </div>
        </Card>
      </section>
    </Layout>
  );
};

export default withRouter(Result);
