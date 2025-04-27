
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Product from "../Page/Product/Product";
import ErrorPage from './../Page/ErrorPage/ErrorPage';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Product />,
      },
    ],
  },
]);
