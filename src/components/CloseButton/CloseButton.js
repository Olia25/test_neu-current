import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import "./CloseButton.css";
import { Button } from "antd";

export default ({ setVisible }) => {
  return (
    <div className="menuClose">
      Меню
      <Button
        type="text"
        onClick={() => setVisible(false)}
        className="buttonStyle"
      >
        <CloseOutlined style={{ color: "#fff" }} />
      </Button>
    </div>
  );
};
