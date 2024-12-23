import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-4xl font-semibold mb-2">Data Fetching</h3>
            <p className="text-base">
              Learn and implement different types of <span className="text-blue-600">data fetching</span> techniques.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/client-fetch" className="hover:text-gray-400">
                  Client Side
                </Link>
              </li>
              <li>
                <Link href="/server-fetch" className="hover:text-gray-400">
                  Server Side
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">About This Project</h4>
            <p className="text-sm">
              This project demonstrates the implementation of data fetching techniques using Next.js, and modern JavaScript.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-white pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Data Fetching Assignment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
