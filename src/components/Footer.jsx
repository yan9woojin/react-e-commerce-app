import { NavLink } from "react-router-dom";
import { links } from "../constants";

export default function Footer() {
  return (
    <footer className="container flex w-full items-center justify-center bg-neutral-50 px-4 py-8 text-neutral-600">
      <nav className="flex items-center justify-center gap-9">
        <span className="text-lg">Category</span>
        <ul className="flex gap-4 text-sm font-light">
          {links.map(({ title, path }) => (
            <li key={title} className="inline-block">
              <NavLink to={path}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
