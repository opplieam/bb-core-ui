import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorNotFound from "./components/error/ErrorNotFound.tsx";
import Login from "./components/login/Login.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import Callback from "./components/login/Callback.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "callback/:email/:token",
    element: <Callback />
  },
  {
    path: "*",
    element: <ErrorNotFound />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
