import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import doTimes from "./doTimes";

const titleStyle = {
  paddingBottom: "2rem"
};

const tableStyle = {
  textAlign: "center",
  cursor: "pointer"
};

const App = () => {
  const productSettings = {
    terms: [3, 6, 9, 12, 18, 24, 36, 48, 60]
  };

  const [loanAmount, setLoanAmount] = useState(123.45);
  const [periodMonths, setPeriodMonths] = useState(productSettings.terms[0]);

  return (
    <Container fluid>
      <Row id="title" style={titleStyle}>
        <Col xs="12">
          <h1 className="display-4">
            Welcome!{" "}
            <span role="img" aria-label="boat">
              ⛵️
            </span>
          </h1>
          <p className="lead">Let&apos;s generate some payment schedules!</p>
        </Col>
      </Row>

      <Row>
        <Col xs="3">
          <Form>
            <Form.Group>
              <Form.Label htmlFor="loanAmount">Loan amount</Form.Label>
              <Form.Control
                type="number"
                name="loanAmount"
                placeholder="Example: 123,45"
                value={loanAmount}
                onChange={e => setLoanAmount(parseFloat(e.target.value))}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="periodMonths">Period</Form.Label>
              <Form.Control
                as="select"
                name="periodMonths"
                value={periodMonths}
                onChange={e => setPeriodMonths(parseInt(e.target.value))}
                onBlur={e => setPeriodMonths(parseInt(e.target.value))}
              >
                {productSettings.terms.map(term => (
                  <option key={term} value={term}>
                    {term} months
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col xs="9">
          <Table striped bordered hover style={tableStyle}>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Balance</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Additional Fees</th>
                <th>Monthly Payment</th>
              </tr>
            </thead>
            <tbody>
              {doTimes(periodMonths + 1, n => {
                return (
                  <tr key={n}>
                    <td>
                      <b>{n}</b>
                    </td>
                    <td>25.01.2020</td>
                    <td>12345.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>
                      <b>0.00</b>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
