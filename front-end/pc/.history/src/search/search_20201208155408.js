import "./search.css";
import { Button, Input, Card } from "antd";
import { withRouter } from "react-router-dom";
import Logo from './static/logo.png'


const Search = () => {
  return (
  <div className="background">
      <img src={Logo} alt='' className='logo' />

      {/* 快捷搜索/代码搜索 */}
      <Input className='input'/>
      <Button className='button'>搜索</Button>
    

      <Card className='card'ordered></Card>
  </div>
  )
};

export default withRouter(Search);
