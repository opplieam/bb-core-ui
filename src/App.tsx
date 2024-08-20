import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorNotFound from "./components/error/ErrorNotFound.tsx";
import Login from "./components/login/Login.tsx";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />
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
