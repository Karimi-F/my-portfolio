"use client"

import Button from "@/components/button/button";

export default function About () {
    return (
        <div className="flex justify-around gap-20">
                <div>
                  <img
                    src="/images/ProfileImage.jpg"
                    alt="Profile Image"
                    width={1200}
                    height={1200}
                    className="rounded-xl"
                  />
                </div>
                <div id="#about" className="w-3/4">
                  <h3 className="py-5 text-xl">ABOUT ME</h3>
                  <p className="p-5">
                    Hi, I'm Karimi Fridah 👋 I'm a full-stack web developer with a
                    passion for EdTech and making education more engaging through
                    technology. With expertise in React, Next.js, Flask, and PostgreSQL,
                    I love building scalable applications that enhance learning
                    experiences. My journey into web development started with a
                    curiosity for how technology can transform education, and now I'm
                    dedicated to creating user-friendly solutions that empower learners
                    and educators. When I'm not coding, you’ll find me learning
                    Mandarin, doing calisthenics, or documenting my journey online. I
                    believe in continuous learning and love exploring new ideas. Let's
                    connect! If you’re working on something exciting in EdTech or web
                    development, I'd love to chat. Reach out via [LinkedIn/email].
                  </p>
                  <div className="flex justify-between gap-60">
                    <Button>HIRE ME</Button>
                    <Button>RESUME</Button>
                  </div>
                </div>
              </div>
    )
}