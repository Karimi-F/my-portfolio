"use client";

import {
  BrushIcon,
  CodeIcon,
  DatabaseIcon,
  FileTextIcon,
  Github,
  Instagram,
  LayoutIcon,
  Linkedin,
  LinkIcon,
  Twitter,
} from "lucide-react";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.linkedin.com/in/fridah-karimi-a0240b237"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a
          href="https://instagram.com/wamwithakarimi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          <Instagram className="h-6 w-6" />
        </a>
        <a
          href="https://x.com/FridahK17605437"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <Twitter className="h-6 w-6" />
        </a>
        <a
          href="https://github.com/Karimi-F"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <Github className="h-6 w-6" />
        </a>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-4">
        <Logo />
      </div>

      {/* Quick Navigation Links */}
      <nav className="mb-4">
        <ul className="flex justify-center space-x-6 text-sm">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:underline">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Let's Work Together CTA */}
      <div className="mb-4">
        <p className="text-sm">
          Looking for a software engineer? Let's connect!
        </p>
        <a
          href="mailto:fridah37karimi@gmail.com?subject=Let's%20Connect&body=Hi%20Fridah,%20I%20came%20across%20your%20portfolio..."
          className="text-blue-400 hover:underline"
        >
          Contact Me
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Karimi Fridah. All rights reserved.
      </p>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-4 text-xs text-gray-400 hover:text-white transition"
      >
        ↑ Back to Top
      </button>
    </footer>
  );
}
