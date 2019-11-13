import React from "react";

function Plus() {
  return (
    <div className="plus">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        style={{ width: 20, height: 20 }}
        strokeLinejoin="round"
        strokeWidth="2"
        className="feather feather-plus-circle"
        color="#00CEBD"
        cursor="pointer"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 8L12 16"></path>
        <path d="M8 12L16 12"></path>
      </svg>
    </div>
  );
}

export default Plus;
