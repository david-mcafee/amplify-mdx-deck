// example Layout.js
import React from "react";

const Layout = ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "tomato",
    }}
  >
    {children}
  </div>
);

export default Layout;
