"use client";

export default function Projects() {
  return (
    <div>
      <h1 className="text-center">PROJECTS</h1>
      <div>
        <h5>
          <a href="https://hanzi-flashcards.vercel.app/">Hanzi Flashcards</a>
        </h5>
        <div className="flex justify-around gap-10">
          <img
            src="/images/Hanzi flashcards.png"
            alt="Hanzi flashcards image"
            width={600}
            height={600}
            className="rounded xl"
          />
          <div >
            <h2>Description</h2>
          <p>
            Hanzi Flashcards is a learning tool designed for Mandarin students
            preparing for HSK levels. It allows users to revise Chinese
            characters through customizable flashcards that display Hanzi,
            Pinyin, and English translations. Users can filter cards by
            difficulty level and choose to show Pinyin or hide it for a
            challenge. The app is optimized for dark mode and mobile use.
          </p>
          <h2>Tech Stack</h2>
          <p>
            Frontend: Next.js, Tailwind CSS Backend: Flask (Python), PostgreSQL
            Auth: JSON Web Tokens (JWT) Design: Minimal, mobile-first, dark-mode
            friendly
          </p>
          <h2>Key Features</h2>
          <p>
            Key Features Flip cards with Hanzi, Pinyin, and English translation
            Toggle between Hanzi-only and Hanzi + Pinyin modes Filter flashcards
            by HSK level (Level 1–2) User authentication (Sign up, Log in, Log
            out) Dark mode support for night study vibes 🌙
          </p>
          <h2>Challenges and Learnings</h2>
          <p>
            This project pushed me to connect a React-based frontend with a
            Flask API, handle secure JWT authentication, and manage a relational
            database with PostgreSQL. I also learned how to use Tailwind CSS for
            clean UI design and implemented feature toggles based on user
            preference. It deepened my appreciation for how tech can support
            language learning in fun, flexible ways.
          </p>
          <h2>Future Plans</h2>
          <p>
            Add spaced repetition (SRS) functionality 
            Expand to HSK 3–6 User
            dashboard with revision stats 
            Add audio pronunciation support
          </p>
          </div>
        </div>

        <br/>
        <br/>
        <br/>
      </div>
      <div>
        <h5>
          <a href="https://food-court-group-2-6mbz.vercel.app/">
            BiteScape Food Court
          </a>
        </h5>
        <div className="flex justify-around gap-10">
          <div>
            <h2>Description</h2>
          <p>
            Hanzi Flashcards is a learning tool designed for Mandarin students
            preparing for HSK levels. It allows users to revise Chinese
            characters through customizable flashcards that display Hanzi,
            Pinyin, and English translations. Users can filter cards by
            difficulty level and choose to show Pinyin or hide it for a
            challenge. The app is optimized for dark mode and mobile use.
          </p>
          <h2>Tech Stack</h2>
          <p>
            Frontend: Next.js, Tailwind CSS Backend: Flask (Python), PostgreSQL
            Auth: JSON Web Tokens (JWT) Design: Minimal, mobile-first, dark-mode
            friendly
          </p>
          <h2>Key Features</h2>
          <p>
            Key Features Flip cards with Hanzi, Pinyin, and English translation
            Toggle between Hanzi-only and Hanzi + Pinyin modes Filter flashcards
            by HSK level (Level 1–2) User authentication (Sign up, Log in, Log
            out) Dark mode support for night study vibes 🌙
          </p>
          <h2>Challenges and Learnings</h2>
          <p>
            This project pushed me to connect a React-based frontend with a
            Flask API, handle secure JWT authentication, and manage a relational
            database with PostgreSQL. I also learned how to use Tailwind CSS for
            clean UI design and implemented feature toggles based on user
            preference. It deepened my appreciation for how tech can support
            language learning in fun, flexible ways.
          </p>
          <h2>Future Plans</h2>
          <p>
            Add spaced repetition (SRS) functionality 
            Expand to HSK 3–6 User
            dashboard with revision stats 
            Add audio pronunciation support
          </p>
          </div>
        <div>
          <img
            src="/images/Bitescape.png"
            alt="Bitescape image"
            width={1800}
            height={1800}
            className="rounded xl"
          />
        </div>
        </div>
        
      
    </div>
    </div>
  );
}
