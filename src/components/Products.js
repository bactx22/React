import React from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
  console.log(props.products);
  return (
    <div style={{ marginTop: "100px" }}>
      <ul className="list-group">
        {props.products.map((product, index) => {
          return (
            <li key={index}>
              <Link to={`/product/${product._id}`}>{product.name}</Link>
              <img
                src={`http://localhost:4000/api/product/photo/${product._id}`}
                alt=""
                width="10%"
                height="10%"
              />
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => props.onDelete(product._id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
