import React from "react";
import { render, cleanup } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

afterEach(cleanup);

test("ErrorBoundary - without error", () => {
  const { container } = render(
    <ErrorBoundary>
      <h1>hello</h1>
    </ErrorBoundary>
  );

  expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>
      hello
    </h1>
  `);
});
