import React from "react";
import { NavLink, Link, useParams } from "react-router-dom";
const ProductPage = ({ categories, products }) => {
  const { id } = useParams();
  console.log(categories);
  return (
    <div className="sb-nav-fixed">
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                {categories.map((category) => (
                  <li key={category._id}>
                    <Link
                      className="nav-link collapsed"
                      to={`/category/${category._id}`}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          </nav>
          <div className="container-fluid px-4">
            {products
              .filter((x) => x.category == id)
              .map((item, index) => (
                <div className="col mb-5" key={index}>
                  <div className="card h-100">
                    <div
                      className="badge bg-danger text-white position-absolute"
                      style={{
                        top: "0.5rem",
                        right: "0.5rem",
                      }}
                    >
                      -30$
                    </div>
                    {/* Product image*/}
                    <img
                      className="card-img-top"
                      src={`http://localhost:4001/api/product/photo/${item._id}`}
                      alt="..."
                    />
                    {/* Product details*/}
                    <div className="card-body p-4">
                      <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">Fancy Product</h5>
                        {/* Product price*/}
                        $40.00 - $80.00
                      </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="#">
                          View options
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
