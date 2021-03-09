import { Avatar, Button, Col, Popover, Row } from "antd";
import ExchangeRates from "../ExchangeRates";
import avatar from "../../assets/img/avatar.png";
import { DollarOutlined } from "@ant-design/icons";
import "./MiniCurrenciesAvatar.css";

const MiniCurrenciesAvatar = ({ price }) => {
  const title = (
    <Row justify="space-between">
      <Col className="myFinances">Мої фінанси</Col>
      <Col className="myFinancesNum">
        <span>$</span> {price}
      </Col>
    </Row>
  );
  return (
    <>
      <Col className="user" span={12}>
        <div>
          <Avatar
            key="1"
            style={{ borderColor: "red", marginRight: "0" }}
            src={avatar}
          />
        </div>
        <div>Ольга Пліщук</div>
      </Col>
      <Col span={12}>
        <Popover
          key="3"
          content={<ExchangeRates />}
          title={title}
          trigger="click"
        >
          <Button key="2" type="text">
            <div className="finance">
              {price} <DollarOutlined style={{ color: "#727478" }} />
            </div>
          </Button>
        </Popover>
      </Col>
    </>
  );
};

export default MiniCurrenciesAvatar;
