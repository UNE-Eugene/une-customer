import "./search.css";
import { Button, Input } from "antd";
import { withRouter } from "react-router-dom";
import Logo from './static/logo.png'


const Search = () => {
  return (
  <div className="background">
      <img src={Logo} alt='' className='logo' />
      <Input className='input'/>
      <Button className='button'>搜索</Button>
  </div>
  )
};

export default withRouter(Search);
