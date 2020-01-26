import React from "react";
import { Router, Link } from "@reach/router";
import Container from "react-bootstrap/Container";
import Calculator from "./Calculator";
import Header from "./Header";
import ErrorBoundary from "./ErrorBoundary";
import Products from "./Products";

const App = () => {
  return (
    <Container fluid>
      <Link to="/" className="btn btn-primary">Home</Link>
      <Link to="/products" className="btn btn-primary">Products</Link>
      <Header />
      <ErrorBoundary>
        <Router>
          <Calculator path="/" />
          <Products path="/products" />
        </Router>
      </ErrorBoundary>
    </Container>
  );
};

export default App;
