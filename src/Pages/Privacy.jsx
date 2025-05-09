import React from "react";
import { NavLink } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-lg shadow-xl border-2 border-amber-800 transform rotate-0 hover:rotate-0 transition-all duration-500"
      style={{
        backgroundColor: 'rgba(253, 245, 230, 0.9)',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")'
      }}
      >

        {/* Hogwarts Crest Header */}
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-harry mb-4 text-amber-800 tracking-wide">
              The Unbreakable Vow
            </h1>
            <div className="w-full h-1 bg-gradient-to-r from-gryffindor-red via-hufflepuff-yellow to-slytherin-green pb-4"></div>
            <h2 className="text-2xl font-serif italic text-gray-700 pb-4">
              Privacy Policy of <span className="font-bold">The Wizarding World Archives</span>
            </h2>
          </div>
        </div>

        {/* Parchment-style content */}
        <div className="space-y-8 text-gray-800 font-serif text-lg leading-relaxed">
          <div className="">
            <p className="pb-4">
              
              As fellow Potter fans, we value your privacy as much as Harry valued his Invisibility Cloak. <strong>Harry Potter Universe</strong> does not collect personal information. By choice, we don’t enable comments on any of our articles, nor do we operate a mailing list, forum or user database. 
            </p>
           
          </div>

          {/* Section with magical floating quill icon */}
          <div className="relative pl-10 border-l-4 border-slytherin-green">
            <div className="absolute -left-2 top-0 text-slytherin-green text-3xl">✧</div>
            <h2 className="text-3xl font-harry text-slytherin-green mb-4">
              What We Don't Collect
            </h2>
            <p className="pb-2">
              <span className="text-xl">🦉</span> We don't require accounts<br/>
              <span className="text-xl">📜</span> No mailing lists (you won't get Daily Prophet spam)<br/>
              <span className="text-xl">🗣️</span> No comment sections (avoiding He-Who-Must-Not-Be-Named types)
            </p>
            <p>
              Unlike the Marauder's Map, we <span className="font-bold text-gryffindor-red">don't track your every move</span>. 
              The only time we might ask for your name is if you send us an owl—er, email.
            </p>
          </div>

              <div className="p-3"></div>

          {/* Analytics section with golden snitch animation */}
          <div className="p-6 bg-amber-50/70 rounded-lg border border-amber-200 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 opacity-20">
              <svg className="w-32 h-32 text-amber-400 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2L4,12L12,22L20,12L12,2M12,4L18,12L12,20L6,12L12,4Z" />
              </svg>
            </div>
            <h2 className="text-3xl font-harry text-ravenclaw-blue mb-4">
              Third-Party Magic
            </h2>
            <p className="pb-2 pt-2">
              We use <span className="font-bold">Google Analytics</span>—like a benign <span className="italic">Trace Charm</span>—to understand visitor trends without identifying individuals.
            </p>
            <NavLink to='https://tools.google.com/dlpage/gaoptout' target="_blank" className="inline-block px-4 py-2 bg-gryffindor-red text-white/90 rounded hover:bg-gryffindor-red-dark transition-colors">✨ Opt Out of Analytics</NavLink>
           
          </div>

          <div className="p-2"></div>

          {/* Floo Network section */}
          <div className=" p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-ravenclaw-blue">
            <h2 className="text-3xl font-harry text-ravenclaw-blue pb-2">
              Floo Network Links
            </h2>
            <p>
              Our site may include Floo Powder links to other magical sites. While we try to only link to trustworthy sources (no Knockturn Alley here), 
              we can't control their privacy practices once you've shouted your destination.
            </p>
          </div>

          <div className="p-2"></div>

          {/* Contact section with owl animation */}
          <div className="mb-10 p-6 bg-slate-50 rounded-lg border border-gray-300 relative">
            <div className="absolute -top-7 right-4 text-4xl">🦉</div>
            <h2 className="text-3xl font-harry text-gryffindor-red mb-4">
              Send Us an Owl
            </h2>
            <p>
              Concerns about your privacy? Contact us through the <span className="font-bold text-amber-800"><NavLink to='/Contact'>contact form</NavLink></span>.
              <br/>
              We promise no Howlers—just a respectful response, possibly delivered by a very tired school owl.
            </p>
          </div>


          {/* Final note with magical seal */}
          <div className="text-center  pt-10 border-t-2 border-amber-200 relative">
            <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 w-12 h-12 bg-white border-2 border-amber-800 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚯</span>
            </div>
            <p className="text-lg italic pb-2">
              This policy may evolve, like the Hogwarts curriculum (but with fewer Death Eater attacks).
            </p>
            <p className="font-harry text-2xl text-amber-800">
              "Mischief Managed, Privacy Respected"
            </p>
            <div className="pt-1 text-sm text-gray-500">
              Last update {new Date().toLocaleDateString('en-US', {  year: 'numeric' })}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for custom fonts and colors - add these to your global CSS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap');
        .font-harry {
          font-family: 'MedievalSharp', cursive;
        }
        :root {
          --gryffindor-red: #740001;
          --hufflepuff-yellow: #ecb939;
          --ravenclaw-blue: #0e1a40;
          --slytherin-green: #1a472a;
        }
        .text-gryffindor-red { color: var(--gryffindor-red); }
        .text-hufflepuff-yellow { color: var(--hufflepuff-yellow); }
        .text-ravenclaw-blue { color: var(--ravenclaw-blue); }
        .text-slytherin-green { color: var(--slytherin-green); }
        .bg-gryffindor-red { background-color: var(--gryffindor-red); }
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Privacy;