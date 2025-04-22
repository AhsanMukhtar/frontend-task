import React from "react";

const CommonButton = ({ type, name, loading }) => {
  return (
    <button
      type={type}
      className={`submit-button ${loading ? "submitting" : ""}`}
      disabled={loading}
    >
      {loading ? "loading..." : name}
    </button>
  );
};

export default CommonButton;
