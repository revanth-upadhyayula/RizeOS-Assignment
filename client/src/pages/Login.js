import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await API.post('/login', { email, password });
    localStorage.setItem('token', res.data.token);
    navigate('/jobs');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
    {/* input + button elements */}
  </div>
</div>

  );
};

export default Login;
