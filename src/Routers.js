import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import WebsiteLayout from "./layout/WebsiteLayout";
import Page404 from "./pages/Page404";
import ProductDetail from "./components/ProductDetail";
import ProductsAdd from "./components/Admin/product/ProductsAdd";
import AdminProducts from "./components/Admin/product/AdminProducts";
import Home from "./components/Web/Home";
import About from "./components/Web/About";
import AdminCategory from "./components/Admin/category/AdminCategory";
import CategoryAdd from "./components/Admin/category/CategoryAdd";
import SignIn from "./components/Web/User/SignIn";
import SignUp from "./components/Web/User/SignUp";
import ProductEdit from "./components/Admin/product/ProductEdit";
import CategoryEdit from "./components/Admin/category/CategoryEdit";
import Dashboard from "./components/Admin/Dashboard";
import UserDashboard from "./components/Web/User/userDashboard";
import PrivateRoute from "./auth/privateRoute";
import AdminRoute from "./auth/adminRoute";
import AdminDashboard from "./components/Web/User/adminDashboard";
import ProductPage from "./components/Web/ProductPage";
const Routers = (props) => {
  // console.log(props.products)
  return (
    <Router>
      <Switch>
        <Route exact path="/admin/:path?/:path?/:path?">
          <AdminLayout>
            <Switch>
              <AdminRoute>
                <Route exact path="/admin">
                  <Redirect to="/admin/dashboard" />
                </Route>

                <Route exact path="/admin/dashboard">
                  <Dashboard />
                </Route>

                <Route exact path="/admin/products">
                  <AdminProducts {...props} />
                </Route>

                <Route exact path="/admin/product/add">
                  <ProductsAdd {...props} />
                </Route>

                <Route exact path="/admin/category">
                  <AdminCategory {...props} />
                </Route>

                <Route exact path="/admin/category/add">
                  <CategoryAdd {...props} />
                </Route>

                <Route exact path="/admin/category/edit/:id">
                  <CategoryEdit {...props} />
                </Route>

                <Route exact path="/admin/product/edit/:id">
                  <ProductEdit {...props} />
                </Route>
              </AdminRoute>
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
          </AdminLayout>
        </Route>
        <Route>
          <WebsiteLayout>
            <Switch>
              <Route exact path="/">
                <Home {...props} />
              </Route>
              <PrivateRoute exact path="/user/dashboard">
                <UserDashboard />
              </PrivateRoute>
              <Route exact path="/blog">
                <About />
              </Route>
              {/* <Route exact path="/category/:id">
                <ProductPage {...props} />
              </Route> */}
              <Route exact path="/signin">
                <SignIn />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route path="/product/:id">
                <ProductDetail {...props} />
              </Route>

              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
          </WebsiteLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;
