import React, { useState } from 'react';
import { Link } from 'react-router';

const navLinks = [
  { title: 'About me', path: '/about' },
  { title: 'Resume', path: '/resume' },
  { title: 'Projects', path: '/projects' },
  { title: 'Contact', path: '/contact' },
];

function TopNavigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 no-underline">
              <h1 className="text-2xl font-bold text-gray-900">Zenia Villa</h1>
              <span className="text-gray-400 hidden sm:inline">/</span>
              <span className="text-sm text-gray-600 hidden sm:inline">Frontend Developer</span>
            </Link>

            <button
              onClick={() => setDrawerOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-md"
              aria-label="menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Mobile drawer */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-64 bg-white shadow-lg z-50 p-4">
            <button
              onClick={() => setDrawerOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-md mb-4"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.path}
                    onClick={() => setDrawerOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100 rounded-md text-gray-900 no-underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default TopNavigation;
