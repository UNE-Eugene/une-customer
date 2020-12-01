import "./App.css";
import { Layout, Card } from "antd";
import "antd/dist/antd.css";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="test">
      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}

export default App;
