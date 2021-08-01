import { Meteor } from "meteor/meteor";
import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Redirect } from "react-router-dom";

export const App = () => {
  const user = useTracker(() => Meteor.user());

  return user ? <Redirect to="/feed" /> : <Redirect to="/login" />;
};
