import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SmallerCards from "./SmallerCards";

const WeatherCard = ( {location,temperature,feelsLike,humidity,condition,wind_mph,lat,lon,local_time} ) => {
  return (
    <>
    <Container>
      <Row>
        <Col style={{ padding:5 }}>
          <Card style={{ width: "auto", height: "20rem", backgroundImage: `url("https://www.pngmagic.com/product_images/dark-color-gradient-background-vector-&-illustration.jpg")`, backgroundSize:"100rem", backgroundRepeat: "no-repeat"}}>
            <Card.Body>
              <Card.Title style={{ color: "white", fontSize: "4rem" }}>{location}</Card.Title>
              <Card.Subtitle style={{ color: "white", fontSize: "2rem" }} className="mb-2">
                {temperature} F
              </Card.Subtitle>
              <Card.Text style={{ color: "white" }}>
              It feels like {feelsLike} <br/>
              The humidity is {humidity} <br/>
              The condition is {condition} <br/>
              The wind is {wind_mph} miles per hour <br/>
              The coordinates is latitude: {lat} longitude: {lon} <br/>Local time is: {local_time}
              </Card.Text>
            </Card.Body>
            
          </Card>
        </Col>
      </Row>
    </Container>
    </>
    
  );
};

export default WeatherCard;