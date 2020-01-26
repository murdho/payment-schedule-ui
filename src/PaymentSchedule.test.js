import React from "react";
import { render, cleanup } from "@testing-library/react";
import PaymentSchedule from "./PaymentSchedule";

afterEach(cleanup);

test("PaymentSchedule - rows", () => {
  const rows = [
    {
      n: 0,
      date: "26.1.2020",
      balance: 1,
      principal: 2,
      interest: 3,
      additionalFees: 4,
      monthlyPayment: 5
    },
    {
      n: 6,
      date: "29.2.2020",
      balance: 7,
      principal: 8,
      interest: 9,
      additionalFees: 10,
      monthlyPayment: 11
    }
  ];

  const { container } = render(<PaymentSchedule rows={rows} loading={false} />);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <table
      class="table table-striped table-bordered table-hover"
      style="text-align: center; cursor: pointer; table-layout: fixed; word-wrap: break-word;"
    >
      <thead>
        <tr>
          <th>
            #
          </th>
          <th>
            Payment Date
          </th>
          <th>
            Balance
          </th>
          <th>
            Principal
          </th>
          <th>
            Interest
          </th>
          <th>
            Additional Fees
          </th>
          <th>
            Monthly Payment
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b>
              0
            </b>
          </td>
          <td>
            26.1.2020
          </td>
          <td>
            1.00
          </td>
          <td>
            2.00
          </td>
          <td>
            3.00
          </td>
          <td>
            4.00
          </td>
          <td>
            <b>
              5.00
            </b>
          </td>
        </tr>
        <tr>
          <td>
            <b>
              6
            </b>
          </td>
          <td>
            29.2.2020
          </td>
          <td>
            7.00
          </td>
          <td>
            8.00
          </td>
          <td>
            9.00
          </td>
          <td>
            10.00
          </td>
          <td>
            <b>
              11.00
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  `);
});

test("PaymentSchedule - no rows", () => {
  const { container } = render(<PaymentSchedule rows={[]} loading={false} />);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <table
      class="table table-striped table-bordered table-hover"
      style="text-align: center; cursor: pointer; table-layout: fixed; word-wrap: break-word;"
    >
      <thead>
        <tr>
          <th>
            #
          </th>
          <th>
            Payment Date
          </th>
          <th>
            Balance
          </th>
          <th>
            Principal
          </th>
          <th>
            Interest
          </th>
          <th>
            Additional Fees
          </th>
          <th>
            Monthly Payment
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            colspan="7"
          >
            No results
          </td>
        </tr>
      </tbody>
    </table>
  `);
});

test("PaymentSchedule - loading", () => {
  const { container } = render(<PaymentSchedule rows={[]} loading={true} />);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <table
      class="table table-striped table-bordered table-hover"
      style="text-align: center; cursor: pointer; table-layout: fixed; word-wrap: break-word;"
    >
      <thead>
        <tr>
          <th>
            #
          </th>
          <th>
            Payment Date
          </th>
          <th>
            Balance
          </th>
          <th>
            Principal
          </th>
          <th>
            Interest
          </th>
          <th>
            Additional Fees
          </th>
          <th>
            Monthly Payment
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            colspan="7"
          >
            <div
              class="spinner-border"
            />
          </td>
        </tr>
      </tbody>
    </table>
  `);
});
