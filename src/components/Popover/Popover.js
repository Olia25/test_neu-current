import React from "react";
import {Col, Popover, Row} from "antd";
import ExchangeRates from "../ExchangeRates";


const PopoverCurrency = ({price,  popoverBut}) =>{
    return(
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
            placement="bottomLeft"
        >
            {popoverBut}
        </Popover>
    )
}

export default PopoverCurrency;