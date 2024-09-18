import React, { useState } from 'react';

interface SelectProps {
  placeholder: string;
  children: React.ReactNode;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ placeholder, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        className="border rounded px-3 py-2 w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {placeholder}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border rounded mt-1">
          {children}
        </div>
      )}
    </div>
  );
};

export const SelectTrigger = Select;
export const SelectContent: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;
export const SelectItem: React.FC<{ children: React.ReactNode; value: string }> = ({ children, value }) => (
  <button
    type="button"
    className="block w-full text-left px-3 py-2 hover:bg-gray-100"
    value={value}
  >
    {children}
  </button>
);
export const SelectValue: React.FC<{ placeholder: string }> = ({ placeholder }) => <>{placeholder}</>;