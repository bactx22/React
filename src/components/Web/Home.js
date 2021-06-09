import React from "react";
import Banner from "./Banner";
import Albums from "./Albums";
import Footer from "./Footer";
import Sales from "./Sales";
const Home = (props) => {
  return (
    <div>
      <Banner />
      <Sales {...props} />
      <Albums {...props} />
      <Footer />
    </div>
  );
};

export default Home;
