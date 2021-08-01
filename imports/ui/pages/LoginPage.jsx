import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import React, { useState, useRef } from "react";

export const LoginPage = () => {
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isError, setIsError] = useState([false, ""]);

  const emailRef = useRef();
  const passwordRef = useRef();

  const clearInputFields = () => {
    setUserEmail("");
    setUserPassword("");
  };

  const handleLoginError = (error) => {
    if (error) {
      setIsError([true, error.reason]);
      passwordRef.current.parentElement.classList.add("has-error");
      passwordRef.current.focus();
    } else {
      console.log("logged in");
      clearInputFields();
      return;
    }
  };

  const handleRegisterError = (error) => {
    if (error) {
      setIsError([true, error.reason]);
      emailRef.current.parentElement.classList.add("has-error");
      emailRef.current.focus();
    } else {
      console.log("signed up");
      clearInputFields();
      return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isExistingUser) {
      Meteor.loginWithPassword(userEmail, userPassword, handleLoginError);
    } else {
      Accounts.createUser(
        {
          email: userEmail,
          password: userPassword,
        },
        handleRegisterError
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {isError[0] ? <p className="text-danger">{isError[1]}</p> : null}
        <div className="form-group">
          <label htmlFor="userEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            placeHolder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            onKeyDown={(e) =>
              emailRef.current.parentElement.classList.remove("has-error")
            }
            ref={emailRef}
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
            onKeyDown={(e) =>
              passwordRef.current.parentElement.classList.remove("has-error")
            }
            ref={passwordRef}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            {isExistingUser ? `Log In` : `Sign Up`}
          </button>
        </div>
        <div>
          <span onClick={() => setIsExistingUser(!isExistingUser)}>
            {isExistingUser
              ? `Don't have an account? Sign up`
              : `Already have an account? Log In`}
          </span>
        </div>
      </form>
    </div>
  );
};
