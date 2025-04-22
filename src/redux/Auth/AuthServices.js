import toast from "react-hot-toast";
import { LoginValidationSchema, SignupValidationSchema } from "../../utils/ValidationSchema";
import { SIGNUP_SUCCESS } from "./AuthSlice";


export const signUp = (userData, setErrors, navigate, setLoading) => async (dispatch) => {
    try {
        const validData = await SignupValidationSchema?.validate(userData, {
          abortEarly: false,
        });
        dispatch(SIGNUP_SUCCESS(validData));
        setErrors({});
        navigate("/login");
      } catch (error) {
        const newErrors = {};
        error?.inner?.forEach((err) => {
          if (err?.path) newErrors[err?.path] = err?.message;
        });
        setErrors(newErrors);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
  };

  export const login = (userData, autoFill, setErrors, setLoading) => async (dispatch) => {
    try {
        const validData = await LoginValidationSchema?.validate(userData, {
          abortEarly: false,
        });
        setErrors({});
        if (
          userData?.email === autoFill?.email &&
          userData?.password === autoFill?.password
        ) {
          toast.success("Login successfully");
        } else {
          toast.error("Invalid email or password");
        }
      } catch (error) {
        const newErrors = {};
        error?.inner?.forEach((err) => {
          if (err?.path) newErrors[err?.path] = err?.message;
        });
        setErrors(newErrors);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
  };