import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const ProfilePage = () => {
  const token = localStorage.getItem("token");
  const [header, setheader] = useState([]);

  //const articleheader = () => {
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
    console.log(response);
    setheader(response.data.ARTICLEHEADER);
  });
  //}

  return (
    <div>
      <h1>Welcome to your profile page</h1>
      <ul>
        <li>Username: {localStorage.getItem("username")}</li>
        <li>User Type: {localStorage.getItem("usertype")}</li>
        <li>Email: {localStorage.getItem("emailId")}</li>
        {/* <li>Likes: {localStorage.getItem("likes")}</li>
          <li>Comments: {localStorage.getItem("comments")}</li> */}
        <li>Saved: {localStorage.getItem("saved")}</li>
        {/* <button onClick={articleheader}>Click to get header in console log </button> */}

        <li>
          <h3>Header: {header}</h3>
        </li>
      </ul>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{header}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
