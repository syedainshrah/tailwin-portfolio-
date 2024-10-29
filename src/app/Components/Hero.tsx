// Hero.tsx
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <main className="absolute top-24 left-0 right-0 flex items-center justify-between p-20">
      {/* Image on the left side */}
      <div className='flex items-center'>
        <div className="relative group"> {/* Group for hover effects */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-md group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src="/me.jpg" 
            alt="me"
            className="rounded-full object-cover mr-4 z-10 transition-transform duration-300 transform group-hover:scale-110" // Image scaling on hover
            width={300}
            height={200}
          />
        </div>
      </div>

      {/* Text on the right side */}
      <div className="flex flex-col items-start text-white">
        <p className="text-lg">I'm a Front End Developer passionate about creating beautiful</p>
        <p>and functional web applications. Let's build something amazing together!</p>

        <Link href="https://e-commerce-jqrt.vercel.app/">
          <button className='bg-red-600 hover:bg-red-800 font-semibold mt-4 inline-block text-white py-2 px-4 rounded ml-32'>
            View My Project
          </button>
        </Link>
      </div>
    </main>
  );
}
