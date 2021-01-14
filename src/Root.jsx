import React, { Component } from "react";
import Panier from "./components/e-shop/panier";
import ProductList from "./components/e-shop/productList";
import CardProduct from "./components/e-shop/cardProduct";
import { products } from "./data/products";

class Root extends Component {
  state = {
    products: { products },
    current: 0,
  };

  render() {
    let componentsToRender = <h2>No elements to render</h2>;

    if (this.state.products.length) {
      componentsToRender = (
        <React.Fragment>
          <ProductList
            current={this.state.current}
            products={this.state.products}
            onNextProduct={this.handleNextProduct}
            onPrevProduct={this.handlePrevProduct}
          ></ProductList>
          <hr />
          <CardProduct
            current={this.state.current}
            product={this.state.products[this.state.current]}
            onProductChange={this.handleProductChange}
          ></CardProduct>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Panier
        current={this.state.current}
        products={this.state.products}
        ></Panier>
        <br />
        {componentsToRender}
      </React.Fragment>
    );
  }

  handleNextProduct = () => {
    const current =
      this.state.current === this.state.products.length - 1
        ? 0
        : this.state.current + 1;
    this.setState({ current: current });
  };

  handlePrevProduct = () => {
    const current =
      this.state.current === this.state.products.length - 1
        ? 0
        : this.state.current - 1;
    this.setState({ current: current });
  };

  handleNewProduct = (product) => {
    this.setState({ products: [...this.state.products, product] });
  };
}

export default Root;
