import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="p-4 bg-gray-900 text-white flex items-center justify-between shadow">
  <div className="font-bold text-xl">JobPortal</div>
  <div className="flex gap-4">
    <Link to="/" className="hover:text-blue-400">Home</Link>
    {isLoggedIn ? (
      <>
        <Link to="/jobs" className="hover:text-blue-400">Jobs</Link>
        <Link to="/post" className="hover:text-blue-400">Post</Link>
        <Link to="/profile" className="hover:text-blue-400">Profile</Link>
        <button onClick={handleLogout} className="text-red-400 hover:text-red-500">Logout</button>
      </>
    ) : (
      <>
        <Link to="/login" className="hover:text-blue-400">Login</Link>
        <Link to="/register" className="hover:text-blue-400">Register</Link>
      </>
    )}
  </div>
</nav>

  );
};

export default Navbar;
