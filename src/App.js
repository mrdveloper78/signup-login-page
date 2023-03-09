import './App.css';
import SignUp from './Components/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login';
import { Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return(
    <div className='flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Navigate to={'/signup'} />} /> {/*redirect*/}
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    <ToastContainer/>
    </div>
  )
}

export default App;