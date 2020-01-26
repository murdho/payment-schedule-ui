import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CalculatorInput from "./CalculatorInput";
import PaymentSchedule from "./PaymentSchedule";
import paymentScheduleAPI from "./payment-schedule-api";

const Calculator = () => {
  const [rows, setRows] = useState([]);

  const calculate = ({ productID, amount, period, paymentDay }) => {
    paymentScheduleAPI
      .calculate({ productID, amount, period, paymentDay })
      .then(({ rows }) => {
        setRows(rows);
      }, console.error);
  };

  return (
    <Row>
      <Col xs="3">
        <CalculatorInput calculate={calculate} />
      </Col>

      <Col xs="9">
        <PaymentSchedule rows={rows} />
      </Col>
    </Row>
  );
};

export default Calculator;
