import React from 'react';

function FilterButtons({ currentFilter, onFilterChange }) {
  return (
    <div className="filter-buttons">
      <button onClick={() => onFilterChange('all')} className={currentFilter === 'all' ? 'active' : ''}>Tümü</button>
      <button onClick={() => onFilterChange('completed')} className={currentFilter === 'completed' ? 'active' : ''}>Tamamlanan</button>
      <button onClick={() => onFilterChange('incomplete')} className={currentFilter === 'incomplete' ? 'active' : ''}>Tamamlanmamış</button>
    </div>
  );
}

export default FilterButtons;
