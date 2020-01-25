import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import api from "./api/api";

const titleStyle = {
  paddingBottom: "2rem"
};

const tableStyle = {
  textAlign: "center",
  cursor: "pointer",
  tableLayout: "fixed",
  wordWrap: "break-word"
};

const App = () => {
  const productSettings = {
    terms: [3, 6, 9, 12, 18, 24, 36, 48, 60]
  };

  const [loanAmount, setLoanAmount] = useState(123.45);
  const [periodMonths, setPeriodMonths] = useState(productSettings.terms[0]);
  const [rows, setRows] = useState([]);
  const [calculating, setCalculating] = useState(false);

  useEffect(() => {
    setCalculating(true);

    api.calculate({ loanAmount, periodMonths }).then(({ rows }) => {
      setRows(rows);
      setCalculating(false);
    }, console.error);
  }, [loanAmount, periodMonths, setRows, setCalculating]);

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
                disabled={calculating}
              >
                {productSettings.terms.map(term => (
                  <option key={term} value={term}>
                    {term} months
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <input
              type="range"
              min="0"
              max="5000"
              step="50"
              style={{ width: "100%" }}
              onChange={e => setLoanAmount(parseFloat(e.target.value))}
              value={loanAmount}
              disabled={calculating}
            />
          </Form>
          <div style={{ textAlign: "center" }}>
            {calculating ? <Spinner animation="border" /> : null}
          </div>
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
              {rows.map(row => {
                return (
                  <tr key={row.n}>
                    <td>
                      <b>{row.n}</b>
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
