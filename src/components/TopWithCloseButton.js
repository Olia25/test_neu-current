import { Row, Col } from "antd";
import Logo from "./Logo/Logo";
import CloseButton from "./CloseButton/CloseButton";

const TopWithCloseButton = ({ setVisible }) => {
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
    </>
  );
};

export default TopWithCloseButton;
