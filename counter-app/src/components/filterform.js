import React from 'react';

function FilterForm({ filter, setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter('All')}>All</button>
      <button onClick={() => setFilter('Completed')}>Completed</button>
      <button onClick={() => setFilter('Pending')}>Pending</button>
    </div>
  );
}

export default FilterForm;
