import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product, { productLoader } from "./pages/Product";
import ProductList, { productListLoader } from "./pages/ProductList";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: ":category",
        element: <ProductList />,
        loader: productListLoader,
      },
      {
        path: ":category/:productId",
        element: <Product />,
        loader: productLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
