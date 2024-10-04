import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';  

const ProductDetail = () => {
  const { id } = useParams();  // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productData = await fetchProductById(id);  // Fetch product data by ID
        setProduct(productData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);


  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);  
    const halfStar = rating % 1 >= 0.5;    
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); 


    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-light-black" />);  
    }

    
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-light-black" />);  
    }

   
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-light-black" />);  
    }

    return stars;
  };

  if (loading) return <span className='loading-circle'></span>;
  if (error) return <p className='center'>Error: {error}</p>;

  return (
    <div className="container mt-4 mb-5">
      <h2 className='text-center mb-5 page-title p-2'>Product Detail</h2>
      {product && (
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <img 
              src={product.image} 
              alt={product.title} 
              className="img-fluid" 
              style={{ maxWidth: '350px', display: 'block', margin: '35px auto' }}
            />
          </div>
          <div className="col-md-12 col-lg-8 p-3 p-md-5">
            <h2 className='mt-5 mt-md-2'>{product.title}</h2>
            <p className="text-muted">{product.category}</p>
            <p>{product.description}</p>
            <h3>${product.price}</h3>

            {/* Display Rating */}
            <div className="rating">
              <p className="mb-1">
                <strong>Rating:</strong>
              </p>
              <div className="d-flex align-items-center">
                {renderStars(product.rating?.rate)} 
                <span className="ms-2">{product.rating?.rate} / 5</span>
              </div>
              <p className="text-muted">
                <small>({product.rating?.count} reviews)</small>
              </p>
            </div>

            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      )}
      <div className='text-center'>
        <Link to='/' className='btn btn-primary btn-sm'>Go to home page</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
