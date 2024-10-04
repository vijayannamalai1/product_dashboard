import React, { createContext, useState, useEffect } from 'react';
import { fetchProducts } from '../services/api'; 

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productData = await fetchProducts(); 
        setProducts(productData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = products
    .filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(product => (filter ? product.category === filter : true))
    .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <ProductContext.Provider value={{
      products: currentProducts,
      loading,
      error,
      setFilter,
      setSearchTerm,
      setSortOrder,
      currentPage,
      totalPages,
      paginate
    }}>
      {children}
    </ProductContext.Provider>
  );
};
