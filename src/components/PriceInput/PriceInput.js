import { Button, Divider, Row } from "antd";
import "./PriceInput.css";

import img from "../../assets/img/Sweatshirts.png";
import cart from "../../assets/img/cart.png";
const PriceInput = ({ price, quantity, setQuantity }) => {
  return (
    <Row justify="space-between" align="middle" className="addedQuantity">
      <p className="miniPrice">{price} <span>₴</span></p>
      <Row>
        <div className="quantityMiniInner">
          <button
            disabled={quantity === 1 && "disabled"}
            className="miniButton"
            onClick={() => setQuantity(Number(quantity) - 1)}
          >
            <span className="operatorMinus">—</span>
          </button>
          <Divider
            type="vertical"
            style={{ height: "50%", marginTop: "12px" }}
          />
          <input
            className="miniInput"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Divider
            type="vertical"
            style={{ height: "50%", marginTop: "12px" }}
          />
          <button
            className="miniButton"
            onClick={() => setQuantity(Number(quantity) + 1)}
          >
            <span className="operatorPlus">+</span>
          </button>
        </div>

        <Button
          type="primary"
          style={{
            background: "#005BE4",
            borderColor: "#005BE4",
            borderRadius: "2px",
            height: "44px",
          }}
        >
          <img className="imgCart" src={cart} alt="Cart" />
        </Button>
      </Row>
    </Row>
  );
};

export default PriceInput;
