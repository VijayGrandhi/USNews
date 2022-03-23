import React, { useEffect } from "react";
import { useState } from "react";
import { getComments as getCommentsApi, createComment as createCommentApi, deleteComment as deleteCommentApi } from "./commentapi";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";

export const Comments = ({ currentUserId }) => {
  const [commentBackEnd, setCommentBackEnd] = useState([]);
  const [activateComment, setActiveComment] = useState(null);

  const baseComments = commentBackEnd.filter(
    (commentBackEnd) => commentBackEnd.parentId === null
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
      createCommentApi(text, parentId).then(comment => {
          setCommentBackEnd([comment, ...commentBackEnd])
      })
  }
  const deleteComment = (commentId) => {
    if (window.confirm('Are you sure you want to Delete?')) {
        deleteCommentApi(commentId).then(()=>{
            const updatedComments = commentBackEnd.filter(
                (singleCommentBackEnd) => singleCommentBackEnd.id !== commentId
            )
            setCommentBackEnd(updatedComments)
        })
    }
  }
  const editComment = (text, commentId) => {
      const currentId = commentId
      const updateCommentsBackend = commentBackEnd.map(singleCommentBackEnd => {
          if( singleCommentBackEnd.id === currentId ) {
            return {...singleCommentBackEnd, body: text}
          }
          return singleCommentBackEnd
      })
      setCommentBackEnd(updateCommentsBackend)
      setActiveComment(null)
  }

  useEffect(() => {
    getCommentsApi().then((data) => {
      setCommentBackEnd(data);
    });
  }, []);

  return (
    <div className="comments">
      <hr class="solid"></hr>
      <h7 className="comments-title" style={
        {color: "darkslategray"}
      }>Comments</h7>
      <div className = 'comments-form-title'><i>Comment your thoughts below</i></div>
      <CommentForm labelSubmit = 'Add comment' submitHandler = {addComment} />
      <div className="comments-container">
        {baseComments.map((baseComment) => (
          <Comment
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
    </div>
  );
};
