import "./App.css";
import { Row, Col, Card } from "antd";
import "antd/dist/antd.css";
import LogoUrl from './static/logo.png'


function App() {
  return (
    <div className="test">
      <div className="header">&nbsp;</div>
      <Row gutter={[16, { xs: 12, sm: 20, md: 28, lg: 36 }]}>
        <Col span="8">&nbsp;</Col>
        <Col span="8" style={{ alignItems: "center" }}>
          <img src={LogoUrl} />
        </Col>
        <Col span="8">&nbsp;</Col>
        <Col span="8">&nbsp;</Col>
        <Col span="8" style={{ alignItems: "center" }}>
          <Card
            className="inline-center"
            title="Default size card"
            extra={<a href="#">More</a>}
            style={{ width: 300, alignSelf: "center" }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span="8">&nbsp;</Col>
      </Row>
    </div>
  );
}

export default App;
