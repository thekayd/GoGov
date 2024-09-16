import React from 'react';

interface CalendarProps {
  className?: string;
}

export const Calendar: React.FC<CalendarProps> = ({ className }) => {
  return <div className={`border rounded p-4 ${className}`}>Calendar Placeholder</div>;
};