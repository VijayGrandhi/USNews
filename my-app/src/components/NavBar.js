import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Offcanvas from 'react-bootstrap/Offcanvas'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { ButtonBase, Divider, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import FaceIcon from '@mui/icons-material/Face';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const handleClickOfNews= e => {
      e.preventDefault();
  //  alert('hello in handle click of news')
  navigate('/countries');

     // do something here
    }
    const handleClickOfEducation = e =>{
      e.preventDefault();
  //  alert('hello in handle click of news')
  navigate('/education');

     // do something here
    }
  return (
    <div>
   
    <Divider style={{color:'white'}}/>
  <Navbar bg="dark" expand={false}>
  <Container fluid>
  <Navbar.Brand href="home" >
          <img
            alt=""
            src="https://www.usnews.com/static/img/usn-logo-large.svg"
            width="150"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Form style={{marginLeft:'auto'}} className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button style={{backgroundColor:"white",color:'black'}}>Login</Button>
      </Form>
    
    <Navbar.Toggle style={{color:'white'}}aria-controls="offcanvasNavbar" >  <DensityMediumIcon /></Navbar.Toggle>
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      style={{backgroundColor:'black',color:'white'}}
    >
      <Offcanvas.Header  style={{color:'white'}}>
        <Offcanvas.Title id="offcanvasNavbarLabel">My Account</Offcanvas.Title>
        <CloseIcon/>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Button variant="text" style={{backgroundColor:'black',color:'white',textAlign:'left'}}><FaceIcon/> Sign In </Button>
          <br></br>
        <Typography><b style={{fontSize:'20px'}}>MORE FROM U.S. NEWS</b></Typography>
        <br></br>
        <Button  onClick ={handleClickOfNews}style={{backgroundColor:'black',color:'white',textAlign:'left'}}variant="text"><b>News</b></Button>
        <br></br>
        <Button  onClick ={handleClickOfEducation} style={{backgroundColor:'black',color:'white',textAlign:'left'}}variant="text"><b>Education</b></Button>
          {/* <Nav.Link href="#action2">Link</Nav.Link> */}
          {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    
    <Navbar bg="dark" variant="dark">
      <Container style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "42%"}}>
        
        <Nav style={{marginLeft:'auto',marginRight:'auto'}}>
          <NavDropdown title={<b style={{color:'white'}}>News</b>} id="navbarScrollingDropdown">
            <NavDropdown.Item href="countries">Best Countries</NavDropdown.Item>
            <NavDropdown.Item href="#other">Best State</NavDropdown.Item>
            <NavDropdown.Item href="election">Elections</NavDropdown.Item>
            <NavDropdown.Item href="event">Events</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="home">Home</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={<b style={{color:'white'}}>Education</b>} id="navbarScrollingDropdown">
          <NavDropdown.Item href="education">Education</NavDropdown.Item>
            <NavDropdown.Item href="countries">Collage</NavDropdown.Item>
            <NavDropdown.Item href="#other">Grad School</NavDropdown.Item>
            <NavDropdown.Item href="universityRanking">Ranking</NavDropdown.Item>
      
            <NavDropdown.Divider />
            <NavDropdown.Item href="home">Home</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={<b style={{color:'white'}}>Schools</b>} id="navbarScrollingDropdown">
            <NavDropdown.Item href="#rankings">Rankings</NavDropdown.Item>
            <NavDropdown.Item href="#other">Other</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="home">Home</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={<b style={{color:'white'}}>Health</b>} id="navbarScrollingDropdown">
            <NavDropdown.Item href="#main">Main</NavDropdown.Item>
            <NavDropdown.Item href="#other">Other</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="home">Home</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={<b style={{color:'white'}}>Travel</b>} id="navbarScrollingDropdown">
            <NavDropdown.Item href="#togo">To Go</NavDropdown.Item>
            <NavDropdown.Item href="#other">Other</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="home">Home</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavBar;
