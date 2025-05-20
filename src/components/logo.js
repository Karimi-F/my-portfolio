"use client"

import React from "react";

export default function Logo({ className = "", size = "md" }) {
  // Size mapping
  const sizeMap = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  return (
    <div className={`relative ${sizeMap[size]} ${className}`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <path d="M30 20H80V40H50V50H75V70H50V80H30V20Z" fill="#4FD1C5" />
            <path d="M50 50C50 40 60 40 70 40V70C60 70 50 70 50 60V50Z" fill="#4FD1C5" />
        </svg>
    </div>
  );
}

