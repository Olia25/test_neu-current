import { Col, Row } from "antd";
import React, { useState } from "react";
import product from "../product.json";

import TopLine from "../components/TopLine";
import SiteMenu from "../components/Menu/Menu";
import MiniTopLine from "../components/MiniTopLine";

import Layout from "../components/Layout";

const SelectedProduct = () => {
  const [quantity] = useState(1);
  const changePrice = product.price * quantity;

  return (
    <>
      <Row>
        <Col xs={0} lg={3}>
          <SiteMenu price={changePrice} />
        </Col>
        <Col xs={0} lg={21}>
          <TopLine price={changePrice}/>
          <Layout />
        </Col>
        <Col xs={24} lg={0}>
          <MiniTopLine price={changePrice} />
          <Layout />
        </Col>
      </Row>
    </>
  );
};

export default SelectedProduct;
