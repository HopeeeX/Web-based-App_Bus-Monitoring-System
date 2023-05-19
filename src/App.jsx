import React from 'react';
import ForgotPassword from './pages/common/ForgotPassword';
import LoginPage from './pages/common/LoginPage';
import DriverDB from './pages/driver/DriverDB';
import DriverMain from './pages/driver/DriverMain';
import DriverReports from './pages/driver/DriverReports';
import DriverTrips from './pages/driver/DriverTrips';
import Inspection from './pages/driver/InspectionChecklist';
import Passenger from './pages/passenger/MainPageScreen';
import MechanicDB from './pages/mechanic/MechanicDB';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/Auth/Auth';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { InspectionProvider } from './pages/driver/inspectionLists/InspectionContext';
import AdminDB from './pages/admin/AdminDB';
import AdminDriver from './pages/admin/AdminDriver'
import AdminMechanic from './pages/admin/AdminMechanic'
import AdminBus from './pages/admin/AdminBus'
import AdminRoute from './pages/admin/AdminRoute'
import AdminReport from './pages/admin/AdminReports'
import AdminTrips from './pages/admin/AdminTrips'


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
        </ProtectedRoute>}/>
        <Route path='/mechanic/*' element= {<MechanicDB/>} />
        
        <Route path='/admin/*' element= {<ProtectedRoute>
        <AdminDB/>
        </ProtectedRoute>}>
          <Route index element={<AdminDriver/>}/>
          <Route path ='mechanic' element={<AdminMechanic/>}/>
          <Route path ='bus' element={<AdminBus/>}/>
          <Route path ='route' element={<AdminRoute/>}/>
          <Route path ='reports' element={<AdminReport/>}/>
          <Route path ='trips' element={<AdminTrips/>}/>
        </Route>
        <Route path='passenger' element={<Passenger/>} />

      </Routes>
    </AuthProvider>

  );
}

export default App;