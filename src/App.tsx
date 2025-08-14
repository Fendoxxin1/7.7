import { memo } from "react";
import { useRoutes } from "react-router-dom";

import Header from "./components/Header";
import ProductDetail from "./pages/product";
import Home from "./pages/home";
import Shop from "./pages/shop";

const App = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <main className="py-6 px-4 max-w-7xl mx-auto">
        {useRoutes([
          { path: "/", element: <Home /> },
          { path: "/shop", element: <Shop /> },
          { path: "/recipes/:id", element: <ProductDetail /> },
        ])}
      </main>
    </div>
  );
};

export default memo(App);
