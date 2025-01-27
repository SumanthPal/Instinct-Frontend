import React, { useState } from 'react';

export default function CategoryFilter({ categories, selectedCategories, onChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      onChange([...selectedCategories, value]);
    } else {
      onChange(selectedCategories.filter((category) => category !== value));
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

    return (
    <div className="relative mb-8 w-full">
      <div className="relative inline-block text-left">
        <button
          type="button"
          onClick={toggleDropdown}
          className="origin-top-right inline-flex justify-center w-auto 
            rounded-full px-8 py-4
            bg-white/80 dark:bg-dark-profile-card/80 
            text-4xl font-semibold
            text-gray-900 dark:text-dark-text-white 
            border border-transparent
            hover:border-white/20 hover:shadow-lg
            transition-all duration-300 ease-in-out"
        >
          Filter by Categories
        </button>
        {isDropdownOpen && (
          <div
            className="absolute left-0 mt-2 w-100 rounded-lg 
              bg-white/90 dark:bg-dark-card/90 
              shadow-lg ring-1 ring-black/5
              backdrop-blur-sm
              z-10"
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="py-2" role="menu" aria-orientation="vertical">
              {categories.map((category) => (
                <label 
                  key={category} 
                  className="flex items-center space-x-3 px-6 py-3 
                    hover:bg-lavender/20 dark:hover:bg-dark-gradient-start
                    transition-colors duration-200
                    text-2xl cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={handleCategoryChange}
                    className="w-5 h-5 accent-lavender 
                      checked:bg-lavender checked:border-transparent
                      focus:ring-lavender focus:ring-2
                      cursor-pointer"
                      
                  />
                  <span className="text-gray-900 dark:text-dark-text opacity-50">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
