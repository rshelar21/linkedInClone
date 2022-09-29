import React , {useEffect, useState}from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './pages/Login';
import Home from './pages/Home';
import {auth} from "./firebase"
import { onAuthStateChanged } from 'firebase/auth';
// import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {logOUt, login} from "./features/userSlice"

function App() {
  const [data, setData] = useState();
  // const navigate = useNavigate();
  const dispacth = useDispatch();
  useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
        if(user){
            setData(user)
            // navigate("/home");
            setDispatch(user)
        }
    })
}, [])
const setDispatch = (user) => {
  dispacth(
      login(
          {
              name : user.displayName,
              email : user.email,
              img : user.photoURL,
      
          }
      )
  )
}
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}>
          </Route>
          <Route path='/home' element={<Home/>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
