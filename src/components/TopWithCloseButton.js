import { Row, Col } from "antd";
import Logo from "./Logo/Logo";
import CloseButton from "./CloseButton/CloseButton";
import MiniCurrenciesAvatar from "./MiniCurrenciesAvatar/MiniCurrenciesAvatar";

const TopWithCloseButton = ({ setVisible, price }) => {
  console.log(price)
  return (
    <>
      <Row justify="space-between">
        <Col xs={16} sm={19} md={19}>
          <Logo />
        </Col>
        <Col xs={7} sm={4} lg={0} align="middle">
          <CloseButton setVisible={setVisible} />
        </Col>
      </Row>
      <Row>
        <Col xs={24} lg={0}>
          <MiniCurrenciesAvatar price={price} />
        </Col>
      </Row>
    </>
  );
};

export default TopWithCloseButton;
