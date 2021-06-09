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
const Routers = (props) => {
  // console.log(props.products)
  return (
    <Router>
      <Switch>
        <Route exact path="/admin/:path?/:path?">
          <AdminLayout>
            <Switch>
              <AdminRoute exact path="/admin">
                <Redirect to="/admin/dashboard" />
              </AdminRoute>

              <AdminRoute exact path="/admin/dashboard">
                <Dashboard />
              </AdminRoute>
              <AdminRoute exact path="/admin/products">
                <AdminProducts {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/product/add">
                <ProductsAdd {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/category">
                <AdminCategory {...props} />
              </AdminRoute>
              {/* <AdminRoute exact path="/admin/dashboard">
                <AdminDashboard />
              </AdminRoute> */}
              <AdminRoute exact path="/admin/category/add">
                <CategoryAdd {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/category/:id">
                <CategoryEdit {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/product/:id">
                <ProductEdit {...props} />
              </AdminRoute>
              <AdminRoute path="*">
                <Page404 />
              </AdminRoute>
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
              <Route exact path="/signin">
                <SignIn />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route path="/product/:id">
                <ProductDetail />
              </Route>
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
          </WebsiteLayout>
        </Route>
        <Route></Route>
      </Switch>
    </Router>
  );
};

export default Routers;
