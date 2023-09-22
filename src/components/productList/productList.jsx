import "./productList.css";
import ProductItem from "../productItem/productItem";
import { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";

const products = [
  { id: 1, title: "Куртка", price: 1000, description: "Зимняя" },
  { id: 2, title: "Джинсы", price: 1500, description: "Легкие, светлые" },
  { id: 3, title: "Рубашка", price: 500, description: "Летняя" },
  { id: 4, title: "Футболка", price: 300, description: "Белая" },
  { id: 5, title: "Шорты", price: 700, description: "Бежевые" },
  { id: 6, title: "Кепка", price: 200, description: "Синяя" },
];

const getTotalPrice = (item) => {
  return item.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);
  const { tg } = useTelegram();

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div className="list">
      {products.map((item) => (
        <ProductItem product={item} onAdd={onAdd} className={"item"} />
      ))}
    </div>
  );
};

export default ProductList;
