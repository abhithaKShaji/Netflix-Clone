import React from "react";
import "./App.css"
import {BrowserRouter as Router,Navigate,Route,Routes} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";


function App() {
  
  return (
    <div>
  <Router>
    <Routes>
    <Route  path='/' element={<LoginPage/>}/>
    <Route path="/Netflix-clone" element={<Navigate to="/" replace/>}/> 
    
    <Route path="/homepage" element={<HomePage/>}/>
    </Routes>   
 </Router>  
    </div>
  );
}

export default App;
