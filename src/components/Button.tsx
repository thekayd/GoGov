"use client"; // Add this line at the top of the file
import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="w-full max-w-md p-3 bg-blue-600 text-white font-poppins font-bold text-sm rounded-lg hover:bg-blue-700 transition">
      {label}
    </button>
  );
};

export default Button;
