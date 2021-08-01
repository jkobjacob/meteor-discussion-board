import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { App } from "/imports/ui/App";
import { FeedPage } from "/imports/ui/pages/FeedPage";
import { LoginPage } from "/imports/ui/pages/LoginPage";
import { AppLayout } from "/imports/ui/layouts/AppLayout";

Meteor.startup(() => {
  render(
    <AppLayout>
      <BrowserRouter>
        <Route path="/" component={App} />
        <Route path="/login" component={LoginPage} />
        <Route path="/feed" component={FeedPage} />
      </BrowserRouter>
    </AppLayout>,
    document.getElementById("react-target")
  );
});
