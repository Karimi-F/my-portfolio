"use client";

import Button from "@/components/button/button";
import NavBar from "../navbar/page";
import Logo from "@/components/logo";
import { BrushIcon, CodeIcon, DatabaseIcon, FileTextIcon, Github, Instagram, LayoutIcon, Linkedin, LinkIcon, Twitter } from 'lucide-react';
import Services from "../services/page";
import About from "../about/page";
import Experience from "../experience/page";
import Contact from "../contact/page";
import Footer from "../footer/page";

export default function Home() {
  return (
    <div className="bg-slate-900">
      <div className="flex justify-around p-5">
        <div>
        <h1 className="text-2xl">I am a </h1>
      <div className="w-1/2 py-5">
        <div className="w-3/4">
          <h2 className="text-6xl">FULL STACK SOFTWARE ENGINEER</h2>
        </div>
        </div>
        
      </div>
      
        <div className="align-center">
        <img
            src="/images/Personal Profile Image.jpg"
            alt="Profile Image"
            className="w-72 h-64 rounded-full"
          />
        </div>
      </div>
      

      <Button className="m-4">Previous Projects</Button>

      
    </div>
  );
}
