import useIsAuth from "@/hooks/useIsAuth";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, isSessionValid] = useIsAuth();
  console.log("isAuthenticated", isAuthenticated);
  console.log("isSessionValid", isSessionValid);

  if (isAuthenticated == null || isSessionValid == null) {
    // Return a loading state or a fallback UI
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to='/' />;
  }
  if (!isSessionValid) {
    localStorage.clear();
    return <Navigate to='/' />;
  } else return <>{children}</>;
};

export default ProtectedRoute;
