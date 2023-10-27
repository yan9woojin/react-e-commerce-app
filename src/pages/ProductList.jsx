import { useLoaderData } from "react-router-dom";
import api from "../api";
import ProductCard from "../components/ProductCard";
import { links } from "../constants";

export async function productListLoader({ params }) {
  const category = links.find((link) =>
    link.path.includes(params.category),
  ).category;
  const products = await api.getProducts(category);
  return products;
}

export default function ProductList() {
  const products = useLoaderData();

  return (
    <main>
      <ul className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
    </main>
  );
}
