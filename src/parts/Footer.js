/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import {
  FiMail,
  FiMapPin,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';
import BrandIcon from './BrandIcon';
import Button from '../elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          {/* Brand Section */}
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              Code that Connects!
              <br />
              Design that Delivers!
            </p>
          </div>

          {/* Office Info */}
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Office</h1>
            <p className="text-lg text-gray-400 font-light flex items-center">
              <FiMail className="mr-2" /> hexstudiopvt.ltd@gmail.com
            </p>
            <p className="text-lg text-gray-400 font-light flex items-center">
              <FiMapPin className="mr-2" /> Metupalayam, Coimbatore
            </p>
          </div>

          {/* Social Icons */}
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Social</h1>
            <Button
              href="https://www.instagram.com/hexstudio_?igsh=MTE2ZGw2ZXQ0OTk0eA=="
              type="link"
              target="_blank"
              className="flex items-center text-lg text-gray-400 font-light hover:text-pink-500"
              isExternal
            >
              <FiInstagram className="mr-2" /> Instagram
            </Button>
            <Button
              href="https://www.linkedin.com/in/hexstudiohs/"
              type="link"
              target="_blank"
              className="flex items-center text-lg text-gray-400 font-light hover:text-blue-500"
              isExternal
            >
              <FiLinkedin className="mr-2" /> LinkedIn
            </Button>
            <Button
              href="https://x.com/_hexstudio_"
              type="link"
              target="_blank"
              className="flex items-center text-lg text-gray-400 font-light hover:text-sky-400"
              isExternal
            >
              <FiTwitter className="mr-2" /> Twitter
            </Button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2025 - All rights reserved - HexStudio
          </p>
          <div className="flex-row">
            <p className="inline-block text-lg text-gray-400 font-light">
              Made with &#x2764; by&nbsp;
            </p>
            <Button
              href="https://x.com/_hexstudio_"
              type="link"
              target="_blank"
              className="text-lg text-theme-purple font-light"
              isExternal
            >
              HexStudio Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
