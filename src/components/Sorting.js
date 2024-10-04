import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Sorting = () => {
  const { setSortOrder } = useContext(ProductContext);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="d-flex justify-content-lg-end align-items-center mt-3 mb-3">
      <label htmlFor="sort" className="me-lg-2 ms-md-5 ms-lg-0" style={{fontSize:'15px'}}>Sort by Price:</label>
      <select onChange={handleSortChange} className="form-select h-50 w-75  form-control form-control-lg custom-sort-input" id="sort">
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default Sorting;
