import React from "react";
import { CommentForm } from "./CommentForm";

export const Comment = ({
  comment,
  replies,
  currentUserId,
  deleteComment,
  activateComment,
  setActiveComment,
  parentId = null,
  addComment,
  editComment
}) => {
  const isLoggedIn = Boolean(currentUserId); //this Boolean is to check if user is logged in. If null, then the boolean is false, else it is true
  const createdAtDate = new Date(comment.createdAt).toLocaleDateString();
  const isReplying =
    activateComment &&
    activateComment.type === "replying" &&
    activateComment.id === comment.id;
  const isEditing =
    activateComment &&
    activateComment.type === "editing" &&
    activateComment.id === comment.id;
  const replyId = parentId ? parentId : comment.id;
  return (
    <div className="comment">
      <div className="comment-image-container">
        <img
          src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
          height={50}
          width={50}
        />
      </div>
      <div className="comment-right">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{createdAtDate}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.body}</div>}
        {isEditing && (
          <CommentForm
            labelSubmit="Update"
            cancelButton
            baseText={comment.body}
            submitHandler={(text) => editComment(text, comment.id)}
            cancelHandler={() => setActiveComment(null)}
          />
        )}
        <div className="comment-actions">
          {isLoggedIn && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {isLoggedIn && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {isLoggedIn && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            labelSubmit="Reply"
            submitHandler={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                key={reply.id}
                comment={reply}
                replies={[]}
                currentUserId={currentUserId}
                addComment={addComment}
                deleteComment={deleteComment}
                activateComment={activateComment}
                editComment={editComment}
                setActiveComment={setActiveComment}
                parentId={comment.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
