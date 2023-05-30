import React, { useState } from 'react';
import "../../assets/styles/mobile/SortAndFilter.css";


function SortAndFilter() {
  const [sortOption, setSortOption] = useState(''); // State for selected sort option
  const [filterOption, setFilterOption] = useState(''); // State for selected filter option

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleApply = () => {
    // Perform actions based on selected sort and filter options
    // For example, you can make an API call to fetch filtered and sorted data
    console.log('Sort option:', sortOption);
    console.log('Filter option:', filterOption);
  };

  return (
    <div className="sort-and-filter">
      <div className="sort-and-filter-container">
        <select id="sortOption" value={sortOption} onChange={handleSortChange}>
          <option value="">-- Select Sort Option --</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
          <option value="date">Date</option>
        </select>
        <select id="filterOption" value={filterOption} onChange={handleFilterChange}>
          <option value="">-- Select Filter Option --</option>
          <option value="category">Category</option>
          <option value="rating">Rating</option>
          <option value="availability">Availability</option>
        </select>
        <button onClick={handleApply}>Apply</button>
      </div>
    </div>
  );
}

export default SortAndFilter;
