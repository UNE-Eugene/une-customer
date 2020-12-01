import "./App.css";
import { Row, Col, Card } from "antd";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="test">
      <div className='header'>&nbsp;</div>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        
      <Col span='8'>&nbsp;</Col>
        <Col span="8" style={{alignItems: 'center'}}>
          <Card
          className='card'
            title="Default size card"
            extra={<a href="#">More</a>}
            style={{ width: 300,alignItems: "center" }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span='8'>&nbsp;</Col>
        <Col span='8'>&nbsp;</Col>
        <Col span="8" style={{alignItems: 'center'}}>
          <Card
          className='card'
            title="Default size card"
            extra={<a href="#">More</a>}
            style={{ width: 300,alignItems: "center" }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span='8'>&nbsp;</Col>
      </Row>
    </div>
  );
}

export default App;
