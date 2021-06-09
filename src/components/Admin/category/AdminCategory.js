import React from "react";
import { Link, NavLink } from "react-router-dom";
const AdminCategory = (props) => {
  return (
    <div style={{ margin: "20px" }}>
      <NavLink
        to="/admin/category/add"
        style={{ width: "100px", marginBottom: "20px" }}
        className="btn btn-primary btn-sm"
      >
        Add
      </NavLink>
      <table className="table table-bordered border-dark">
        <thead>
          <tr>
            <th>#</th>
            <th width={200}>Name</th>
            <th>Images</th>
            <th width={200}>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.categories.map((category, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>
                <h5>{category.name}</h5>
              </td>
              <td>
                <img
                  src={`http://localhost:4001/api/category/photo/${category._id}`}
                  alt=""
                  width="50%"
                />
              </td>
              <td>
                <Link
                  to={`/admin/category/${category._id}`}
                  className="btn btn-primary btn-sm"
                >
                  Update
                </Link>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => props.onDeleteCate(category._id)}
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

export default AdminCategory;
