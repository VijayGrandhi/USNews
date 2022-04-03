import React, { useState } from "react";

export const CommentForm = ({ labelSubmit, submitHandler, cancelButton=false, baseText="", cancelHandler }) => {
  const [text, setText] = useState(baseText);
  const textAreaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    submitHandler(text);
    setText("")
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className='comment-form-button' disabled={textAreaDisabled}>{labelSubmit}</button>
      {cancelButton && (
          <button type="button" className="comment-form-button comment-form-cancel-button" onClick={cancelHandler}>Revert</button>
      )}
    </form>
  );
};
