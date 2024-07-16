"use client";
import React from "react";
import {FaGithub, FaEnvelope, FaLinkedinIn} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-customGray  text-white py-4 mt-32">
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
        <p className="text-gray-400">
          Feel free to reach out to me on any platform.
        </p>
        <div className="mt-2 flex space-x-6 justify-center mb-4">
          <a
            href="https://linkedin.com/in/udvale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-silverCrest hover:text-silverCrestDark text-2xl"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/udvale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-silverCrest hover:text-silverCrestDark text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:udvlenkhtaivan@gmail.com"
            className="text-silverCrest hover:text-silverCrestDark text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>
        {/* <p className="text-gray-400 mt-4">
            Feel free to reach out to me on any platform.
          </p> */}
      </div>
    </footer>
  );
}

export default Footer;
