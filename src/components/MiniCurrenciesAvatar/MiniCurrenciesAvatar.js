import { Avatar, Button, Row } from "antd";
import React from "react";
import avatar from "../../assets/img/avatar.png";
import "./MiniCurrenciesAvatar.css";
import DollarCircle from "../../assets/icons/Vector.svg";
import PopoverCurrency from "../Popover/Popover";

const MiniCurrenciesAvatar = ({ price }) => {
  const popoverButton = (
    <Button type="text">
      <div className="finance">
        <p> {price} $ </p>
        <img src={DollarCircle} alt={DollarCircle} />
      </div>
    </Button>
  );
  return (
    <>
      <Row className="user" justify="space-between">
        <Row>
          <Avatar src={avatar} />
          <p>Ольга Пліщук</p>
        </Row>

        <PopoverCurrency price={price} popoverBut={popoverButton} />
      </Row>
    </>
  );
};

export default MiniCurrenciesAvatar;
