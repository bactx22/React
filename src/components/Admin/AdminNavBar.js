import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { isAuthenticated, signout } from "../../auth";
import { NavLink } from "react-router-dom";

const AdminNavBar = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { user } = isAuthenticated();
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    isAuthenticated() && setIsLogged(true);
  }, [pathname, isLogged]);
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      {/* Navbar Brand*/}
      <NavLink className="navbar-brand ps-3" to="/admin">
        ADMIN Dashboard
      </NavLink>
      {/* Sidebar Toggle*/}
      <button
        className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        href="#!"
      ></button>
      {/* Navbar Search*/}
      <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search for..."
            aria-describedby="btnNavbarSearch"
          />
          <button
            className="btn btn-primary"
            id="btnNavbarSearch"
            type="button"
          >
            <i className="fas fa-search" />
          </button>
        </div>
      </form>
      {/* Navbar*/}
      {isLogged && (
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw" />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              {/* <li>
                <a className="dropdown-item">{user.name}</a>
              </li> */}
              <li>
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() =>
                    signout(() => {
                      setIsLogged(false);
                      history.push("/");
                    })
                  }
                >
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default AdminNavBar;
