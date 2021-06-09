import React from "react";
import { Link, NavLink } from "react-router-dom";

const Albums = (props) => {
  return (
    <section className="py-2">
      <div className="container px-4 px-lg-5 ">
        <h1 className="fw-normal ">Siêu - Sale</h1>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 ">
          {/* justify-content-center */}
          {props.products.map((product, index) => {
            return (
              <div
                className="col mb-5"
                style={{ display: product.sale ? "block" : "none" }}
                key={index}
              >
                <div className="card h-100">
                  <div
                    className="badge bg-danger text-white position-absolute"
                    style={{
                      top: "0.5rem",
                      right: "0.5rem",
                      display: product.sale ? "block" : "none",
                    }}
                  >
                    Sale 30%
                  </div>
                  <img
                    className="card-img-top"
                    src={`http://localhost:4001/api/product/photo/${product._id}`}
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <NavLink
                        className="text-dark "
                        style={{ textDecoration: "none" }}
                        to={`/product/${product._id}`}
                      >
                        <h5 className="fw-bolder">{product.name}</h5>
                      </NavLink>
                      <span className="text-muted text-decoration-line-through tx">
                        $20.00
                      </span>
                      -{product.price}
                    </div>
                  </div>
                  {/* Product actions*/}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <NavLink
                        className="btn btn-outline-dark mt-auto"
                        to={`/product/${product._id}`}
                      >
                        View options
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Albums;
