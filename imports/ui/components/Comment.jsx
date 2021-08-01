import React from "react";

export const Comment = ({ userName, dateString, commentText }) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <div className="user__avatar"></div>
        <div className="panel-title">
          <div className="user__name">{userName}</div>
          <div className="post__date">{dateString}</div>
        </div>
      </div>
      <div className="panel-body">
        <div className="comment__text">{commentText}</div>
      </div>
    </div>
  );
};
