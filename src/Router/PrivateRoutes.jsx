import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectToken } from '../Redux/Slices/UserSlices';

const PrivateRoutes = () => {
  const token = useSelector(selectToken);

  return token != null ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
