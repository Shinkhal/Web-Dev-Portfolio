import React from 'react';


const LeetCodeCalendar = () => {
  
  return (
    <main className='container mx-auto max-w-screen-xl pb-20 mt-10 backdrop-blur-lg'>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-cyan-400 font-bold mb-8 text-center">LeetCode Contributions</h2>
        <div className="container mx-auto max-w-screen-xl p-6 rounded-lg flex text-white justify-center ">
          <img
            src="https://leetcard.jacoblin.cool/shinkhal?theme=dark&font=Montserrat&ext=heatmap"
            alt="LeetCode Stats"
            className='border border-gray-300 shadow-2xl shadow-indigo-500/40 rounded-lg'
          />
        </div>

    </main>
      );
    };

export default LeetCodeCalendar;
