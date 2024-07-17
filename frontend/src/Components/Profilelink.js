import React from 'react';
import { FaGithub, FaLinkedin, FaBehance, FaHackerrank, FaStackOverflow } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { profileLinks } from "../Details";  // adjust the path as necessary

const ProfileLinks = () => {
  const iconMap = {
    FaGithub: FaGithub,
    FaLinkedin: FaLinkedin,
    FaBehance: FaBehance,
    FaHackerrank: FaHackerrank,
    FaStackOverflow: FaStackOverflow,
    SiLeetcode: SiLeetcode,
    SiGeeksforgeeks: SiGeeksforgeeks,
    MdEmail: MdEmail,
  };

  return (
    <main className='container mx-auto max-w-screen-xl pb-20 mt-10 gap-8'>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-8 text-center">
      You Can Find Me On
    </h1>
        <div className="container mx-auto max-w-screen-xl p-6 rounded-lg bg-dark-card mt-10 overflow-hidden shadow-lg shadow-slate-900">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {profileLinks.map((link, index) => {
                    const IconComponent = iconMap[link.icon];
                    return (
                        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                           className="text-lg text-blue-400 hover:underline  flex flex-col items-center space-y-2">
                            <IconComponent size={30} />
                            <span>{link.name}</span>
                        </a>
                    );
                })}
            </div>
        </div>
    </main>
  );
};

export default ProfileLinks;
