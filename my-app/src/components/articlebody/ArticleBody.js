import React from "react";
import { Comments } from "../comment/Comments";
import Container from "react-bootstrap/Container";
import { useLocation, Link } from "react-router-dom";
import Axios  from "axios";
import { Checkbox } from "@mui/material";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const ArticleBody = () => {
  const token = localStorage.getItem("token");
  const currentUser = localStorage.getItem("username");

  const location = useLocation();
  const state = location.state;
  console.log(state);

  const sendLikedArticle = (action) => {
    console.log(action);
    Axios.post(
      "/feedback",
      {
        username: currentUser,
        ARTICLEHEADER: state.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&',' '),
        ARTICLEDESC: state.description.replace(/[.*+?^${}()|[\]\\]/g, '\\$&',' '),
        ARTICLEAUTHOR: state.author.replace(/[.*+?^${}()|[\]\\]/g, '\\$&',' '),
        ARTICLEURL: state.url,
        ARTICLEURLTOIMAGE: state.urlToImage,
        PUBLISHEDAT: state.publishedAt,
        CONTENT: state.content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&',' '),
        Datetime: Date().toLocaleString(),
        COMMENTS: action
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  return (
    <Container>
      <h1>{state.title}</h1>
      <br></br>
           <p>
        <i>By {state.author}</i>
      </p>

      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        onClick ={() => sendLikedArticle('like')}
      />

      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
        onClick ={() => sendLikedArticle('saved')}
      />

      <p>{state.content}</p>
      <br></br>
      <Comments currentUserId={currentUser} />
    </Container>
  );
};
