import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "p1",
    title: "Product 1",
    description: "This is product 1",
    price: 9.99,
  },
  {
    id: "p2",
    title: "Product 2",
    description: "This is product 2",
    price: 9.99,
  },
  {
    id: "p3",
    title: "Product 3",
    description: "This is product 3",
    price: 9.99,
  },
];

const Products = () => {
  return (
    <>
      <h1>My Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
