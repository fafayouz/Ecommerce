import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Product = ({ products , addProduct }) => {
  return (
    <>
      <div className="Products-Container">
        {products.slice(-8).map((product) => {
          return (
            <div key={products.id}  className="Product-Cart">
              <Link to={`/product-view/${product.id}`} className="Product-Image">
                <img
                  src={product.image.url}
                  alt={product.name}
                  loading="lazy"
                />
              </Link>
              <div className="Product-Info">
                <span className="Product-Info-Name"> {product.name} </span>
                <span className="Product-Info-price"> {product.price.formatted_with_code} </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
