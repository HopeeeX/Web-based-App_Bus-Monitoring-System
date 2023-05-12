/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from './Auth';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();

  useEffect(() => {
    const handleSession = () => {
      // Check if the cookies are still present when the user leaves the page
      if (!document.cookie.includes('session=') || !document.cookie.includes('name=')) {
        // Cookies are missing, likely removed manually by the user
        logout() // Redirect to login page
      }
    };
    
  
    // Add event listener to the mousemove event
    document.body.addEventListener('mouseover', handleSession);
  
    // Cleanup function to remove event listener
    return () => {
      document.body.removeEventListener('mouseover', handleSession);
    };
  }, [logout, navigate]);
  

  if (!user && (!document.cookie.includes('session=') || !document.cookie.includes('name='))) {
    // User is not authenticated and cookies are missing, redirect to login
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
