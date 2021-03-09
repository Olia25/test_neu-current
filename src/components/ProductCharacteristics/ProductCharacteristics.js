import { Col, Row } from "antd";
import product from "../../product.json";
import "./ProductCharacteristics.css";

const ProductCharacteristics = () => {
  return (
    <div className="productCharacteristics">
      <p>Характеристики товару</p>
      <Row gutter={24} className="line">
        <Col span={11}>Категорії</Col>
        <Col span={10}>
          <span>{product.category}</span>
        </Col>
      </Row>

      <Row gutter={24} className="line">
        <Col span={11}>Матеріали</Col>
        <Col span={10}>
          <span>{product.materials}</span>
        </Col>
      </Row>

      <Row gutter={24} className="line">
        <Col span={11}>Бренд</Col>
        <Col span={10}>
          <span>{product.brands}</span>
        </Col>
      </Row>
      <Row gutter={24} className="line">
        <Col span={11}>Область применения</Col>
        <Col span={10}>
          <span>{product.appAreas}</span>
        </Col>
      </Row>
      <Row gutter={24} className="line">
        <Col span={11}>Обьем (м3)</Col>
        <Col span={10}>
          <span>{product.volume}</span>
        </Col>
      </Row>
      <Row gutter={24} className="line">
        <Col span={11}>Вага</Col>
        <Col span={10}>
          <span>{product.weight}</span>
        </Col>
      </Row>
      <Row gutter={24} className="line">
        <Col span={11}>Час доставки (днів)</Col>
        <Col span={10}>
          <span>{product.deliveryTime}</span>
        </Col>
      </Row>
      <Row gutter={24} className="line">
        <Col span={11}>Сезон</Col>
        <Col span={10}>
          <span>{product.season}</span>
        </Col>
      </Row>
      <Row gutter={24} className="line">
        <Col span={11}>Артикул</Col>
        <Col span={10}>
          <span>{product.vendorCode}</span>
        </Col>
      </Row>
      <Row gutter={24} className="line">
        <Col span={11}>Номер товару</Col>
        <Col span={10}>
          <span>{product.barCode}</span>
        </Col>
      </Row>
    </div>
  );
};
export default ProductCharacteristics;
