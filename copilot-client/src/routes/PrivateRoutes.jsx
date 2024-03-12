import useAuth from "../hooks/useAuth";
import { useLocation, Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    <p className="text-7xl">Loading....</p>;
  }

  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate to="/login" state={{ from: location }} replace />
    </div>
  );
};

export default PrivateRoutes;
