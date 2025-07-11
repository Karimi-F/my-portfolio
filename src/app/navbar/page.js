"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for hamburger and close button
import Button from "@/components/button/button";
import Logo from "@/components/logo";

export default function NavBar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClick = () => {
    console.log("Navbar button clicked!");
  };

  return (
    <div className="p-2 flex justify-between items-center relative bg-gray-900 text-white">
      {/* Logo */}
      <Logo />

      {/* Hamburger Menu Button (Visible on Small Screens) */}
      <button onClick={toggleMenu} className="md:hidden">
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Desktop Navigation (Hidden on Small Screens) */}
      <nav className="hidden md:flex space-x-8 text-lg font-semibold">
        {["home", "about", "projects", "services", "experience", "contact"].map((item) => (
          <span
            key={item}
            className="cursor-pointer hover:text-gray-300"
            onClick={() => onNavigate(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </span>
        ))}
      </nav>

      {/* Desktop CV Button (Hidden on Small Screens) */}
      <Button onClick={handleClick} className="hidden md:block">
        Download CV
      </Button>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="absolute top-16 right-0 w-1/2 bg-gray-800 text-white flex flex-col items-end p-4 space-y-4 md:hidden">
          {["home", "about", "projects", "services", "experience", "contact"].map((item) => (
            <span
              key={item}
              className="cursor-pointer hover:text-gray-300"
              onClick={() => {
                onNavigate(item);
                setMenuOpen(false); 
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          ))}
          <Button onClick={handleClick}>Download CV</Button>
        </div>
      )}
    </div>
  );
}
