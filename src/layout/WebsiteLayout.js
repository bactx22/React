import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Web/Navbar";

const WebsiteLayout = (props) => {
  return (
    <div>
      <Navbar />
      {/* <Banner /> */}
      <div>{props.children}</div>
    </div>
  );
};

export default WebsiteLayout;
