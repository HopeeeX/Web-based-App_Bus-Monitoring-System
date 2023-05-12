import React from 'react';
import ForgotPassword from './pages/common/ForgotPassword';
import LoginPage from './pages/common/LoginPage';
import DriverDB from './pages/driver/DriverDB';
import DriverMain from './pages/driver/DriverMain';
import DriverReports from './pages/driver/DriverReports';
import DriverTrips from './pages/driver/DriverTrips';
import Inspection from './pages/driver/InspectionChecklist';
import MechanicDB from './pages/mechanic/MechanicDB';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/Auth/Auth';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { InspectionProvider } from './pages/driver/inspectionLists/InspectionContext';
import AdminDB from './pages/admin/AdminDB';


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/forgot' element={<ForgotPassword />} />
        {/* <Route path='/driver/*' element={<DriverDB />}> */}
          {/*Protected Route when Auth is Enabled*/}
        <Route path='/driver/*' element={<ProtectedRoute>
          <DriverDB />
        </ProtectedRoute>}>
          <Route index element={<DriverMain />} />
          <Route path='reports' element={<DriverReports />} />
          <Route path='trips' element={<DriverTrips />} />
        </Route>
        <Route path='inspection' element={<ProtectedRoute>
          <InspectionProvider>
          <Inspection/>
          </InspectionProvider>

        </ProtectedRoute>} />
        <Route path='/mechanic/*' element= {<MechanicDB/>} />

        <Route path='/admin/*' element= {<AdminDB/>} />

      </Routes>
    </AuthProvider>

  );
}

export default App;