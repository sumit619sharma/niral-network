import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    
    const navigate = useNavigate();

    const handleLogout =() => {
    localStorage.removeItem('user');
    navigate('/');
    }

  return (
    <div>
    <button onClick={handleLogout} className="btn btn-danger">LogOut</button>
    </div>
  )
}

export default LogOut;
