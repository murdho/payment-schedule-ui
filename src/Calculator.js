import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CalculatorInput from "./CalculatorInput";
import PaymentSchedule from "./PaymentSchedule";
import { paymentScheduleAPI } from "./payment-schedule-api";
import Alert from "react-bootstrap/Alert";

const Calculator = () => {
  const [rows, setRows] = useState([]);
  const [calculationError, setCalculationError] = useState(null);
  const [loading, setLoading] = useState(true);

  const calculate = ({ productID, amount, period, paymentDay }) => {
    setLoading(true);
    paymentScheduleAPI
      .calculate({ productID, amount, period, paymentDay })
      .then(({ rows }) => {
        setLoading(false);
        setRows(rows);
      })
      .catch(reason => {
        setLoading(false);
        setCalculationError(reason);
      });
  };

  useEffect(() => {
    // TODO: report the error to tracker.
    // eslint-disable-next-line no-console
    if (calculationError) console.error(calculationError);
  }, [calculationError]);

  return (
    <Row>
      <Col xs="3">
        <CalculatorInput calculate={calculate} />
      </Col>

      <Col xs="9">
        {calculationError ? renderErrorAlert() : null}
        <PaymentSchedule rows={rows} loading={loading} />
      </Col>
    </Row>
  );
};

const renderErrorAlert = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading>
        Sorry, something went wrong with the calculation.
      </Alert.Heading>
      <p>Please try again with different input.</p>
    </Alert>
  );
};

export default Calculator;
