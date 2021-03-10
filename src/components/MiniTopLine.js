import { Button, Drawer, PageHeader } from "antd";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import SiteMenu from "./Menu/Menu";

const MiniTopLine = ({price}) => {
  const [visible, setVisible] = useState(false);
  const menuOutline = (
    <Button
      type="primary"
      icon={<MenuOutlined />}
      onClick={() => setVisible(true)}
      className="menu"
    />
  );
  return (
    <>
      <PageHeader
        className="topLine"
        subTitle={menuOutline}
        // onBack={() => console.log()}
      />
      <Drawer
        placement="left"
        closable={false}
        visible={visible}
        width={"100%"}
        className="drawer"
      >
        <SiteMenu setVisible={setVisible} price={price} />
      </Drawer>
    </>
  );
};
export default MiniTopLine;
