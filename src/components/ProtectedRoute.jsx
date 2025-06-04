import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/check', { withCredentials: true })
      .then(res => setIsAuth(res.data.loggedIn))
      .catch(() => setIsAuth(false));
  }, []);

  if (isAuth === null) return <div>Loading...</div>;

  return isAuth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
