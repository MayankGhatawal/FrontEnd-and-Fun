import React, { useState } from 'react';

function CategoryForm({ addCategory }) {
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category) {
      addCategory(category);
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="New Category"
      />
      <button type="submit">Add Category</button>
    </form>
  );
}

export default CategoryForm;
