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
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 mb-3 mb-lg-0">
              <div className="d-inline-block">
                <div className="media align-items-end">
                  <svg
                    style={{
                      width: "20%",
                    }}
                    className="svg-icon svg-icon-big svg-icon-light"
                  >
                    <i className="fas fa-shipping-fast"></i>
                  </svg>
                  <div className="media-body text-left ml-3">
                    <h6 className="text-uppercase mb-1">Free shipping</h6>
                    <p className="text-small mb-0 text-muted">
                      Free shipping worlwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3 mb-lg-0">
              <div className="d-inline-block">
                <div className="media align-items-end">
                  <svg
                    style={{
                      width: "20%",
                    }}
                    className="svg-icon svg-icon-big svg-icon-light"
                  >
                    <i className="far fa-clock"></i>
                  </svg>
                  <div className="media-body text-left ml-3">
                    <h6 className="text-uppercase mb-1">24 x 7 service</h6>
                    <p className="text-small mb-0 text-muted">Working 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-inline-block">
                <div className="media align-items-end">
                  <svg
                    style={{
                      width: "20%",
                    }}
                    className="svg-icon svg-icon-big svg-icon-light"
                  >
                    <i className="fas fa-donate"></i>{" "}
                  </svg>
                  <div className="media-body text-left ml-3">
                    <h6 className="text-uppercase mb-1">Festival offer</h6>
                    <p className="text-small mb-0 text-muted">Mass discount </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
