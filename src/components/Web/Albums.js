import React from "react";
import { Link } from "react-router-dom";

const Albums = (props) => {
  console.log(props.products);
  return (
    <section className="py-2">
      <div className="container px-4 px-lg-5 ">
        <h1 className="fw-normal ">Sản phẩm</h1>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 ">
          {/* justify-content-center */}
          {props.products.slice(0, 8).map((product, index) => {
            return (
              <div className="col mb-5" key={index}>
                <div className="card h-100">
                  {/* <div
                    className="badge bg-danger text-white position-absolute"
                    style={{
                      top: "0.5rem",
                      right: "0.5rem",
                      display: product.sale ? "block" : "none",
                    }}
                  >
                    New
                  </div> */}
                  <img
                    className="card-img-top"
                    src={`http://localhost:4001/api/product/photo/${product._id}`}
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{product.name}</h5>
                      <span className="text-muted text-decoration-line-through">
                        $20.00
                      </span>
                      -{product.price}
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
            );
          })}
        </div>
      </div>
    </section>

    // <div className="album py-5 bg-light">
    //   <div className="container">
    //     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    //       {props.products.map((product, index) => {
    //         return (
    //           <div className="col" key={index}>
    //             <div className="card shadow-sm">
    //               <img
    //                 src={`http://localhost:4001/api/product/photo/${product._id}`}
    //                 alt=""
    //               />
    //               <div className="card-body">
    //                 <Link to={`/product/${product._id}`}>
    //                   <p className="card-text">{product.name}</p>
    //                 </Link>
    //                 <div className="d-flex justify-content-between align-items-center text-center">
    //                   <p>{product.price}</p>
    //                   {/* <div className="btn-group">
    //                     <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
    //                     <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
    //                   </div> */}
    //                   <small className="text-muted">9 mins</small>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Albums;
