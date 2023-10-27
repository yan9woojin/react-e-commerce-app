import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { items, total } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <main className="container mx-auto p-4 text-center">
        <h1 className="my-4 text-4xl font-bold">장바구니</h1>
        <p className="text-xl">장바구니가 비어있습니다.</p>
      </main>
    );
  }

  return (
    <main className="container p-4">
      <h1 className="mb-4 text-center text-3xl font-bold">장바구니</h1>
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            <th scope="col" className="w-9/12">
              상품정보
            </th>
            <th scope="col" className="w-1/12">
              수량
            </th>
            <th scope="col" className="w-1/12">
              가격
            </th>
            <th scope="col" className="w-1/12">
              삭제
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </tbody>
      </table>

      <p className="my-4 text-right text-xl font-semibold">
        Total: $ {total.toFixed(2)}
      </p>
    </main>
  );
}
