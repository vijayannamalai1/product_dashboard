import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const SearchBar = () => {
  const { setSearchTerm } = useContext(ProductContext);

  return (
    <input
      type="text"
      className="form-control  h-50 w-50 custom-search-input mt-3 mb-3"
      placeholder="Search products..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />

  );
};

export default SearchBar;
