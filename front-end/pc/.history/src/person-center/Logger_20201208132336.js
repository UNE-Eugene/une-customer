import "./Center.css";
import {
  Row,
  Col,
  Typography,
  Card,
} from "antd";
import "antd/dist/antd.css";
import { withRouter } from "react-router-dom";
import QueueAnim from "rc-queue-anim";

const { Title } = Typography;


const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const Logger = (props) => {
  return (

    <Row gutter={[16, 50]} className="logger">
      <Col span={8} className='logger-col'>
        <QueueAnim type={["bottom", 'left']} delay={0}>
            <Card className="logger-card" hoverable={true} key="1" title={<Title>登录日志</Title>}>
              <img src="https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg" alt='' style={{height: '90%', width: '90%'}}></img>
            </Card>
        </QueueAnim>
      </Col>
      <Col span={8}>
        <QueueAnim type={["bottom", 'left']} delay={100} >
          <Card className="logger-card" hoverable={true} key="2" title={<Title>询价日志</Title>}>
          <img src="https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg" alt='' style={{height: '90%', width: '90%'}}></img>
          </Card>
        </QueueAnim>
      </Col>
      <Col span={8}>
        <QueueAnim type={["bottom", 'left']} delay={200}>
          <Card className="logger-card" hoverable={true} key="3" title={<Title>查询日志</Title>}>
          <img src="https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg" alt='' style={{height: '90%', width: '90%'}}></img>
          </Card>
        </QueueAnim>
      </Col>
      <Col span={6}>
        <QueueAnim type={["bottom", 'left']} delay={300}>
          <Card className="logger-card" hoverable={true} key="4" title={<Title>申请日志</Title>}>
          <img src="https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg" alt='' style={{height: '90%', width: '90%'}}></img>
          </Card>
        </QueueAnim>
      </Col>
      <Col span={6}>
        <QueueAnim type={["bottom", 'left']} delay={400}>
          <Card className="logger-card" hoverable={true} key="5" title={<Title>操作日志</Title>}>
          <img src="https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg" alt='' style={{height: '90%', width: '90%'}}></img>
          </Card>
        </QueueAnim>
      </Col>
      <Col span={6}>
        <QueueAnim type={["bottom", 'left']} delay={500}>
          <Card className="logger-card" hoverable={true} key="6" title={<Title>成交日志</Title>}>
          <img src="https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg" alt='' style={{height: '90%', width: '90%'}}></img>
          </Card>
        </QueueAnim>
      </Col>
      <Col span={6}>
        <QueueAnim type={["bottom", 'left']} delay={600}>
          <Card className="logger-card" hoverable={true} key="7" title={<Title>转接日志</Title>}>
          <img src="https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg" alt='' style={{height: '90%', width: '90%'}}></img>
          </Card>
        </QueueAnim>
      </Col>
    </Row>
  );
};

export default withRouter(Logger);
