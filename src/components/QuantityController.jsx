import { MdAdd, MdRemove } from "react-icons/md";

export default function QuantityController({
  quantity,
  onClickAdd,
  onClickRemove,
}) {
  return (
    <div className="flex items-center justify-center gap-0.5 text-xl">
      <button
        type="button"
        onClick={onClickRemove}
        disabled={quantity === 1}
        className="btn"
      >
        <MdRemove className="h-5 w-5" />
      </button>
      <span className="w-6 text-center font-light">{quantity}</span>
      <button type="button" onClick={onClickAdd} className="btn">
        <MdAdd className="h-5 w-5" />
      </button>
    </div>
  );
}
