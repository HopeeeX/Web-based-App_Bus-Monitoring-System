/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from './Auth';

const ProtectedRoute = ({ children }) => {

  if (!document.cookie.includes('session=')) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;