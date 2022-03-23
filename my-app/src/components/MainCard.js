import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SmallerCards from "./SmallerCards";

const MainCard = ( {title, subtitle} ) => {
  return (
    <>
    <Container>
      <Row>
        <Col className="block-example border border-primary" style={{ padding:5 }}>
          <Card style={{ width: "auto", height: "20rem" }}>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {subtitle}
              </Card.Subtitle>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
    
  );
};

export default MainCard;
