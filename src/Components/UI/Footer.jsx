import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
  <footer className="bg-violet-600 text-white py-10 px-4 w-full">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Hogwarts Houses Image - Left Side */}
        <div className="w-full md:w-1/5 flex justify-center md:justify-start">
          <img 
            src="/public/images/Houses/HlogoBGRemove.png" 
            alt="Hogwarts Houses" 
            className="w-full max-w-[120px] md:max-w-[160px] object-contain "
          />
        </div>

        <div className='border-gray-300 border-y-55 border-2 hidden md:inline'/>

        {/* Right Side Content */}
        <div className="w-full md:w-2/4 flex flex-col relative"> {/* Added 'relative' */}
          {/* Sorting Hat and Quote Section */}

          <div className="flex flex-col md:flex-row items-center ">

            {/* Rotated Sorting Hat - Positioned absolutely on left */}
            <div className="absolute -top-8 left-8 md:left-2 md:-top-10 z-10 w-20 md:w-26"> {/* Positioning */}
              <img 
                src="/public/images/OtherStuff/sorting-hat.png" 
                alt="Sorting Hat" 
                className="hat-rotate filter brightness-55 transform -rotate-12" /* Forced rotation */
              />
            </div>
            
            {/* Quote - Added left padding to make space for hat */}
            <blockquote className="italic  pl-16  text-lg md:text-xl max-w-2xl pt-12">
              "Sometimes the bravest wizards come from the most unexpected houses. True magic lies not in your sorting, but in the choices you make afterwards."
            </blockquote>
          </div>
        </div>

        <div className='border-gray-300 border-y-55 border-2 hidden md:inline'/>



          {/* Links Section */}
          <div className="flex flex-col items-center md:items-start pt-2 gap-2 text-sm">
            <span className="hidden md:inline font-bold">@ Harry Potter Fan Page,</span>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">

              <ul className='flex flex-row md:flex-col  gap-4 md:gap-2'>
                <li><NavLink to="/About" end className="hover:text-amber-400 transition-colors duration-300">About</NavLink></li>
                <li><NavLink to="/Contact" className="hover:text-amber-400 transition-colors duration-300">Contact</NavLink></li>
                <li><NavLink to="/Privacy" className="hover:text-amber-400 transition-colors duration-300">Privacy</NavLink></li>
              </ul>
              
            </div>
          </div>
        </div>
      

      {/* Minimal CSS for hat rotation animation */}
      
    <style jsx>{`
      .hat-rotate {
        transition: transform 0.5s ease;
      }
      .hat-rotate:hover {
        transform: rotate(-5deg) scale(1.05); /* Enhanced hover effect */
      }
    `}
    </style>
  </footer>

  );
}

export default Footer;