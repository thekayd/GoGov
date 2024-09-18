'use client'; // Add this line at the top of the file
import React from 'react';

interface InputFieldProps {
  label: string;
  placeholder: string;
  type: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, type }) => {
  return (
    <div className="mb-4 w-full max-w-md">
      <label className="block font-poppins font-medium text-base text-black mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-3 border rounded-lg text-sm text-gray-500 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default InputField;