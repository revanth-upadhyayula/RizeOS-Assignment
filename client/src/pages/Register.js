import React, { useState } from 'react';
import API from '../api';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const res = await API.post('/register', { name, email, password });
    alert('Registered: ' + res.data.email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
  </div>
</div>

  );
};

export default Register;
