import { Button, Drawer, PageHeader } from "antd";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import SiteMenu from "./Menu/Menu";

const MiniTopLine = () => {
  const [visible, setVisible] = useState(false);
  const menuOutline = (
    <Button
        // style={{color: "#6A7588", backgroundColor:"#EAEDF5", borderColor:"#EAEDF5"}}
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
        <SiteMenu setVisible={setVisible} />
      </Drawer>
    </>
  );
};
export default MiniTopLine;
