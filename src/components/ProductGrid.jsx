import React, { useState, useEffect } from 'react';
import './ProductGrid.css';
import './ProductCard.css';

const ProductGrid = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const editProduct = (productId) => {
    // Navigate to the product edit page or show a modal with edit form
    console.log(`Edit product with id: ${productId}`);
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-brand">{product.brand}</p>
            <div className="product-info">
              <p className="product-mrp">MRP: ₹{product.price}</p>
              <p className="product-discount">Discount: {product.discountPercentage}%</p>
            </div>
            <p className="product-discounted-price">Discounted Price: ₹{product.price - (product.price * product.discountPercentage / 100)}</p>
            <p className="product-sizes">For: {product.gender}</p>
            <p className="product-sizes">Sizes: {product.sizes.map(size => `${size.size} (Length: ${size.length})`).join(', ')}</p>
            <p className="product-description">{product.description}</p>
            <div className='buttons'>
              <button className="header-button edit-button" onClick={() => editProduct(product.id)}>Edit</button>
              <button className="header-button delete-button" onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
