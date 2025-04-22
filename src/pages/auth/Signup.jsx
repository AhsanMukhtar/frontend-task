import React, { useState } from "react";
import CommonInputField from "../../components/CommonInputField";
import { SignupValidationSchema } from "../../utils/ValidationSchema";
import { Link, useNavigate } from "react-router-dom";
import CommonButton from "../../components/CommonButton";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/Auth/AuthServices";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateField = async (name, value) => {
    try {
      await SignupValidationSchema?.fields[name]?.validate(value);
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, [name]: error?.message }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(signUp(userData, setErrors, navigate, setLoading));
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p>Sign up to get started</p>

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          <CommonInputField
            type={"text"}
            label={"Username"}
            name={"username"}
            placeholder={"Enter your name"}
            value={userData?.username}
            onChange={handleChange}
            autoComplete={"username"}
            error={errors?.username}
          />
          <CommonInputField
            type={"email"}
            label={"Email"}
            name={"email"}
            placeholder={"Enter your email"}
            value={userData?.email}
            onChange={handleChange}
            autoComplete={"email"}
            error={errors?.email}
          />

          <CommonInputField
            type={"password"}
            label={"Password"}
            name={"password"}
            placeholder={"********"}
            value={userData?.password}
            onChange={handleChange}
            autoComplete={"password"}
            error={errors?.password}
          />

          <CommonInputField
            type={"password"}
            label={"Confirm Password"}
            name={"confirmPassword"}
            placeholder={"********"}
            value={userData?.confirmPassword}
            onChange={handleChange}
            autoComplete={"new-password"}
            error={errors?.confirmPassword}
          />

          <CommonButton type={"submit"} name={"Sign Up"} loading={loading} />
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
