import React from "react";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const UserCms = ({ user, signOut }) => {
  console.log(user);
  return (
    <div>
      <h1>User CMS</h1>
      <h3>User: {user.attributes.email}</h3>
      <button onClick={signOut}>SignOut</button>
    </div>
  );
};

export default withAuthenticator(UserCms);
