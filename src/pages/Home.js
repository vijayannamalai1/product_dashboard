import React from 'react';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import SearchBar from '../components/SearchBar';
import Sorting from '../components/Sorting';
import Pagination from '../components/Pagination';

const Home = () => (
  <div className='mt-4 home'>
    <h2 className='text-center pb-2  p-2 page-title'>Product Dashboard</h2>
    <div className="d-flex justify-content-center justify-content-md-center justify-content-lg-between align-items-center flex-column flex-md-row mb-3">
      <SearchBar />
      <Filter />
      <Sorting />
    </div>
    <ProductList />
    <Pagination/>
  </div>
);

export default Home;
