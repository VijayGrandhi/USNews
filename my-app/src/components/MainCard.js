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
        <Col style={{ padding:5 }}>
          <Card style={{ width: "auto", height: "20rem", backgroundImage: `url("https://iea.imgix.net/817ded0e-7bb6-4b79-b425-65e6f7b705f1/shutterstock_1484419673.jpg?auto=compress%2Cformat&fit=min&q=80&rect=0%2C517%2C3840%2C1643")`, backgroundSize:"100rem", backgroundRepeat: "no-repeat"}}>
            <Card.Body>
              <Card.Title style={{ color: "white" }}>{title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {subtitle}
              </Card.Subtitle>
              <Card.Text style={{ color: "white" }}>
              Get your everyday news on the revamped USNEWS
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
    
  );
};

export default MainCard;
