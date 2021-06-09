import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signUp } from "../../../auth";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = (data, e) => {
    signUp(data).then((dataInput) => {
      if (dataInput.error) {
        setError(dataInput.error);
      } else {
        setError("");
        setSuccess(true);
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
  const showSucces = () => {
    return (
      <div
        className="alert alert-info"
        style={{
          display: success ? "block" : "none",
          width: "500px",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        Băng kí thành công! <NavLink to="/signin">Đăng nhập</NavLink>
      </div>
    );
  };
  const SignUpForm = () => {
    return (
      <form
        id="form-signup"
        style={{ marginTop: "100px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="input-group1">
          <i className="bi bi-person" />
          <input
            type="text"
            id="user-name"
            placeholder="Username"
            {...register("name", { required: true })}
          />
        </div>
        <div>
          {errors.name && (
            <span className="text-danger mt-2">This field is required</span>
          )}
        </div>
        <div className="input-group1 ">
          <i className="bi bi-envelope"></i>
          <input
            type="email"
            id="user-email"
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
            id="user-password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>
        <div>
          {errors.password && (
            <span className="text-danger mt-2">This field is required</span>
          )}
        </div>
        <button type="submit" style={{ marginBottom: 10 }}>
          Sign up
        </button>
        <div className="x1">
          <span className="xx">Already have an account?</span>
          <NavLink className="x" to="/signin">
            Sign in here
          </NavLink>
        </div>
      </form>
    );
  };
  return (
    <>
      {SignUpForm()}
      {showError()}
      {showSucces()}
    </>
  );
};

export default SignUp;
