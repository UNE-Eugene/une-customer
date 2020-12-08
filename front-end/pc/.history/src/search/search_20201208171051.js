
import "./search.css";
import { Button, Input, Card, Divider, Typography } from "antd";
import { withRouter } from "react-router-dom";
import Logo from "./static/logo.png";

const { Text } = Typography;

const Search = () => {
    return (
    <div className="background">
      <img src={Logo} alt="" className="logo" />

      {/* 快捷搜索/代码搜索 */}
      <Input className="input" />
      <Button className="button">搜索</Button>
      <Divider type="vertical" className="divider" />
      <Text className="text">请选择搜索条件</Text>
      <Card className="card"></Card>
      <Button className="simple" style={{backgroundColor: 'black', color: 'white'}}>
        123
      </Button>
      <Button className="advance">123</Button>
    </div>
  );
};

export default withRouter(Search);
