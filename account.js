import React from 'react';
import CommentSection from './CommentSection';

const Account = ({ account }) => {
  const { id, name, image, comments } = account;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <CommentSection comments={comments} />
    </div>
  );
};

export default Account;
