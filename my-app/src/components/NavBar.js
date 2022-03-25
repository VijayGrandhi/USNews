import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container style={{ marginLeft: 20 }}>
        <Navbar.Brand href="home">
          <img
            alt=""
            src="https://auth.usnews.com/2q17ud509vvjvs5svj5ql4tt1q/20210316192702/assets/images/image.jpg"
            width="150"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="News" id="navbarScrollingDropdown">
            <NavDropdown.Item href="countries">Best Countries</NavDropdown.Item>
            <NavDropdown.Item href="#other">Best State</NavDropdown.Item>
            <NavDropdown.Item href="#other">Elections</NavDropdown.Item>
            <NavDropdown.Item href="#other">Events</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="home">Home</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Education" id="navbarScrollingDropdown">
          <NavDropdown.Item href="education">Education</NavDropdown.Item>
            <NavDropdown.Item href="countries">Collage</NavDropdown.Item>
            <NavDropdown.Item href="#other">Grad School</NavDropdown.Item>
            <NavDropdown.Item href="#other">Ranking</NavDropdown.Item>
      
            <NavDropdown.Divider />
            <NavDropdown.Item href="home">Home</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Schools" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#rankings">Rankings</NavDropdown.Item>
            <NavDropdown.Item href="#other">Other</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="home">Home</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Health" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#main">Main</NavDropdown.Item>
            <NavDropdown.Item href="#other">Other</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="home">Home</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Travel" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#togo">To Go</NavDropdown.Item>
            <NavDropdown.Item href="#other">Other</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="home">Home</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
