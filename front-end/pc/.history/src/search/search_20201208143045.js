import "./search.css";
import { Row } from "antd";
import { withRouter } from "react-router-dom";
import Logo from './static/logo.png'


const Search = () => {
  return (
  <div className="background">
      <img src={Logo} alt='' className='logo' />
  </div>
  )
};

export default withRouter(Search);
