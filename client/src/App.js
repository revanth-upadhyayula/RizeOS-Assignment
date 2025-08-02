import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import JobBoard from './pages/JobBoard';
import PostJob from './pages/PostJob';
import Landing from './pages/Landing';

const isAuthenticated = () => !!localStorage.getItem('token');

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={isAuthenticated() ? <Navigate to="/jobs" /> : <Login />} />
        <Route path="/register" element={isAuthenticated() ? <Navigate to="/jobs" /> : <Register />} />
        <Route path="/jobs" element={isAuthenticated() ? <JobBoard /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated() ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/post" element={isAuthenticated() ? <PostJob /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
