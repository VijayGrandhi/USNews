import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

const SmallerCards = ({ article }) => {

  return (
    <Container>
      <Row xs={2}>
        <Col
          // className="block-example border border-success"
          xl={{ order: 1 }}
        >
          <Card style={{ width: "auto" }}>
            <Card.Header as="h5">{article.title}</Card.Header>
            <Card.Body>
              <Card.Title>
                <i>{article.author}</i>
              </Card.Title>
              <Card.Text>
                <img src={article.urlToImage} width={560} height={450} />
                <br />
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col
          //className="block-example border border-success"
          xl={{ order: 2 }}
        >
          <Card style={{ width: "auto" }}>
            <Card.Body>
              {/* <Card.Title>Special title treatment</Card.Title> */}
              <Card.Text>{article.content}</Card.Text>
              {/* <Button variant="primary"> */}
                <Link to="/articlebody" state={article}>Read Article</Link>
              {/* </Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default SmallerCards;
