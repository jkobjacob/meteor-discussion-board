import { Meteor } from "meteor/meteor";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";
import { Comment } from "/imports/ui/components/Comment";
import Comments from "/imports/db/comments/collection";

const convertToDateString = (date) => {
  const padZero = (x) => (x < 10 ? `0${x}` : x);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${date.toDateString()}, ${padZero(hours)}:${padZero(minutes)}`;
};

const makeComment = (commentText, userName) => {
  return {
    userName,
    commentText,
    date: new Date(),
  };
};

export const FeedPage = (props) => {
  if (!Meteor.user()) {
    return <Redirect to="/login" />;
  }

  const currentUserName = Meteor.user().emails[0].address;
  const [textArea, setTextArea] = useState("");
  const { comments, isLoading } = useTracker(() => {
    const handler = Meteor.subscribe("comments");

    if (!handler.ready()) {
      return { comments: [], isLoading: true };
    }

    const comments = Comments.find({}, { sort: { date: -1 } }).fetch();
    return { comments: comments, isLoading: false };
  });

  const handlePostedComment = () => {
    Meteor.call("comments.insert", makeComment(textArea, currentUserName));
    setTextArea("");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8 col-md-8">
          <div className="form-control comment__input_section">
            <textarea
              value={textArea}
              onChange={(e) => setTextArea(e.target.value)}
              className="form-control comment__input_field"
              rows="1"
            />
            <button
              disabled={textArea === ""}
              onClick={handlePostedComment}
              className="btn btn-primary">
              Post
            </button>
          </div>
          <div className="row comments__section">
            <div className="col-sm-12 col-md-12">
              {isLoading && <div>Loading</div>}
              {comments.map((comment, idx) => {
                return (
                  <Comment
                    key={idx}
                    userName={comment.userName}
                    dateString={convertToDateString(comment.date)}
                    commentText={comment.commentText}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-md-4 feedpage__user_section">
          <div className="feedpage__avatar"></div>
          <div className="feedpage__user_info">
            <h4>{currentUserName}</h4>
            <button
              onClick={() => {
                Meteor.logout();
                props.history.push("/login");
              }}
              className="btn btn-primary">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
