import React from "react";

const Button = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
    >
      {value}
    </button>
  );
};

export default Button;
