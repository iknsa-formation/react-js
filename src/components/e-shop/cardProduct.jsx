const CardProduct = (props) => {
  const { productCategory, productName, productImage, salePrice } = product;
  const { onAddProduct, product } = props;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={productImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <ul>
          <li className="list-group-item"> {productCategory}</li>
          <li className="list-group-item"> {salePrice}</li>
        </ul>
        <button onClick className="btn btn-success">
          Ajouter
        </button>
      </div>
    </div>
  );
};



export default CardProduct;
