"use client";

export default function Projects() {
  return (
    <div>
      <h1 className="text-center">PROJECTS</h1>
      
      <div>
        <h5 className="flex flex-col text-center text-2xl p-3">
          <a href="https://food-court-group-2-6mbz.vercel.app/">
            BiteScape Food Court
          </a>
        </h5>
        <div className="flex justify-around gap-10">
          <div className="space-y-4">
            <h2 className="text-center text-xl">Description</h2>
            <p>
              Bitescape is a food discovery web app that reimagines how users
              find meals — not by restaurant, but by mood, aesthetic, or
              cravings. Whether you’re vegan, trying something spicy, or just
              want “comfort food” on a rainy day, Bitescape filters local food
              options based on your vibe. It's designed with a clean UI for
              quick browsing and powered by a flexible search/filter engine.
            </p>
            <h2 className="text-center text-xl">Tech Stack</h2>
            <p>
              Frontend: React / Next.js, Tailwind CSS Backend: Flask / Node.js
              (pick one), PostgreSQL or MongoDB Auth: JWT or Firebase Auth (if
              used) APIs: Google Places, Spoonacular, or custom data (update
              this if you used external APIs)
            </p>
            <h2 className="text-center text-xl">Key Features</h2>
            <p>
              Mood-based and dietary preference filters (e.g. “cozy,” “vegan,”
              “budget-friendly”) Mobile-first design for foodies on the go
              Real-time search and filtering system Option to favorite or
              bookmark dishes (Optional) User profiles and saved food picks Dark
              mode 🌚 and light mode ☀️ support
            </p>
            <h2 className="text-center text-xl">Challenges and Learnings</h2>
            <p>
              This project taught me how to structure scalable filtering systems
              for UX-first discovery experiences. I focused on responsive UI,
              accessibility, and intuitive navigation. Connecting frontend
              filters to backend queries and optimizing data loading was a
              technical challenge that improved my understanding of performance
              optimization in React + Flask-based stacks.
            </p>
            <h2 className="text-center text-xl">Future Plans</h2>
            <p>
              Integrate location-based results (e.g. “near me” feature) Add
              reviews or taste tags from users Build a recommendation system
              using user behavior Launch a progressive web app (PWA) version
            </p>
          </div>
          {/* <div className="bg-amber-300 w-full"> */}
            <img
              src="/images/Bitescape.png"
              alt="Bitescape image"
              width={650}
              height={1800}
              // className="w-full h-auto max-h-[500px] object-cover rounded-md"
              className="bg-amber-300 w-1/2"
            />
          {/* </div> */}
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        <h5 className="text-center text-2xl p-3">
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
          <div className="space-y-4">
            <h2 className="text-center text-xl">Description</h2>
            <p>
              Hanzi Flashcards is a learning tool designed for Mandarin students
              preparing for HSK levels. It allows users to revise Chinese
              characters through customizable flashcards that display Hanzi,
              Pinyin, and English translations. Users can filter cards by
              difficulty level and choose to show Pinyin or hide it for a
              challenge. The app is optimized for dark mode and mobile use.
            </p>
            <h2 className="text-center text-xl">Tech Stack</h2>
            <p>
              Frontend: Next.js, Tailwind CSS Backend: Flask (Python),
              PostgreSQL Auth: JSON Web Tokens (JWT) Design: Minimal,
              mobile-first, dark-mode friendly
            </p>
            <h2 className="text-center text-xl">Key Features</h2>
            <p>
              Key Features Flip cards with Hanzi, Pinyin, and English
              translation Toggle between Hanzi-only and Hanzi + Pinyin modes
              Filter flashcards by HSK level (Level 1–2) User authentication
              (Sign up, Log in, Log out) Dark mode support for night study vibes
              🌙
            </p>
            <h2 className="text-center text-xl">Challenges and Learnings</h2>
            <p>
              This project pushed me to connect a React-based frontend with a
              Flask API, handle secure JWT authentication, and manage a
              relational database with PostgreSQL. I also learned how to use
              Tailwind CSS for clean UI design and implemented feature toggles
              based on user preference. It deepened my appreciation for how tech
              can support language learning in fun, flexible ways.
            </p>
            <h2 className="text-center text-xl">Future Plans</h2>
            <p>
              Add spaced repetition (SRS) functionality Expand to HSK 3–6 User
              dashboard with revision stats Add audio pronunciation support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
