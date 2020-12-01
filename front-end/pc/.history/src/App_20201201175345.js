import "./App.css";
import { Row, Col, Card } from "antd";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="test">
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Col span='8'>&nbsp;</Col>
        <Col span="8">
          <Card
            title="Default size card"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
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
