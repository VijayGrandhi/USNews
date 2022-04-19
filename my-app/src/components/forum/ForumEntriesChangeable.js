import React, { useEffect } from "react";
import { useState } from "react";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
} from "./forumapi";
import { ForumEntry } from "./ForumEntry";
import { ForumForm } from "./ForumForm";

export const ForumEntriesChangeable = ({ currentUserId, topic, discussiontopics }) => {
  const [commentBackEnd, setCommentBackEnd] = useState([]);
  const [activateComment, setActiveComment] = useState(null);
  
  const baseComments = commentBackEnd.filter(
    (commentBackEnd) => commentBackEnd.parentId === null || commentBackEnd.topic === "topic01"
  );

  const getReplies = (commentId) => {
    return commentBackEnd
      .filter(
        (singleCommentBackEnd) => singleCommentBackEnd.parentId === commentId
      )
      .sort(
        (x, y) =>
          new Date(x.createdAt).getTime() - new Date(y.createdAt).getTime()
      );
  };
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setCommentBackEnd([...commentBackEnd, comment]);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to Delete?")) {
      deleteCommentApi(commentId).then(() => {
        const updatedComments = commentBackEnd.filter(
          (singleCommentBackEnd) => singleCommentBackEnd.id !== commentId
        );
        setCommentBackEnd(updatedComments);
      });
    }
  };
  const editComment = (text, commentId) => {
    const currentId = commentId;
    const updateCommentsBackend = commentBackEnd.map((singleCommentBackEnd) => {
      if (singleCommentBackEnd.id === currentId) {
        return { ...singleCommentBackEnd, body: text };
      }
      return singleCommentBackEnd;
    });
    setCommentBackEnd(updateCommentsBackend);
    setActiveComment(null);
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setCommentBackEnd(data);
    });
  }, []);

  return (
    <div className="comments">
      
      <hr class="solid"></hr>
      <h3
        style={{
          background: "darkslategray",
          color: "white",
          padding: 5,
          maxWidth: 100,
          float: "left",
          textAlign: "left",
        }}
      >
        Topic:
      </h3>{" "}
      <h2>{discussiontopics}</h2>
      <br />
      <div className="comments-form-title">
        <i>Please add your thoughts below!</i>
      </div>
      <div className="comments-container">
        {baseComments.map((baseComment) => (
          <ForumEntry
            key={baseComment.id}
            comment={baseComment}
            replies={getReplies(baseComment.id)}
            currentUserId={currentUserId}
            deleteComment={deleteComment}
            activateComment={activateComment}
            setActiveComment={setActiveComment}
            editComment={editComment}
            addComment={addComment}
          />
        ))}
      </div>
      <ForumForm labelSubmit="Add to forum" submitHandler={addComment} />
      
    </div>
  );
};


//Notes: Remove replying functionality...Make shadpws more defined...