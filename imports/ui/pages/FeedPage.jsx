import { Meteor } from "meteor/meteor";
import React from "react";

export const FeedPage = (props) => {
  return (
    <div>
      <h1>Feed Page</h1>
      <button onClick={() => Meteor.logout()}>Log out</button>
    </div>
  );
};
