import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "./Header";

afterEach(cleanup);

test("Header", () => {
  const { container } = render(<Header />);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="row"
      id="title"
      style="padding-bottom: 2rem;"
    >
      <div
        class="col-12"
      >
        <h1
          class="display-4"
        >
          Welcome!
          <span
            aria-label="boat"
            role="img"
          >
            ⛵️
          </span>
        </h1>
        <p
          class="lead"
        >
          Let's generate some payment schedules!
        </p>
      </div>
    </div>
  `);
});
