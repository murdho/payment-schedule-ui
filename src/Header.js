import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const title = "Welcome!";
const lead = "Let's generate some payment schedules!";
const titleStyle = { paddingBottom: "2rem" };

const Header = () => (
  <Row id="title" style={titleStyle}>
    <Col xs="12">
      <h1 className="display-4">
        {title}
        <span role="img" aria-label="boat">
          ⛵️
        </span>
      </h1>
      <p className="lead">{lead}</p>
    </Col>
  </Row>
);

export default Header;
