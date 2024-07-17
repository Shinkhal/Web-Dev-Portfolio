import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubCalendarComponent = ({ username }) => {
  return (
    <main className='container mx-auto max-w-screen-xl pb-20 mt-10 backdrop-blur-lg'>
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-cyan-400 font-bold mb-8 text-center">
      Github Contributions
    </h2>
      <div className="container mx-auto max-w-screen-lg p-6 text-white  border border-gray-300 shadow-2xl shadow-indigo-500/40 rounded-lg">
        <GitHubCalendar username={username} />
      </div>
      </main>
  );
};

export default GitHubCalendarComponent;
