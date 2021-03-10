import { Avatar, Button } from "antd";
import avatar from "../assets/img/avatar.png";
import { CaretDownOutlined } from "@ant-design/icons";
import Dollar from "../assets/icons/blueDollar.svg"
import PopoverCurrency from "./Popover/Popover";

const CurrenciesAvatar = ({ price }) => {

    const popoverButton = (
        <Button type="text">
            <span className="topLineFinance">{price} $</span>
            <img src={Dollar} alt="BlueDollar"/>
        </Button>
    )
  return (
    <>
      <PopoverCurrency price={price} popoverBut={popoverButton} />
      <Avatar
        key="2"
        style={{ borderColor: "red", marginRight: "0" }}
        src={avatar}
      />
      <CaretDownOutlined style={{ color: "#758294" }} />
    </>
  );
};

export default CurrenciesAvatar;
