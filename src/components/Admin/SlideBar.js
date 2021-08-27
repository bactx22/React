import React from "react";
import { Link, NavLink } from "react-router-dom";
import { isAuthenticated } from "../../auth";

const SlideBar = () => {
  const { user } = isAuthenticated();
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <NavLink className="nav-link collapsed" to="/admin">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Dashboard
            </NavLink>
            <div className="sb-sidenav-menu-heading">Components</div>
            <NavLink className="nav-link collapsed" to="/admin/products">
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns" />
              </div>
              Products
            </NavLink>

            <NavLink className="nav-link collapsed" to="/admin/category">
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open" />
              </div>
              Categories
            </NavLink>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          {/* {user.name} */}
        </div>
      </nav>
    </div>
  );
};

export default SlideBar;
