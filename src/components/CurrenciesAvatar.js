import { Avatar, Button, Col, Popover, Row } from "antd";
import ExchangeRates from "./ExchangeRates";
import avatar from "../assets/img/avatar.png";
import { CaretDownOutlined } from "@ant-design/icons";

const CurrenciesAvatar = ({ price }) => {
  return (
    <>
      <Popover
        content={<ExchangeRates />}
        title={(
            <Row justify="space-between">
                <Col className="myFinances">Мої фінанси</Col>
                <Col className="myFinancesNum">
                    <span>$</span> {price}
                </Col>
            </Row>
        )}
        trigger="click"
      >
        <Button type="text">
          <span className="topLineFinance">{price} $</span>{" "}
        </Button>
      </Popover>

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
