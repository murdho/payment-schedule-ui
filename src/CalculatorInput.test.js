import React from "react";
import { render, cleanup } from "@testing-library/react";
import CalculatorInput from "./CalculatorInput";

afterEach(cleanup);

test("CalculatorInput", () => {
  const { container } = render(<CalculatorInput />);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <form
      class=""
    >
      <div
        class="form-group"
      >
        <label
          class="form-label"
          for="product"
        >
          Product 
          <div
            class="spinner-border spinner-border-sm"
          />
        </label>
        <select
          class="form-control"
          disabled=""
          name="product"
        >
          <option />
        </select>
        <small
          class="text-muted form-text"
        >
          Choose a financing product you fancy.
        </small>
      </div>
      <div
        class="form-group"
      >
        <label
          class="form-label"
          for="amount"
        >
          Amount
        </label>
        <div
          class="input-group"
        >
          <input
            class="form-control"
            name="amount"
            type="number"
            value="0"
          />
          <div
            class="input-group-append"
          >
            <span
              class="input-group-text"
            >
              €
            </span>
          </div>
        </div>
        <small
          class="text-muted form-text"
        >
          Enter an amount between
           
          0
           and
           
          0
          .
        </small>
      </div>
      <div
        class="form-group"
      >
        <label
          class="form-label"
          for="period"
        >
          Period
        </label>
        <select
          class="form-control"
          disabled=""
          name="period"
        >
          <option />
        </select>
      </div>
      <div
        class="form-group"
      >
        <label
          class="form-label"
          for="paymentDay"
        >
          Payment Day
        </label>
        <select
          class="form-control"
          disabled=""
          name="paymentDay"
        >
          <option />
        </select>
      </div>
    </form>
  `);
});
