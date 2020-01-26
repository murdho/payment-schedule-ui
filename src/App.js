import React from "react";
import Container from "react-bootstrap/Container";
import Calculator from "./Calculator";
import Header from "./Header";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <Container fluid>
      <Header />
      <ErrorBoundary>
        <Calculator />
      </ErrorBoundary>
    </Container>
  );
};

export default App;
