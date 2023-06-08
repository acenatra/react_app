import React, { useState } from 'react';
import CommentForm from './CommentForm';

const Post = () => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div>
      <h1>Post</h1>
      <CommentForm addComment={addComment} />
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
