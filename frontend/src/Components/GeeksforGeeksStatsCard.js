import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SiGeeksforgeeks } from 'react-icons/si';
import Loader from './Loader';

const GeeksforGeeksStatsCard = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.SERVER_URI);
        if (response.data) {
          setStats(response.data);
          setError(null);
        } else {
          setError('Failed to fetch data');
        }
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setIsLoading(false); // Set loading to false when done
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />; // Show preloader while loading
  }

  return (
    <main className='container mx-auto max-w-screen-sm pb-3 mt-10 backdrop-blur-lg '>
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-cyan-400 font-bold mb-8 text-center">
        GeeksforGeeks
      </h2>
      <div className="px-6 py-4  backdrop-blur-lg border border-gray-300 shadow-2xl shadow-indigo-500/40 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <SiGeeksforgeeks className="text-4xl text-green-500 mr-4" />
            <div className="font-bold text-2xl text-white">Shinkhal</div>
          </div>
          <div className="font-bold text-2xl text-white">#{stats && stats.rank}</div>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        {stats && (
          <div className='text-white p-2'>
            <p>Institute Name: {stats.instituteName}</p>
            <p>Languages: {stats.languages}</p>
            <p>Streak: {stats.streak}</p>
            <p>Overall Score: {stats.overallScore}</p>
            <p>Monthly Score: {stats.monthlyScore}</p>
            <p>Total Problems Solved: {stats.totalSolved}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default GeeksforGeeksStatsCard;
