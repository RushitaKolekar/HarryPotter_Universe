import React from 'react';
import MovieInfo from "../../public/api/MovieInfo.json";
import { NavLink } from 'react-router-dom';


function Movies() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    <section className="px-4 py-12 max-w-6xl mx-auto">
      {/* Title */}
      <div className='flex justify-center pb-16 group'>
        <h2 className='text-4xl md:text-5xl font-bold italic text-center bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent px-4 
                      transform transition-all duration-700 group-hover:scale-105 group-hover:translate-y-1'>
          From Platform 9¾ to the Final Battle: The Film Saga
        </h2>
      </div>

      {/* Movies Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {MovieInfo.map((movie) => (
          <div 
            key={movie.id}
            className="relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] group/card
                    bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-black/20 dark:border-white/20
                    hover:border-purple-400/50 hover:shadow-xl flex h-full min-h-[300px] md:min-h-[350px]"
          >
            {/* Image with dual hover effects */}
            <div className='relative w-2/5 left-2 flex-shrink-0 group/image overflow-hidden'>
              <img 
                src={movie.image} 
                alt={movie.title}
                className='w-full h-full object-cover border-3 border-violet-200 dark:border-white/60 
                          transition-transform duration-300 group-hover/card:scale-110'
              />
              {/* Title overlay - only shows on image hover */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm md:text-base font-medium px-2 text-center">
                  {movie.title}
                </p>
              </div>
            </div>
            
            {/* Content */}
            <div className='p-6 flex-1 flex flex-col'>
              <div className='space-y-4 md:space-y-6'>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 pb-4 dark:text-white">
                  {movie.title}
                </h3>
                
                {/* Metadata - one line each */}
                <div className="space-y-3 pb-5 text-gray-700 dark:text-gray-300">
                  <p className="text-sm md:text-base">
                    <span className="font-semibold text-violet-700 dark:text-violet-300">Year: </span>
                    {movie.release_year}
                  </p>
                  
                  <p className="text-sm md:text-base">
                    <span className="font-semibold text-violet-700  dark:text-violet-300 ">Runtime: </span>
                    {movie.runtime_hr}
                  </p>
                </div>
                
              </div>
              
              <NavLink 
                to={`/movies/${movie.id}`}
                className=" inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-emerald-600 
                        text-white rounded-lg text-sm md:text-base font-medium shadow-lg
                        transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105 w-fit "
              >
                View Details →
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
  );
}

export default Movies;
  


