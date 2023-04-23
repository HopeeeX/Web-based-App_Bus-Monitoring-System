import React from 'react';
import ForgotPassword from './pages/common/ForgotPassword';
import LoginPage from './pages/common/LoginPage';
import DriverDB from './pages/driver/DriverDB';
import DriverMain from './pages/driver/DriverMain';
import DriverReports from './pages/driver/DriverReports';
import DriverTrips from './pages/driver/DriverTrips';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path='/driver/*' element={<DriverDB />}>
          <Route index element={<DriverMain />} />
          <Route path='reports' element={<DriverReports />} />
          <Route path='trips' element={<DriverTrips />} />
        </Route>
      </Routes>
  );
}

export default App;