import React, { useState } from 'react';
import API from '../api';

const PostJob = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlePost = async () => {
    await API.post('/jobs', { title, description });
    alert('Job posted');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
    <h2 className="text-2xl font-semibold mb-6 text-center">Post a New Job</h2>
    <input placeholder="Title" className="input" value={title} onChange={e => setTitle(e.target.value)} />
    <textarea placeholder="Description" rows="5" className="input" value={description} onChange={e => setDescription(e.target.value)} />
    <button onClick={handlePost} className="btn">Submit Job</button>
  </div>
</div>

  );
};

export default PostJob;
