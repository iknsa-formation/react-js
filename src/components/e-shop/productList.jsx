import ProductListItem from "./productListItem";

const ProductList = (props) => {
  const { onPrevProduct } = props;
  const { onNextProduct } = props;

  return (
    <div>
      <ul className="list-group">
        {props.products.map((product, index) => (
          <ProductListItem
            key={index}
            index={index}
            current={props.current}
            product={product}
          ></ProductListItem>
        ))}
      </ul>
      <hr />
      <button className="btn btn-secondary" onClick={onPrevProduct}>
        Previous
      </button>
      <button className="btn btn-secondary" onClick={onNextProduct}>
        Next
      </button>
    </div>
  );
};

export default ProductList;
