import { Navigate } from "react-router-dom";

function PrivateRoute() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return <h1>Main</h1>;
}

export default PrivateRoute;
