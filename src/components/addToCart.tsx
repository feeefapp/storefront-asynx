import React, { useContext } from "react";
import { CartContext } from "../contex";
import { LocalOrderItem } from "src/pishop/models";

const AddToCart: React.FC<{ item: LocalOrderItem }> = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (!item) {
      window.alert("Please select a product before adding to cart.");
      return;
    }
    addToCart(item);
  };
  return (
    <button
      className="bg-p  text-white font-bold py-2 px-4 rounded  m-4"
      onClick={handleAddToCart}
    >
      اضافة الى السلة
    </button>
  );
};

export default AddToCart;
