import { Meteor } from "meteor/meteor";
import Comments from "/imports/db/comments/collection";

Meteor.methods({
  "comments.insert"(comment) {
    Comments.insert(comment);
  },
});
