import React, { useEffect, useState } from 'react';
import API from '../api';

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.post('/match').then(res => setJobs(res.data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
  {jobs.map((job, idx) => (
    <div key={idx} className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
      <p className="text-gray-600 mt-2">{job.description}</p>
      <span className="inline-block mt-4 text-sm text-blue-600 font-medium">
        🔍 Match Score: {job.matchScore}
      </span>
    </div>
  ))}
</div>

  );
};

export default JobBoard;
