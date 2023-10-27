import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-center gap-20">
      <p className="text-center text-8xl font-bold uppercase">
        New Product Arrival
      </p>
      <Link to="/men" className="btn btn-outline">
        Shop Now
      </Link>
    </main>
  );
}
