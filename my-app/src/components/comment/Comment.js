import React from 'react'

export const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className='comment-image-container'>
        <img src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png' 
        height={50}
        width={50}
        />
      </div>
      <div className = 'comment-right'>
        <div className='comment-content'>
          <div className='comment-author'>
            {comment.username}
          </div>
          <div>{comment.createdAt}</div>
        </div>
        <div className='comment-text'>{comment.body}</div>
      </div>
    </div>
  )
}
