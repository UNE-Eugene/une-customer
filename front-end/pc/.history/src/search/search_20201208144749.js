import "./search.css";
import { Input } from "antd";
import { withRouter } from "react-router-dom";
import Logo from './static/logo.png'


const Search = () => {
  return (
  <div className="background">
      <img src={Logo} alt='' className='logo' />
      <Input />
  </div>
  )
};

export default withRouter(Search);
