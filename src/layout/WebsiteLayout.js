import React from "react";
import Footer from "../components/Web/Footer";

import Navbar from "../components/Web/Navbar";

const WebsiteLayout = (props) => {
  return (
    <div>
      <Navbar />
      {/* <Banner /> */}
      <div>{props.children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default WebsiteLayout;
