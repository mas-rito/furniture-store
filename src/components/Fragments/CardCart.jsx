import { useState } from "react";
import { x } from "../../constant/Icons";
import formatCurrency from "../../services/formatCurrenly";

const CardCart = (props) => {
  const { img, title, price, quantity, color } = props;
  const [quan, setQuan] = useState(quantity);

  const increase = () => {
    setQuan(quan + 1);
  };

  const decrease = () => {
    if (quan > 1) {
      setQuan(quan - 1);
    }
  };
  return (
    <div className="w-full flex py-6 border-b">
      <img src={img} alt="title" className="w-[80px] h-full object-cover" />
      <div className="pl-4 w-full">
        <div className="flex justify-between items-center font-semibold text-md">
          <h1>{title}</h1>
          <h1>{formatCurrency(price)}</h1>
        </div>
        <div className="flex justify-between items-center my-1">
          <p className="text-sm text-secondary">Color: Black</p>
          <button>{x}</button>
        </div>
        <div className="flex items-center border rounded w-fit font-semibold gap-x-4 py-2 px-2">
          <button onClick={decrease}>-</button>
          <p className="text-sm">{quan}</p>
          <button onClick={increase}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
