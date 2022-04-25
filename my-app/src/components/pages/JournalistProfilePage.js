import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Form, Card, CardGroup, Button } from "react-bootstrap";

export const JournalistProfilePage = () => {
  const token = localStorage.getItem("token");
  const currentUser = localStorage.getItem("username");
  const [header, setheader] = useState([]);
  const [data, setdata] = useState([]);
  const [content, setcontent] = useState("");
  const [inputHeader, setinputHeader] = useState("");
  const [description, setdescription] = useState("");
  const [inputauthor, setinputauthor] = useState("");

  const onsubmit = (event) => {
    event.preventDefault();
    console.log("Content: ", content);
    console.log("Header: ", inputHeader);
    console.log("Description: ", description);
    console.log("Author: ", inputauthor);

    Axios.post(
      "/feedback",
      {
        username: currentUser,
        ARTICLEHEADER: inputHeader,
        ARTICLEDESC: description,
        ARTICLEAUTHOR: inputauthor,
        ARTICLEURL: null,
        ARTICLEURLTOIMAGE: null,
        PUBLISHEDAT: null,
        CONTENT: content,
        Datetime: Date().toLocaleString(),
        COMMENTS: "saved",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  useEffect(() => {
    Axios.post(
      "/getSavedArticles",
      {
        username: localStorage.getItem("username"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      setdata(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Welcome to your profile page</h1>
      <ul>
        <li>Username: {localStorage.getItem("username")}</li>
        <li>User Type: {localStorage.getItem("usertype")}</li>
        <li>Email: {localStorage.getItem("emailId")}</li>
      </ul>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Type your article header below</Form.Label>
          <input
            type="text"
            rows={3}
            onChange={(e) => setinputHeader(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Type your article author below</Form.Label>
          <Form.Control
            type="text"
            rows={3}
            onChange={(e) => setinputauthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Type your article description below</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setdescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Type your article content below</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            onChange={(e) => setcontent(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button
        as="input"
        type="submit"
        content="Upload Article"
        onClick={onsubmit}
      />

      <CardGroup>
        {data.map((article) => (
          <div>
            <br />
            <Card style={{ width: "25rem", height: "25rem", padding: "10px" }}>
              <Card.Img variant="top" src={article.ARTICLEURLTOIMAGE} />
              <Card.Body>
                <Card.Title>{article.ARTICLEHEADER}</Card.Title>
                <Card.Text>Some quick example text</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </CardGroup>
    </div>
  );
};
