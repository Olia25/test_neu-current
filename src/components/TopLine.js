import { PageHeader, Drawer } from "antd";
import {
  LeftOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import CurrenciesAvatar from "./CurrenciesAvatar";

const TopLine = ({ price, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Drawer
        placement="left"
        closable={false}
        visible={visible}
        style={{height:"100vh"}}
      >
        <p>Меню</p>
        <button onClick={() => setVisible(false)}>
          <CloseOutlined />
        </button>
        {children}
      </Drawer>

      <PageHeader
        className="topLine"
        subTitle="Назад"
        onBack={() => console.log()}
        backIcon={<LeftOutlined style={{ color: "#758294", height: "20px" }} />}
        extra={[
        <CurrenciesAvatar key="123" price={price}/>
        ]}
      />
    </>
  );
};

export default TopLine;
