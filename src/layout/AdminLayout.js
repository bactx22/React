import React from "react";
import { Link, NavLink } from "react-router-dom";
import AdminNavBar from "../components/Admin/AdminNavBar";
import SlideBar from "../components/Admin/SlideBar";

const AdminLayout = (props) => {
  return (
    <div className="sb-nav-fixed">
      <AdminNavBar />
      <div id="layoutSidenav">
        <SlideBar />
        <div id="layoutSidenav_content">
          <main>{props.children}</main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
