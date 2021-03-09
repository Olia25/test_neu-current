import { Button, Col, Row } from "antd";
import img from "../assets/img/Sweatshirts.png";
import product from "../product";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  DownOutlined,
  ShoppingCartOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import ProductCharacteristics from "./ProductCharacteristics/ProductCharacteristics";
import flag from "../assets/img/flag.png";
import React, { useState } from "react";
import PriceInput from "./PriceInput/PriceInput";

const Layout = () => {
  const [mode, setMode] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const changePrice = product.price * quantity;
  return (
    <>
      <Row justify="center">
        <Col xs={22} lg={0}>
          <PriceInput
            price={changePrice}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </Col>
      </Row>
      <Row justify="space-around">
        <Col xs={22} xl={7}>
          <img className="img" src={img} alt="Img" />
        </Col>
        <Col xs={22} xl={8}>
          <div className="productMainInform">
            <p className="titleOfProduct">{product.name}</p>
            <p className="informText">5 pc(s)</p>
            <Row className="priceBorder" align="middle">
              <div className="priceBordContainer">
                <p className="informText">
                  Ціна закупки{" "}
                  <InfoCircleOutlined style={{ color: "#BABEC9" }} />
                </p>
                <p className="priceInform">
                 {product.price} <span className="dollar">₴</span>
                </p>
              </div>
              <div className="priceBordContainer">
                <p className="informText">
                  Ціна продажу{" "}
                  <InfoCircleOutlined style={{ color: "#BABEC9" }} />
                </p>
                <p className="priceInform">
                  225.5 <span className="dollar">₴</span>
                </p>
              </div>
              <div className="priceBordContainer">
                <p className="informText">
                  Рентабельність{" "}
                  <InfoCircleOutlined style={{ color: "#BABEC9" }} />
                </p>
                <p className="priceInform greenText">338%</p>
              </div>
            </Row>
            <Col xs={24} className="productDescription">
              {product.description}
            </Col>
          </div>
          <Button
            type="text"
            icon={
              <DownOutlined
                style={{
                  float: "right",
                  marginLeft: "5px",
                  marginTop: "7px",
                  fontSize: "10px",
                }}
              />
            }
            onClick={() => setMode(!mode)}
          >
            Детальніше
          </Button>
          {mode && (
            <Row>
              <Col xs={24} xl={0}>
                <ProductCharacteristics />
              </Col>
            </Row>
          )}
        </Col>

        <Col xs={22} xl={7}>
          <div className="coverForCart">
            <p>Артикул: {product.barCode}</p>
            <p className="cartTitleOfProd">{product.name}</p>
            <p className="cartPrice">
              {product.price} <span className="dollar">₴</span>
            </p>
            <div className="dividerLine">
              <p className="informText">
                Мінімальна кількість замовлення: <span>5 шт</span>{" "}
              </p>
              <p className="informText">
                Час доставки: <span>{product.deliveryTime} днів</span>
              </p>
              <p className="informText">
                Розміщення товару: <span>склад, Україна</span>{" "}
                <img src={flag} />
              </p>
            </div>
            <Row>
              <Col span={8}>
                <p className="colorDescription">Сума</p>
                <p className="sum greenText ">
                  {changePrice} <span>₴</span>
                </p>
              </Col>
              <Col span={16}>
                <p>Количество</p>
                <div>
                  <div className="quantityInner">
                    <input
                      className="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button
                      className="btPlus"
                      onClick={() => setQuantity(Number(quantity) + 1)}
                    >
                      <CaretUpOutlined />
                    </button>
                    <button
                        disabled={quantity === 1 && "disabled"}
                        className="btMinus"
                        onClick={() => setQuantity(Number(quantity) - 1)}
                      >
                      <CaretDownOutlined/>
                    </button>
                  </div>
                  <Button
                    type="primary"
                    className="buttonStyle"
                    style={{
                      background: "#005BE4",
                      borderColor: "#005BE4",
                      borderRadius: "4px",
                      height: "40px",
                    }}
                    icon={<ShoppingCartOutlined />}
                  >
                    Buy
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      {mode && (
        <Row className="prodCharactMargin">
          <Col xs={0} xl={7}>
            <ProductCharacteristics />
          </Col>
        </Row>
      )}
    </>
  );
};

export default Layout;
