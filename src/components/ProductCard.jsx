import { Link } from "react-router-dom";

export default function ProductCard({ id, title, image, price }) {
  return (
    <li className="h-[420px] max-w-[300px] border bg-white transition duration-300 ease-in-out hover:brightness-90">
      <Link
        to={`./${id}`}
        className="flex h-full w-full flex-col justify-start gap-1 p-4"
      >
        <img
          src={image}
          alt={title}
          className="h-[300px] self-center object-scale-down p-4"
        />
        <p className="line-clamp-2 grow font-light">{title}</p>
        <p className="font-bold">$ {price}</p>
      </Link>
    </li>
  );
}
