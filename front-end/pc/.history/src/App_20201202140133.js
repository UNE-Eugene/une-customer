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
          <img src={LogoUrl} alt='' />
        </Col>
        <Col span="8">&nbsp;</Col>
        <Col span="8">&nbsp;</Col>
        <Col span="8" style={{ alignItems: "center" }}>
          <Card
            // hoverable={true}
            className="inline-center"
            style={{ alignSelf: "center" }}
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
