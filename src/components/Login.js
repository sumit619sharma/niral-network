import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userDetail, setUserDetail] = useState({
    name: '',
    password: '',
  });
 const navigate = useNavigate();

  const handleFormData = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user' , JSON.stringify(userDetail))
   navigate('/portfolio')
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={userDetail.name}
            required={true}
            onChange={handleFormData}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={userDetail.password}
            required={true}
            onChange={handleFormData}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
