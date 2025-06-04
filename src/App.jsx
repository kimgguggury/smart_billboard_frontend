import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom';
import LoginPage from './page/LoginPage/LoginPage';
import RegisterPage from './page/RegisterPage/RegisterPage'
import Home from './page/MainPage/Home'
import Create from './page/MainPage/Create';
import ProtectedRoute from './components/ProtectedRoute';
import Update from './page/MainPage/Update';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route path="/login" element={ <LoginPage/>} />
        <Route path="/Register" element={<RegisterPage/>} />
         <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
            }
          />
        <Route path="/Create" element={<Create/>}/>
        <Route path="/Update" element={<Update/>}/>
     </Routes>
    </>
  )
}

export default App
