import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900">    
      <main className="container mx-auto p-4 mt-40">
        <h2 className="text-3xl font-bold text-center text-white hover:scale-105">About Me</h2>
        <p className="mt-4 text-lg text-center text-gray-300">
          Hi! I'm Syeda Inshrah, a passionate Front End Developer with a love for creating beautiful and functional web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {/* Skills Card */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold">Skills</h3>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li className="flex items-center">
                <FaHtml5 className="mr-2 text-red-600" /> HTML & CSS
              </li>
              <li className="flex items-center">
                <FaJs className="mr-2 text-yellow-500" /> JavaScript & TypeScript
              </li>
              <li className="flex items-center">
                <FaReact className="mr-2 text-blue-500" /> React & Next.js
              </li>
              <li className="flex items-center">
                <SiTailwindcss className="mr-2 text-cyan-400" /> Tailwind CSS
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span> Responsive Design
              </li>
            </ul>
          </div>

          {/* Experience Card */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold">Experience</h3>
            <p className="mt-2">
              I have worked on various projects, both personal and professional, that have helped me develop my skills and knowledge in web development.
            </p>
            <p className="mt-2">
              I'm always eager to learn new technologies and improve my skills in order to deliver the best possible user experience.
            </p>
          </div>
        </div>

        {/* About Me Card */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl mt-10">
          <h3 className="text-2xl font-semibold">About Me</h3>
          <p className="mt-4">
            Hi! I'm Syeda Inshrah, a passionate Front End Developer with a love for creating beautiful and functional web applications.
          </p>
        </div>
      </main>
    </div>
  );
}
