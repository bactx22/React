import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductApi from "../api/ProductApi";
import { Link, NavLink } from "react-router-dom";
import CategoryAPI from "../api/categoryAPI";
const ProductDetail = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await ProductApi.get(id);
        console.log(id);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={`http://localhost:4001/api/product/photo/${product._id}`}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              {/* <div className="small mb-1">SKU: BST-498</div> */}
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              <div className="fs-5 mb-3">
                <span className="text-decoration-line-through">$45.00</span>
                <span> - </span>
                <span>{product.price}</span>
              </div>
              <p className="lead">{product.description}</p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  defaultValue={1}
                  style={{ maxWidth: "3rem" }}
                />
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <h2 className="fw-bolder mb-4">Related products</h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {props.products
              .filter(value => value.category === product.category)
              .map((value, index) => {
                return <div className="col mb-5" key={index}>
                <div className="card h-100">
                  <div
                    className="badge bg-danger text-white position-absolute"
                    style={{
                      top: "0.5rem",
                      right: "0.5rem",
                      display: value.sale ? "block" : "none",
                    }}
                  >
                    -30$
                  </div>
                  {/* Product image*/}
                  <img
                    className="card-img-top"
                    src={`http://localhost:4001/api/product/photo/${value._id}`}
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
                      <a
                        className="btn btn-outline-dark mt-auto"
                        href={`/product/${value._id}`}
                      >
                        View options
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              }
              )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
