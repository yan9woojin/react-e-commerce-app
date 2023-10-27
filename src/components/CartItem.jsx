import { MdClear } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseItem,
  increaseItem,
  removeFromCart,
} from "../features/cartSlice";
import QuantityController from "./QuantityController";

export default function CartItem({
  id,
  category,
  title,
  image,
  price,
  quantity,
}) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        <Link to={`/${category}/${id}`} className="flex items-center gap-1 p-2">
          <img
            src={image}
            alt={title}
            className="h-20 w-20 min-w-[80px] object-contain p-2"
          />
          <p className="line-clamp-3">{title}</p>
        </Link>
      </td>
      <td>
        <QuantityController
          quantity={quantity}
          onClickAdd={() => dispatch(increaseItem({ id }))}
          onClickRemove={() => dispatch(decreaseItem({ id }))}
        />
      </td>
      <td>
        <p className="mx-4 text-center">$ {(price * quantity).toFixed(2)}</p>
      </td>
      <td className="text-center">
        <button
          type="button"
          className="btn"
          onClick={() => dispatch(removeFromCart({ id }))}
        >
          <MdClear />
        </button>
      </td>
    </tr>
  );
}
