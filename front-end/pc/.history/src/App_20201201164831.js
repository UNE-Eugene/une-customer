import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;


function App() {
  return (
    <Layout style={{background: '../public/bg.png'}}>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
