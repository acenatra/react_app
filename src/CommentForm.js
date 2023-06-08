import React, { useState } from 'react';

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="4"
        cols="50"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
      ></textarea>
      <br />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
