import "./App.css";
import { Layout } from "antd";
import 'antd/dist/antd.css';
const { Header, Footer, Content } = Layout;

function App() {
  return (

      <Layout className="layout">
        <Header className="header">Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>

  );
}

export default App;
