import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
// import Footer from './components/Layout/Footer'
// import Header from './components/Layout/Header'
// import Main from './components/Layout/Main'
// import Root from "./Pages/Root"
import HomePage from "./Pages/HomePage";
import Product from "./Shop/Product";
import NikePage from "./Pages/NikePage";
import AdidasPage from "./Pages/AdidasPage";
import PumaPage from "./Pages/PumaPage";
import Sketchers from "./Pages/SketchersPage";
import ErrorBoundary from "./Pages/ErrorBoundary";
import ProductDetail from "./Pages/ProductDetail";
import CartPage from "./Pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    element: <HomePage />,
    children: [
      {
        path: "",
        element: <Product />,
      },
      {
        path: "nike",
        element: <NikePage />,
      },
      {
        path: "adidas",
        element: <AdidasPage />,
      },
      {
        path: "puma",
        element: <PumaPage />,
      },
      {
        path: "sketchers",
        element: <Sketchers />,
      },
      {
        path: ":productId",
        element: <ProductDetail />,
      },
      {
        path: "cartpage",
        element: <CartPage />
      }
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
