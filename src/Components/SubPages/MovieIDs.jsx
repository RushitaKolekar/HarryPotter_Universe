import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';

const MovieIDs = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const movieModule = await import(`/src/api/MovieInfo/${id}.json`);
        setMovie(movieModule.default);
      } catch (error) {
        console.error("Error loading movie:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [id]);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="text-2xl text-purple-600 dark:text-purple-400 animate-pulse">
        Loading magical content...
      </div>
    </div>
  );

  if (!movie) return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="text-2xl text-red-600 dark:text-red-400">
        Movie not found
      </div>
    </div>
  );



  return (
    <div className='min-h-screen bg-gray-900'>
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Movie Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1.6fr] ">

          {/* Poster Column */}
          <div className="flex justify-center items-center left-1 h-full group relative">
            {/* Main Image */}
            <img 
              src={movie.image} 
              alt={movie.title}
              className=" w-full max-w-sm md:max-w-2xl rounded-lg shadow-lg border-4 border-white object-cover
                      transition-all duration-500 ease-in-out
                      group-hover:scale-105 group-hover:shadow-xl group-hover:border-purple-300
                      transform-gpu
                      h-50 md:h-[450px] md:w-auto"  // Responsive height control
            />
            
            {/* Magical Glow Effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-400/30 via-transparent to-emerald-400/30 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-700
                          pointer-events-none" />
            
            
          </div>

          {/* Metadata Column */}
          <div className="text-lg text-white">
            <div className="inline-block">
              <h1 className="text-3xl md:text-4xl font-bold pb-4 text-transparent bg-clip-text 
                    bg-gradient-to-r from-purple-400 to-emerald-400
                    transition-all duration-700 
                    hover:scale-105 hover:translate-y-1">
                {movie.title}
              </h1>
            </div>

            <div className='text-lg text-gray-300 space-y-2'>
              <p><span className="font-semibold text-purple-300">Release Year:</span> {movie.release_year}</p>
              <p className='pt-1'><span className="font-semibold text-emerald-300">Runtime:</span> {movie.runtime.formatted} ({movie.runtime.minutes} minutes)</p>
              <p className='pt-1'><span className="font-semibold text-cyan-500">Director:</span> {movie.director}</p>
              
              <div>
                <p className="font-semibold text-blue-400 className='pt-1'">Main Cast:</p>
                <ul className="list-disc pl-9 space-y-1.5">
                  {Object.entries(movie.main_cast).map(([character, actor]) => (
                    <li key={character} className="text-gray-300">
                      <span className="font-medium bg-gradient-to-r from-amber-300 to-fuchsia-400 bg-clip-text text-transparent">{character}:</span> {actor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Trailer Section */}
        <div className="pt-8 text-center group">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-400 to-emerald-400
                pb-6 transition-all duration-300
                group-hover:translate-x-2">
            Magical Trailer
          </h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe
              src={`https://www.youtube.com/embed/${movie.trailer.youtube_url.split('v=')[1]}`}
              className="w-full h-96 rounded-lg shadow-xl border-4 border-white"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-gray-400 italic pt-3">{movie.trailer.description}</p>
        </div>

        {/* Summary Section */}
        <div className="pt-10 group">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-400 to-emerald-400
                pb-4 transition-all duration-300
                group-hover:translate-x-2">
            The Wizarding Story
          </h2>
          <div className="text-gray-300 text-lg leading-relaxed text-justify space-y-4">
            <p>{movie.summary}</p>
          </div>
        </div>

        {/* Key Images Section */}
        <div className="pt-8 group">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-400 to-emerald-400
                pb-8 transition-all duration-300
                group-hover:translate-x-2">
            Magical Moments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 ">
            {movie.key_images.map((image, index) => {
              const themes = [
                { border: "border-purple-400/50", text: "text-purple-300" },
                { border: "border-red-400/50", text: "text-red-300" },
                { border: "border-emerald-400/50", text: "text-emerald-300" }
              ];
              const theme = themes[index % themes.length];

              return (
                <div key={index} className="group">
                  <div className={`rounded-xl overflow-hidden border-2 ${theme.border} shadow-lg transition-all duration-300 hover:shadow-xl`}>
                    <img 
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-85 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className={`text-center italic ${theme.text} pt-2 text-sm`}>
                    {image.caption}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Watch Button */}
        <div className="text-center pt-10">
          <a 
            href={movie.trailer.youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-xl font-bold rounded-lg shadow-lg transition-colors inline-flex items-center"
          >
            <FaPlay className="pr-1" />
            Watch Movie
          </a>
        </div>

      </div>
    </div>
  );
};

export default MovieIDs;