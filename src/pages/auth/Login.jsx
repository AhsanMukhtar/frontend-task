import React, { useState } from "react";
import CommonInputField from "../../components/CommonInputField";
import { LoginValidationSchema } from "../../utils/ValidationSchema";
import CommonButton from "../../components/CommonButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Auth/AuthServices";

const Login = () => {
  const dispatch = useDispatch();
  const autoFill = useSelector((state) => state.Auth.user);
  const [userData, setUserData] = useState({
    email: autoFill?.email ? autoFill?.email : "",
    password: autoFill?.password ? autoFill?.password : "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateField = async (name, value) => {
    try {
      await LoginValidationSchema?.fields[name]?.validate(value);
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
    dispatch(login(userData, autoFill, setErrors, setLoading));
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Welcome to the site</h1>
        <p>Login to get started</p>

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
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

          <CommonButton type={"submit"} name={"Login"} loading={loading} />
        </form>

        <p className="login-link">
          Don't have a account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
