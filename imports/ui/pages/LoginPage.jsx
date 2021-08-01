import { Meteor } from "meteor/meteor";
import React, { useState } from "react";

export const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const clearInputFields = () => {
    setUserEmail("");
    setUserPassword("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userEmail, userPassword);

    clearInputFields();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            placeHolder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="userEmail">Password</label>
          <input
            type="password"
            className="form-control"
            id="userPassword"
            placeHolder="Password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </div>
        <div></div>
      </form>
    </div>
  );
};
