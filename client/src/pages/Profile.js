import React, { useEffect, useState } from 'react';
import API from '../api';

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    API.get('/me').then(res => setProfile(res.data));
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">👋 Hello, {profile.name}</h1>
      <p className="text-gray-600">Email: {profile.email}</p>
    </div>
  );
  
};

export default Profile;
