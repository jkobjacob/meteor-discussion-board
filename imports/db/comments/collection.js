import { Mongo } from "meteor/mongo";
import CommentSchema from "/imports/db/comments/schema";

const Comments = new Mongo.Collection("comments");

Comments.attachSchema(CommentSchema);
export default Comments;
