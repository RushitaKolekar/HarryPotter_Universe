import React, { useState, useEffect } from 'react';


const Snaps = () => {
  const [snaps, setSnaps] = useState([]);

  useEffect(() => {
    
    // Load your JSON data (replace with your actual fetch/import)
    const loadSnaps = async () => {
      const response = await fetch('/api/Snaps.json');
      const data = await response.json();
      // Shuffle array randomly
      setSnaps(data.sort(() => Math.random() - 0.5));
    };
    loadSnaps();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen py-8 flex flex-col items-center">
      {/* Container with 80% width */}
      <div className="w-full max-w-[1800px] px-4" style={{ width: '80%' }}>


      {/* Header */}
      <div className='group'>
      <h2 className='text-4xl md:text-5xl font-bold italic text-center bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent pt-2 pb-10
                      transform transition-all duration-700 group-hover:scale-105 group-hover:translate-y-1'>
        Magical Snaps
      </h2>
      </div>

      {/* Masonry-style gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 ">
        {snaps.map((snap) => (
          <div 
            key={snap.id} 
            className="relative break-inside-avoid group pb-4 transform hover:-translate-y-1 transition duration-300"
          >
            <img
              src={snap.src}
              alt={snap.alt}
              className="w-full rounded-lg border-2 border-amber-400 shadow-lg shadow-violet-700/50 hover:shadow-amber-400/30 transition-all"
            />
            {/* Optional floating caption (HP-style) */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-amber-100 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-parchment">
              {snap.caption || "Wizarding moment"}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Snaps;