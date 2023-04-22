import './App.css';
import ForgotPassword from './pages/common/ForgotPassword';
import LoginScreen from './pages/common/LoginScreen';
import { Routes, Route} from 'react-router-dom';

function App() {
  return(
    <Routes>
      <Route path='/' element={<LoginScreen/>}/>
      <Route path='/forgot' element={<ForgotPassword/>}/>
    </Routes>
  )
}

export default App;
