import React from "react";
import Table from "react-bootstrap/Table";
import { formatDecimal } from "./functions";

const PaymentSchedule = ({ rows }) => {
  return (
    <Table striped bordered hover style={tableStyle}>
      <thead>
        <tr>
          <th>#</th>
          <th>Payment Date</th>
          <th>Balance</th>
          <th>Principal</th>
          <th>Interest</th>
          <th>Additional Fees</th>
          <th>Monthly Payment</th>
        </tr>
      </thead>
      <tbody>
        {rows.length ? (
          renderRows(rows)
        ) : (
          <tr>
            <td colSpan="7">No results</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

const renderRows = rows => {
  return rows.map(row => {
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
  });
};

const tableStyle = {
  textAlign: "center",
  cursor: "pointer",
  tableLayout: "fixed",
  wordWrap: "break-word"
};

export default PaymentSchedule;
