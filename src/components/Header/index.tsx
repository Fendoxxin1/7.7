import { memo } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-green-600 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-2xl font-extrabold">
          <NavLink to="/">GreenMart</NavLink>
        </h1>
        <nav className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ${
                isActive
                  ? "text-yellow-300"
                  : "text-white hover:text-yellow-200"
              }`
            }
          >
            Bosh sahifa
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ${
                isActive
                  ? "text-yellow-300"
                  : "text-white hover:text-yellow-200"
              }`
            }
          >
            Shop
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
