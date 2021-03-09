import logo from "../../assets/img/logo.png";
import "./Logo.css";

export default () => {
  return (
    <div className="logoName">
      <img src={logo} alt="Logo" className="logo" />
      <span className="flimcor">Flimcor</span>
    </div>
  );
};
