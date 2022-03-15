import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

const SmallerCards = ({article}) => {
  return (
    <Container>
      <Row xs={2}>
        <Col
          className="block-example border border-success"
          xl={{ order: 1 }}
        >
          <Card style={{ width: "auto" }}>
            <Card.Header as="h5">{article.author}</Card.Header>
            <Card.Body>
              <Card.Title>{article.source.name}</Card.Title>
              <Card.Text>
                {article.content}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col
          className="block-example border border-success"
          xl={{ order: 2 }}
        >
          <Card style={{ width: "auto" }}>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                <img 
                src = {article.urlToImage}
                width={400}
                height={400} />
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
  );
};

export default SmallerCards;
