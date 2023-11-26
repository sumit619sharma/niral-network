
import './App.css';
 import { Navigate ,  BrowserRouter as Router, Route , Routes } from 'react-router-dom';
 
 import Login from './components/Login';
 import Portfolio from './components/Portfolio';
import React ,{ useEffect ,  } from 'react';


function App() {
  const user = localStorage.getItem('user')
  
   
 

  return (
    <div className="App">
    <Router>
    <Routes>
     <Route path='/' element={<Login/>} />
     <Route path='/portfolio'  element={ (user ? <Portfolio/> 
       : <Navigate to='/' replace={true} /> ) } />
     <Route path='*' element={<Login/>} />
       </Routes>
       </Router>
     </div>
  );
}

export default App;
