import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { authenticate, signIn, isAuthenticated } from "../../../auth";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [redirectToRef, setRedirectToRef] = useState(false);
  const { user } = isAuthenticated();

  const onSubmit = (data) => {
    setLoading(true);
    signIn(data).then((dataUser) => {
      if (dataUser.error) {
        setError(dataUser.error);
        setLoading(false);
      } else {
        authenticate(dataUser, () => {
          setRedirectToRef(true);
        });
      }
    });
  };

  const showError = () => {
    return (
      <div
        className="alert alert-danger"
        style={{
          display: error ? "block" : "none",
          width: "500px",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        {error}
      </div>
    );
  };
  const redirectUser = () => {
    if (redirectToRef) {
      if (user.role == 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="user/dashboard" />;
      }
    }
  };
  const showLoading = () => {
    return (
      loading && (
        <div
          className="alert alert-info"
          style={{
            display: loading ? "block" : "none",
            width: "500px",
            margin: "auto",
            marginTop: "20px",
          }}
        >
          <h2>...loading</h2>
        </div>
      )
    );
  };
  const SignInForm = () => {
    return (
      <form
        id="form-signin"
        style={{ marginTop: "100px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="input-group1 ">
          <i className="bi bi-envelope"></i>
          <input
            type="text"
            id="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          {errors.email && (
            <span className="text-danger mt-2">This field is required</span>
          )}
        </div>
        <div className="input-group1 ">
          <i className="bi bi-shield-lock"></i>
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>
        <div>
          {errors.password && (
            <span className="text-danger mt-2">This field is required</span>
          )}
        </div>
        <button type="submit">Sign in</button>
        <div className="x1">
          <p className="x">Forgot password?</p>
          <span className="xx">Don't have an account?</span>
          <NavLink className="x" to="/signup">
            Sign up here
          </NavLink>
        </div>
      </form>
    );
  };
  return (
    <>
      {SignInForm()}
      {showError()}
      {redirectUser()}
      {showLoading()}
    </>
  );
};

export default SignIn;
