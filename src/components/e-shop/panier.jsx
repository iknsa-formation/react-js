import { Component } from "react";
import { products } from "../../data/products";

const Panier = (props) => {
  return (
    <div className="container">
      <div className="navbar navbar-light bg-danger">
        <div className="container-fluid">
          <form className="d-flex ">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
      <h2>Panier</h2>
      {products.slice(0, 5).map(({ productId }, index) => (
        <div key={index}>
          <p>Nombre d'items : {productId}</p>
          <p>total:</p>
        </div>
      ))}
    </div>
  );
};

export default Panier;
