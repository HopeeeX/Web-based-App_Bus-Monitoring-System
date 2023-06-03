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
import MechanicApproved from './pages/mechanic/MechanicApproved'
import MechanicUnapproved from './pages/mechanic/MechanicUnapproved'
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
import AdminList from './pages/admin/AdminList';
import PassengerOnlyRoute from './components/Auth/PassengerOnlyRoute';
import InspectionData from './pages/common/InspectionData';
import MechanicPending from './pages/mechanic/MechanicPending';


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/forgot' element={<ForgotPassword />} />
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

        <Route path='/mechanic/*' element= {<ProtectedRoute>
          <MechanicDB/> </ProtectedRoute>}> 
        <Route index element={<MechanicPending/>}/>
        <Route path = 'approved' element = {<MechanicApproved/>}/>
        <Route path = 'unapproved' element = {<MechanicUnapproved/>}/>
        <Route path = 'viewInspection' element = {<InspectionData/>}/>
        </Route>
        
        <Route path='/admin/*' element= {<ProtectedRoute>
        <AdminDB/>
        </ProtectedRoute>}>
          <Route index element={<AdminDriver/>}/>
          <Route path = 'list' element = {<AdminList/>}/>
          <Route path ='mechanic' element={<AdminMechanic/>}/>
          <Route path ='bus' element={<AdminBus/>}/>
          <Route path ='route' element={<AdminRoute/>}/>
          <Route path ='reports' element={<AdminReport/>}/>
          <Route path ='trips' element={<AdminTrips/>}/>
        </Route>
        <Route path=':busID' element={<PassengerOnlyRoute>
          <Passenger/>
        </PassengerOnlyRoute>
          } />

      </Routes>
    </AuthProvider>

  );
}

export default App;