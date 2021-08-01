import { Meteor } from "meteor/meteor";
import Comments from "/imports/db/comments/collection";

Meteor.publish("comments", () => {
  return Comments.find({});
});
