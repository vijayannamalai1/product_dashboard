import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';

const ProductList = () => {
  const { products, loading, error } = useContext(ProductContext);

  if (loading) return <span className='loading-circle'></span>;
  if (error) return <div className='center'><div className='text-center'><FiAlertTriangle size={50} color="#aeaeae" /></div><span style={{color:'#797979'}}>Error: {error}</span></div>;

  return (
    <div className="row">
      {products.map(product => (
        <div className="col-md-6 col-lg-3" key={product.id}>
          <div className="card mb-4" style={{ padding: '10px', maxWidth: '320px', margin: '0 auto' }}>
            <img src={product.image} alt={product.title} className="card-img-top" style={{ maxWidth: '150px', display:'block', margin:'0 auto', padding:'10px' }}/>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
              <Link to={`/products/${product.id}`} className="btn btn-primary">Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
