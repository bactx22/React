import React, { Component, useEffect, useState } from "react";
import ProductApi from "../../../api/ProductApi";

import { Link, NavLink } from "react-router-dom";
const AdminProducts = (props) => {
  return (
    <div style={{ margin: "20px" }}>
      <NavLink
        className="btn btn-primary btn-sm"
        to="/admin/product/add"
        style={{ width: "100px", marginBottom: "20px" }}
      >
        Add
      </NavLink>
      <table className="table table-bordered border-dark">
        <thead>
          <tr>
            <th>#</th>
            <th width={200}>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
            {/* <th width={120}>Shipping</th> */}
            <th width={200} className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>

              <td>
                <img
                  src={`http://localhost:4001/api/product/photo/${product._id}`}
                  alt=""
                  width="100%"
                />
              </td>
              <td>{product.quantity}</td>
              <td className="text-center">
                <Link
                  to={`/admin/product/edit/${product._id}`}
                  className="btn btn-primary btn-sm"
                >
                  Update
                </Link>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => props.onDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
