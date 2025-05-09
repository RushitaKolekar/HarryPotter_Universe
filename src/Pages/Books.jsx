import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import BookInfo from "../api/BookInfo.json";

const Books = () => {


  return (
   <>
    <div className="min-h-screen bg-gray-900">
  {/* Content */}
  <section className="relative px-4 py-12 max-w-7xl mx-auto">
   
    <div className='flex justify-center pb-16 group'>
      <h2 className='text-4xl md:text-5xl font-bold italic text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400 
                    transform transition-all duration-700 group-hover:scale-105 group-hover:translate-y-1'>
        The Hogwarts Library: A Collection of Magical Tomes
      </h2>
    </div>

    {/* Book Grid */}
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 '>
      {BookInfo.map((book) => (
        <div 
          key={book.id}
          className="relative rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] group
                  border border-gray-700 hover:border-purple-500 shadow-lg hover:shadow-purple-500/20"
        >
          {/* Animated Card Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-emerald-900/30 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

          {/* Card Content */}
          <div className="relative grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr] gap-6 p-6 min-h-[380px] z-10">
            {/* Book Cover with Hover Effect - Modified for title overlay */}

         
            <div className='relative flex items-center justify-center overflow-hidden rounded-lg group/image'>
            <NavLink
              to={`/books/${book.id}`}>
              <img 
                src={book.image} 
                alt={book.title}
                className='h-81 w-auto object-contain transition-transform duration-500 group-hover:scale-110 
                          border-2 border-white/60 shadow-xl' 
                         
              />
            
              {/* Title overlay - only shows on image hover */}
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-bold px-4 text-center">
                  {book.title}
                </p>
              </div>
              </NavLink>
            </div>
            
            
            {/* Book Details */}
            <div className='space-y-4 flex flex-col justify-center items-start'>


            <NavLink
              to={`/books/${book.id}`}>

              <h3 className="text-3xl font-bold text-white transition-colors duration-300 pb-5
                            group-hover:text-purple-400">
                {book.title}
              </h3>
              </NavLink>
              
              <div className='text-lg space-y-2 left-1 text-gray-300'>
                <p><span className="font-semibold  text-purple-300">Year:</span> {book.year}</p>
                <p><span className="font-semibold text-emerald-300">Pages:</span> {book.pages}</p>
              </div>
              
              <div className='text-base text-gray-300 leading-relaxed'>
                <p className="font-semibold text-white text-lg">Summary:</p>
                <p className="mt-2 p-1">
                  {book.description}
                </p>
              </div>
              
              <NavLink 
                to={`/books/${book.id}`}
                
                className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-emerald-600 
                        text-white rounded-lg text-lg font-bold shadow-lg
                        transition-all duration-300 hover:shadow-purple-500/40
                        hover:scale-[1.03] transform hover:brightness-110"
              >
                Explore Magic →
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>

 
 
  </div>
    </>
);
  
}

export default Books;
