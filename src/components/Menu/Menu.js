import { Menu } from "antd";
import {
  UserOutlined,
  ShoppingOutlined,
  AppstoreOutlined,
  DollarOutlined,
  CodeSandboxOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./Menu.css";
import Dollar from "../../assets/icons/Vector.svg";
import TopWithCloseButton from "../TopWithCloseButton";

const SiteMenu = ({ setVisible, price }) => {
  return (
    <>
      <Menu
        mode="inline"
        style={{
          minHeight: "100vh",
          height: "100%",
          backgroundColor: "#212122",
          color: "#FFFFFF",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        <TopWithCloseButton setVisible={setVisible} price={price} />

        <Menu.Item key="1" icon={<AppstoreOutlined />}>
          Каталог
        </Menu.Item>
        <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
          Заказы
        </Menu.Item>
        <Menu.Item key="3" icon={<ShoppingOutlined />}>
          Заказы пользователей
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          Пользователи
        </Menu.Item>
        <Menu.Item key="5" icon={<CodeSandboxOutlined />}>
          Поставщики
        </Menu.Item>
        <Menu.Item key="6">
          <img src={Dollar} alt={Dollar} />
          Финансы
        </Menu.Item>
      </Menu>
    </>
  );
};
export default SiteMenu;
