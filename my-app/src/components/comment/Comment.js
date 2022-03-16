import React from "react";

export const Comment = ({ comment, replies, currentUserId, deleteComment }) => {
  const isLoggedIn = Boolean(currentUserId) //this Boolean is to check if user is logged in. If null, then the boolean is false, else it is true
  const createdAtDate = new Date(comment.createdAt).toLocaleDateString()
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
        <div className="comment-text">{comment.body}</div>
        <div className='comment-actions'>
          {isLoggedIn && <div className="comment-action">Reply</div>}
          {isLoggedIn && <div className="comment-action">Edit</div>}
          {isLoggedIn && <div className="comment-action" onClick={() => deleteComment(comment.id)}>Delete</div>}
          
        </div>
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment key={reply.id} comment={reply} replies={[]} currentUserId={currentUserId} deleteComment={deleteComment}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
