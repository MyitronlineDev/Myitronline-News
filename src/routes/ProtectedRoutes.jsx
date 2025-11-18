import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
    const isAuth = localStorage.getItem("token");

    if (!isAuth) return <Navigate to="/login" replace />

    return children;
}

export default ProtectedRoutes;