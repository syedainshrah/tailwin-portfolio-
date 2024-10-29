import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 p-4 mt-16">
      <main className="container mx-auto mt-16">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-white">Contact Me</h2>
          <p className="text-lg text-center mt-2 text-gray-300">
            If you'd like to get in touch, feel free to reach out!
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-white">Email</h3>
            <p className="mt-2">
              <Link href="mailto:your-email@example.com" className="text-blue-400 hover:underline">
                faizzaibi137@gmail.com
              </Link>
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-white">Contact Form</h3>
            <form className="mt-4">
              <div className="mb-4">
                <label className="block text-lg text-gray-300">Name:</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-400 rounded bg-gray-800 text-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg text-gray-300">Email:</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-400 rounded bg-gray-800 text-white"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg text-gray-300">Message:</label>
                <textarea
                  className="w-full p-2 border border-gray-400 rounded bg-gray-800 text-white"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
