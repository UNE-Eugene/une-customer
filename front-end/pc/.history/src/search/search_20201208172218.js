import { useState } from "react";
import "./search.css";
import { Button, Input, Card, Divider, Typography } from "antd";
import { withRouter } from "react-router-dom";
import Logo from "./static/logo.png";

const { Text } = Typography;

const Search = () => {
  const [buttonChecked, setbuttonChecked] = useState(1);
  const checked = { backgroundColor: "black", color: "white" };
  const unChecked = { backgroundColor: "white", color: "black" };
  return (
    <div className="background">
      <img src={Logo} alt="" className="logo" />

      {/* 快捷搜索/代码搜索 */}
      <Input className="input" />
      <Button className="button">搜索</Button>
      <Divider type="vertical" className="divider" />
      <Text className="text">请选择搜索条件</Text>
      <Card className="card"></Card>
      <Button className="simple" style={buttonChecked === 1?checked:unChecked} onClick={()=>{buttonChecked === 1?setbuttonChecked(1):setbuttonChecked(1)}}>
        基础
      </Button>
      <Button className="advance" style={buttonChecked === 2?checked:unChecked} onClick={()=>{buttonChecked === 1?setbuttonChecked(2):setbuttonChecked(1)}}>
        高级
      </Button>
    </div>
  );
};

export default withRouter(Search);
