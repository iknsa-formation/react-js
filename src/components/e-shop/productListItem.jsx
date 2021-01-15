

const ProductListItem = (props) => {
  const getListClasses = (index) => {
    const classes = "list-group-item";
    return props.current === index ? classes + " active" : classes;
  };
  return <li className={getListClasses(props.index)}></li>;
};

export default ProductListItem;
