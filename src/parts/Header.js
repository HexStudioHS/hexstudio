/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Transition } from '@headlessui/react';
import { useLocation } from 'react-router-dom';

import Button from '../elements/Button';
import BrandIcon from './BrandIcon';

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="header sticky top-0 z-50 bg-white shadow-sm">

      {/* Top Row */}
      <div className="flex justify-between items-center px-4 py-2 lg:px-10 lg:py-4">

        <BrandIcon />

        {/* Hamburger button */}
        <button
          className="lg:hidden text-theme-blue focus:outline-none"
          onClick={() => setIsCollapse(!isCollapse)}
        >
          {!isCollapse ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex flex-row items-center mt-0 text-theme-blue tracking-widest">
        <li>
          <Button
            className={`${path === '/' ? 'active-link' : ''} font-medium text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/"
          >
            Home
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            className={`${path === '/team' ? 'active-link' : ''} font-medium text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/team"
          >
            Founders
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            className={`${path === '/project' ? 'active-link' : ''} font-medium text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/project"
          >
            Project
          </Button>
        </li>
        <li>
          <Button
            className="font-medium text-lg ml-3 px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200"
            type="link"
            href="/discuss-project"
          >
            Discuss Project
          </Button>
        </li>
      </ul>

      {/* Mobile Menu (transitioned) */}
      <Transition
        show={isCollapse}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul className="lg:hidden flex flex-col text-theme-blue tracking-widest bg-white absolute top-full left-0 w-full border-t border-gray-300 shadow-md py-4">
          <li className="py-2 px-4">
            <Button
              className={`${path === '/' ? 'active-link' : ''} font-medium no-underline hover:underline`}
              type="link"
              href="/"
            >
              Home
            </Button>
          </li>
          <li className="py-2 px-4">
            <Button
              className={`${path === '/team' ? 'active-link' : ''} font-medium no-underline hover:underline`}
              type="link"
              href="/team"
            >
              Founders
            </Button>
          </li>
          <li className="py-2 px-4">
            <Button
              className={`${path === '/project' ? 'active-link' : ''} font-medium no-underline hover:underline`}
              type="link"
              href="/project"
            >
              Project
            </Button>
          </li>
          <li className="py-3 px-4">
            <Button
              className="font-bold block w-full text-center px-5 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200"
              type="link"
              href="/discuss-project"
            >
              Discuss Project
            </Button>
          </li>
        </ul>
      </Transition>
    </header>
  );
}
