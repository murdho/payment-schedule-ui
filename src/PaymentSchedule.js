import React from "react";
import Table from "react-bootstrap/Table";
import formatDecimal from "./function/format-decimal";

const PaymentSchedule = ({ rows }) => {
  return (
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
              <td>{row.date}</td>
              <td>{formatDecimal(row.balance)}</td>
              <td>{formatDecimal(row.principal)}</td>
              <td>{formatDecimal(row.interest)}</td>
              <td>{formatDecimal(row.additionalFees)}</td>
              <td>
                <b>{formatDecimal(row.monthlyPayment)}</b>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

const tableStyle = {
  textAlign: "center",
  cursor: "pointer",
  tableLayout: "fixed",
  wordWrap: "break-word"
};

export default PaymentSchedule;
