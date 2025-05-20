"use client"

import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Button from "@/components/button/button";


export default function Contact () {
    return(
        <div className="rounded-4xl bg-slate-700 m-3">
        <h1 className="text-center p-5 text-xl">CONTACT ME</h1>
        <div className="flex justify-around">
          <div className="w-1/2">
            <h3 className="p-5 font-semibold text-xl">Let's work together</h3>
            <p className="p-3">I'm glad you've visited my personal portfolio website! 
              If you have any questions, suggestions, or would like to 
              collaborate, please feel free to contact me through this form.
              I will endeavour to reply to your message as soon as possible.
            </p>
            <div className="flex gap-2 p-3 py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <p>+254768672941</p>
            </div>

            <div className="flex gap-2 p-3 py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <p>fridah37karimi@gmail.com</p>
            </div>

            <div className="flex gap-2 p-3 py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <p>Nairobi, Kenya</p>
            </div>
            
          </div>
          <div className="p-4 w-1/2">
            <form className="p-4  bg-slate-800 rounded-xl">
              <input
                className="bg-slate-900 rounded-lg p-3 w-3/4"
                type="text"
                placeholder="Enter Your Name"
              />
              <br />
              <br />
              <input
                className="bg-slate-900 rounded-lg p-3 w-3/4"
                type="text"
                placeholder="Enter Your Email"
              />
              <br />
              <br />
              <input
                className="bg-slate-900 rounded-lg p-3 w-3/4"
                type="text"
                placeholder="Enter Your Message Subject"
              />
              <br />
              <br />
              <input
                className="bg-slate-900 rounded-lg p-3 py-7 w-3/4"
                type="text"
                placeholder="Enter Your Message"
              />
              <br />
              <br />
              <Button>Send</Button>
            </form>
          </div>
        </div>
      </div>
    )
}