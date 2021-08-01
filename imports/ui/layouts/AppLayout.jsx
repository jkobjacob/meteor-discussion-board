import React from "react";

export const AppLayout = ({ children }) => {
  return (
    <>
      <div className="container-fluid">
        <header className="page-header">
          <h1 style={{ textAlign: "center" }}>Meteor discussion</h1>
        </header>
      </div>
      <div>{children}</div>
    </>
  );
};
