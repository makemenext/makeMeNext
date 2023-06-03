import React from 'react';
import "../../assets/styles/mobile/SortAndFilter.css";


function SortAndFilter() {

  return (
      <div class="pill-button">
        <div class="parent-sf-container">
          <div class="options">
            <div class="filter">
              <img
                src="https://cdn.igp.com/raw/upload/assets/svg-icons/Icon-Filter.svg"
                alt="FilterImage"
              />
              <div className='filter-text'> FILTER </div>
            </div>
            <p className='seperator'></p>
            <div class="sort">
              <img
                src="https://cdn.igp.com/raw/upload/assets/svg-icons/Icon-Sort.svg"
                alt="FilterImage"
              />
              <div className='sort-text'> SORT </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SortAndFilter;
