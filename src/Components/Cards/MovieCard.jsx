import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MovieInfo from "../../../public/api/MovieInfo.json";
import { motion } from 'framer-motion';

function MovieCard() {
  const sliderRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const cardWidth = 288; // w-72 = 288px

  const checkScrollPosition = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setIsAtStart(scrollLeft === 0);
    setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 1);
  };

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const { scrollLeft } = sliderRef.current;
    sliderRef.current.scrollTo({
      left: scrollLeft + (direction === 'left' ? -cardWidth : cardWidth),
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-[60vh] py-2 flex flex-col items-center relative">
      {/* Heading */}
      <div className="w-4/5 mx-auto group"> {/* Same width as slider with left padding */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text pb-2 pt-3 bg-gradient-to-r from-purple-400 to-emerald-500 
                    transform transition-all duration-700 group-hover:scale-105 group-hover:translate-y-1"
        >
          Wizarding World Films
        </motion.h2>
      </div>

      {/* Slider Container */}
      <div className="w-full relative ">
        {/* Left Navigation Box */}
        <motion.div 
          className={`absolute left-0 top-0 bottom-0 w-1/5 flex items-center justify-end z-10 ${isAtStart ? 'opacity-30' : 'cursor-pointer hover:bg-gradient-to-r from-gray-100/50 dark:from-gray-900/50 to-transparent'}`}
          onClick={() => !isAtStart && scroll('left')}
          whileHover={!isAtStart ? { opacity: 1 } : {}}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: isAtStart ? 0.3 : 0.7 }}
        >
          <div className="h-16 w-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center mr-4">
            <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </motion.div>

        {/* Movie Slider (hidden scrollbar) */}
        <div 
          ref={sliderRef}
          onScroll={checkScrollPosition}
          className="w-4/5 mx-auto overflow-x-auto no-scrollbar flex gap-8 pb-6 snap-x snap-mandatory"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {MovieInfo.map((movie) => (
            <motion.div
              key={movie.id}
              className="flex-shrink-0 w-60 snap-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-purple-500 dark:hover:border-purple-400">
                {/* Movie Poster */}
                <div className="h-90 overflow-hidden">
                  <motion.img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>

                {/* Movie Info */}
                <div className="p-4">
                  <NavLink to={`/movies/${movie.id}`}>
                    <motion.p 
                      className="text-xl font-bold text-gray-800 dark:text-white pb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {movie.title}
                    </motion.p>
                  </NavLink>

                  <NavLink to={`/movies/${movie.id}`}>
                    <motion.button
                      className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-emerald-600 transition-all duration-300 shadow hover:shadow-lg border-2 border-transparent hover:border-white"
                      whileHover={{ 
                        scale: 1.03,
                        boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                    </motion.button>
                  </NavLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Navigation Box */}
        <motion.div 
          className={`absolute right-0 top-0 bottom-0 w-1/5 flex items-center justify-start z-10 ${isAtEnd ? 'opacity-30' : 'cursor-pointer hover:bg-gradient-to-l from-gray-100/50 dark:from-gray-900/50 to-transparent'}`}
          onClick={() => !isAtEnd && scroll('right')}
          whileHover={!isAtEnd ? { opacity: 1 } : {}}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: isAtEnd ? 0.3 : 0.7 }}
        >
          <div className="h-16 w-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center ml-4">
            <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MovieCard;