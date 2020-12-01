import "./App.css";
import { Row, Col, Card } from "antd";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="test">
      <Row>
        <Col span="24">
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
      </Row>
    </div>
  );
}

export default App;
