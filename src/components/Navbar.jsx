import classNames from "classnames";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { links } from "../constants";

export default function Navbar() {
  const navLinkClassNames = ({ isActive }) =>
    classNames(
      "rounded p-2 transition duration-300 hover:backdrop-brightness-90",
      {
        "bg-blue-600 text-white": isActive,
      },
    );

  return (
    <header className="container fixed top-0 z-10 flex h-14 items-center justify-between gap-8 bg-white bg-opacity-50 px-4 py-2 transition duration-300 hover:bg-opacity-100">
      <div className="text-4xl font-bold">
        <NavLink to="/">Shop</NavLink>
      </div>
      <nav className="flex grow items-center justify-between">
        <ul className="flex gap-4">
          {links.map(({ title, path }) => (
            <li key={title}>
              <NavLink to={path} className={navLinkClassNames}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center">
          <li>
            <NavLink to="/cart" className={navLinkClassNames}>
              <MdOutlineShoppingCart className="h-6 w-6" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
