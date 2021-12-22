import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function FeedCommentComponent({
  commentKey,
  commentEach,
  commentData,
  setCommentData,
}) {
  const likeClick = event => {
    event.preventDefault();
    const { parentNode } = event.target;
    parentNode.classList.toggle('active');
  };

  const removeComment = event => {
    event.preventDefault();
    const { parentNode } = event.target;
    const removeCommentIndex = parseInt(parentNode.getAttribute('name'));
    const removedCommentList = [...commentData];
    const updatedCommentList = removedCommentList.filter(
      item => item.id !== removeCommentIndex
    );

    setCommentData(updatedCommentList);
  };
  return (
    <span name={commentKey}>
      <span id="feedCommentsBold">{commentEach.userName}</span>
      {commentEach.content}
      {commentEach.isLiked ? (
        <FontAwesomeIcon
          className="commentLikeBtn active"
          icon={faHeart}
          onClick={likeClick}
        />
      ) : (
        <FontAwesomeIcon
          className="commentLikeBtn"
          icon={faHeart}
          onClick={likeClick}
        />
      )}
      <span id="removeBtn" onClick={removeComment}>
        삭제
      </span>
    </span>
  );
}
