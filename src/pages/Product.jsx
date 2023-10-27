import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";

import api from "../api";
import QuantityController from "../components/QuantityController";
import { addToCard } from "../features/cartSlice";

export async function productLoader({ params }) {
  const product = await api.getProduct(params.productId);
  return product;
}

export default function Product() {
  const product = useLoaderData();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [showCartMessage, setShowCartMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addToCard({ ...product, quantity }));
    setShowCartMessage(true);
  };

  return (
    <main className="mt-16 grid grid-cols-1 gap-8 p-4 md:grid-cols-2">
      <section className="mx-auto max-h-[600px] max-w-[500px]">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </section>
      <section className="space-y-8">
        <div className="flex flex-col gap-8">
          <p className="text-3xl font-semibold">{product.title}</p>
          <p className="font-light">{product.description}</p>
          <p className="text-4xl font-bold">$ {product.price}</p>
        </div>
        <div className="flex gap-8">
          <QuantityController
            quantity={quantity}
            onClickAdd={() => setQuantity((q) => q + 1)}
            onClickRemove={() => setQuantity((q) => q - 1)}
          />
          <form method="post" onSubmit={handleSubmit} className="relative">
            <button type="submit" className="btn btn-outline">
              장바구니에 담기
            </button>
            {showCartMessage && (
              <div className="absolute -left-[28px] top-full z-10 my-2 flex w-44 flex-col items-center gap-2 border bg-white p-4">
                <p className="text-xs">장바구니에 추가되었습니다.</p>
                <Link to="/cart" className="btn btn-primary w-fit text-sm">
                  장바구니로 이동하기
                </Link>
                <button
                  type="button"
                  onClick={() => setShowCartMessage(false)}
                  className="absolute right-1 top-1"
                >
                  <MdClose className="fill-neutral-500" />
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
