import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Form, Card, CardGroup, Button } from "react-bootstrap";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

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
        ARTICLEURLTOIMAGE:
          "https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/11/css-gradient.png?fit=1200%2C600&ssl=1",
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
      <h1>Welcome to your profile page!</h1>
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
            <Card style={{ width: "25rem", height: "28rem", padding: "10px" }}>
              <CardActionArea>
                <Card.Img
                  variant="top"
                  src={
                    article.ARTICLEURLTOIMAGE !== ""
                      ? article.ARTICLEURLTOIMAGE
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5q6gS7QEtuygd3qTwpE3DVjpTrkraqtHEZTdgGmscTNxZVWK3td6ALoU2OMjPjs_-A4&usqp=CAU"
                  }
                  style={{ maxWidth: "15rem", maxHeight: "20rem" }}
                />
                <Card.Body>
                  <Card.Title>{article.ARTICLEHEADER}</Card.Title>
                  <Card.Text>
                    {article.ARTICLEDESC}
                    <br />
                    Likes: {article.LIKES} &nbsp; Comments: {article.COMMENTS}{" "}
                    &nbsp; Saved: {article.SAVES}
                  </Card.Text>
                </Card.Body>
                <Link to="/profilearticlebody" state={article}>
                  Read Article
                </Link>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </CardGroup>
    </div>
  );
};
