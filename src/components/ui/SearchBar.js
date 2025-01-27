import React from 'react';

export default function SearchBar({ value, onChange, onEnter }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onEnter();
    }
  };

  return (
    <input
      type="text"
      placeholder="Search clubs..."
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      className="mb-8 p-6 px-40 text-4xl font-semibold dark:to-dark-gradient-start border border-gray-300 rounded-full w-[900px] shadow-md" // Fixed width
    />
  );
}