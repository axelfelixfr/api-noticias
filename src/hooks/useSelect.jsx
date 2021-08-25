import React, { useState } from 'react';

export const useSelect = (initialState, options) => {
  const [category, setCategory] = useState(initialState);

  const SelectNews = () => (
    <select
      className="browser-default"
      value={category}
      onChange={e => setCategory(e.target.value)}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
  return [category, SelectNews];
};
