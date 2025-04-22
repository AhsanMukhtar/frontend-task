import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const CommonInputField = ({
  label,
  name,
  type,
  value,
  onChange,
  error,
  placeholder,
  autoComplete,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <div className="password-input">
          <input
            type={type == "password" && visible ? "text" : type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={error ? "error" : ""}
            placeholder={placeholder}
            autoComplete={autoComplete}
          />
          {type == "password" && (
            <button
              type="button"
              className="toggle-password"
              onClick={() => setVisible(!visible)}
              aria-label={visible ? "Hide password" : "Show password"}
            >
              {visible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
        {error && <span className="error-message">{error}</span>}
      </div>
    </>
  );
};

export default CommonInputField;
