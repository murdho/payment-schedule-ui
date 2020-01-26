import React from "react";
import Container from "react-bootstrap/Container";
import Calculator from "./Calculator";
import Header from "./Header";

const App = () => {
  return (
    <Container fluid>
      <Header />
      <Calculator />
    </Container>
  );
};

export default App;
