import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";

export const CommentForm = ({ labelSubmit, submitHandler }) => {
  const [text, setText] = useState("");
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
    </form>
  );
};
