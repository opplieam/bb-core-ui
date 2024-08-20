import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorNotFound from "./components/error/ErrorNotFound.tsx";

const router = createBrowserRouter([
  {
    path: "login",
    element: <h1>Login</h1>
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
