import { Meteor } from "meteor/meteor";

import Comments from "/imports/db/comments/collection";
import "/imports/api/comments/methods";
import "/imports/api/comments/publications";

Meteor.startup(() => {});
