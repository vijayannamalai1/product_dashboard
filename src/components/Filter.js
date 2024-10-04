import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Filter = () => {
  const { setFilter } = useContext(ProductContext);

  return (
    <select onChange={(e) => setFilter(e.target.value)} className="form-select h-50 w-25 custom-filter-input">
      <option value="">All Categories</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewelry</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
    </select>
  );
};

export default Filter;
