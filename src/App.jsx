import './App.css';
import ForgotPassword from './pages/common/ForgotPassword';
import LoginPage from './pages/common/LoginPage';
import { Routes, Route} from 'react-router-dom';

function App() {
  return(
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/forgot' element={<ForgotPassword/>}/>
    </Routes>
  )
}

export default App;
