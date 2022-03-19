import React from "react";
import { Comments } from "../comment/Comments";
import Container from "react-bootstrap/Container";
import { useLocation, Link } from "react-router-dom";

export const ArticleBody = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  return (
    <Container>
      <h1>{state.title}</h1>
      <br></br>
      <p><i>By {state.author}</i></p>
      <br></br>
      <p>{state.content}</p>
      <br></br>
      <Comments currentUserId="1" />
    </Container>
  );
};
