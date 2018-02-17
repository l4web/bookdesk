import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const HomePage = () => (
  <Container
    fluid
    style={{
      height: "100vh",
      color: "white",
      background: "linear-gradient(25deg, #090f76, #38ffe5)"
    }}
  >
    <Row
      className="align-items-center justify-content-center text-center"
      style={{ height: "100%" }}
    >
      <Col xs={12} sm={6}>
          <svg style={{fill:"white"}} viewBox="0 0 59.02 50.63">
              <polygon points="15.18 11.67 28.66 11.68 21.92 0 15.18 11.67"></polygon>
              <polygon points="28.66 12.66 15.18 12.66 21.92 24.33 28.66 12.66"></polygon>
              <polygon points="21.07 25.81 7.59 25.81 14.33 37.48 21.07 25.81"></polygon>
              <polygon points="36.25 25.81 22.77 25.81 29.51 37.48 36.25 25.81"></polygon>
              <polygon points="59.02 12.66 45.54 12.66 52.28 24.33 59.02 12.66"></polygon>
              <polygon points="51.43 25.81 37.95 25.81 44.69 37.48 51.43 25.81"></polygon>
              <polygon points="37.96 24.82 51.44 24.82 44.7 13.15 37.96 24.82"></polygon>
              <polygon points="22.77 24.82 36.25 24.82 29.51 13.15 22.77 24.82"></polygon>
              <polygon points="7.59 24.82 21.07 24.82 14.33 13.15 7.59 24.82"></polygon>
              <polygon points="6.74 26.3 0 37.98 13.48 37.98 6.74 26.3"></polygon>
              <polygon points="30.36 37.98 43.84 37.98 37.1 26.3 30.36 37.98"></polygon>
              <polygon points="43.84 38.96 30.37 38.96 37.1 50.63 43.84 38.96"></polygon>
          </svg>
      </Col>
      <Col
        xs={12}
        sm={6}
        style={{
          fontFamily: "'Open Sans', sans-serif"
        }}
      >
        <h3
          style={{
            boxShadow:
              "6px 0 0 rgba(20,12,10, .3), -6px 0 0 rgba(20,12,10, .3)",
            background: "rgba(20,12,10, .3)",
            lineHeight: "3rem"
          }}
        >
          Reserve your desk
        </h3>
        <br />
        <div className="text-center">
          <Link
            to="/login"
            className="nurtureButton"

          >
            JOIN THE PARTY!
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
);

export default HomePage;
