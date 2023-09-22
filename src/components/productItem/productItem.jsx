import "./productItem.css";
import Button from "../button/button";

const ProductItem = ({ product, className, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };

  return (
    <div className={"product " + className}>
      <div className="img"></div>
      <div className="title">{product.title}</div>
      <div className="description">{product.description}</div>
      <div className="price">
        <span className="price">
          Стоимость: <b>{product.price}</b>
        </span>
      </div>
      <Button onClick={onAddHandler} className="add-btn">
        Добавить в корзину
      </Button>
    </div>
  );
};

export default ProductItem;
