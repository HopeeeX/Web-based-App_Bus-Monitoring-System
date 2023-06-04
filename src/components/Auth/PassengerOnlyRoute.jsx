/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from './Auth';
import Cookies from 'js-cookie';

const PassengerOnlyRoute = ({ children }) => {
  const { user } = UserAuth();
  

  if (user) {
    let path = '/' + Cookies.get("persona");
    return <Navigate to={path} />;
  }

  return children;
};

export default PassengerOnlyRoute;
