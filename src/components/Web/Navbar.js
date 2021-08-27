import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { signout, isAuthenticated } from "../../auth";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { user } = isAuthenticated();
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    isAuthenticated() && setIsLogged(true);
  }, [pathname, isLogged]);
  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            NTNA
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link "
                  activeClassName="active"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={`/category/${category._id}
                  `}
                  activeClassName="active"
                >
                  Products
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/blog"
                  activeClassName="active"
                >
                  Blog
                </NavLink>
              </li>
              {!isLogged && (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/signin"
                      activeClassName="active"
                    >
                      SignIn
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <form className="d-flex me-md-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            {isLogged && (
              <ul className="navbar-nav ms-auto ms-md-0 ">
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
                    <li>
                      <a className="dropdown-item" href="#!">
                        Settings
                      </a>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={
                          user.role == 1
                            ? "/admin/dashboard"
                            : "/user/dashboard"
                        }
                      >
                        Dashboard
                      </NavLink>
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

            {/* <form className="d-flex" style={{ marginLeft: "10px" }}>
              <button className="btn btn-outline-success" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
