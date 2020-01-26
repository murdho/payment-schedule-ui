import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CalculatorInput from "./CalculatorInput";
import PaymentSchedule from "./PaymentSchedule";
import paymentScheduleAPI from "./payment-schedule-api";
import Alert from "react-bootstrap/Alert";

const Calculator = () => {
  const [rows, setRows] = useState([]);
  const [apiError, setAPIError] = useState(null);

  const calculate = ({ productID, amount, period, paymentDay }) => {
    paymentScheduleAPI
      .calculate({ productID, amount, period, paymentDay })
      .then(({ rows }) => {
        setRows(rows);
      })
      .catch(reason => {
        setAPIError(reason);
      });
  };

  return (
    <Row>
      <Col xs="3">
        <CalculatorInput calculate={calculate} />
      </Col>

      <Col xs="9">
        {apiError ? renderErrorAlert() : null}
        <PaymentSchedule rows={rows} />
      </Col>
    </Row>
  );
};

const renderErrorAlert = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading>
        Sorry, something went wrong with the calculation.{" "}
      </Alert.Heading>
      <p>Please try again with different input.</p>
    </Alert>
  );
};

export default Calculator;
