import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaDownload, FaSpinner, FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookIDs = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [downloadState, setDownloadState] = useState({
    loading: false,
    success: false
  });

  // useEffect(() => {
  //   const loadBook = async () => {
  //     try {
  //       setLoading(true);
  //       setError(null);
       
  //       const response = await fetch(`/src/api/BookInfo/${id}.json`);
        
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
        
  //       const bookData = await response.json();
  //       setBook(bookData);
  //     } catch (error) {
  //       console.error("Failed to load book:", error);
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadBook();
  // }, [id]);

  useEffect(() => {
    const loadBook = async () => {
      try {
        const bookModule = await import(`/src/api/BookInfo/${id}.json`);
        setBook(bookModule.default);
      } catch (error) {
        console.error("Error loading book:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBook();
  }, [id]);


  if (loading) return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="text-2xl text-purple-600 dark:text-purple-400 animate-pulse">
        Loading magical content...
      </div>
    </div>
  );

  if (!book) return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="text-2xl text-red-600 dark:text-red-400">
        Book not found
      </div>
    </div>
  );

  
  
  const handleDownload = () => {
    setDownloadState({ loading: true, success: false });
    
    // Show preparing notification
    toast.info(`Preparing ${book.title}.pdf...`, {
      position: 'bottom-right',
      autoClose: 2000
    });

    // Create download link
    const link = document.createElement('a');
    link.href = book.download_link;
    link.download = `${book.title.replace(/[^a-z0-9]/gi, '_')}.pdf`;
    
    // Trigger download
    setTimeout(() => {
      link.click();
      setDownloadState({ loading: false, success: true });
      
      // Success notification with open option
      toast.success(
        <div>
          <p>Download complete!</p>
          <button 
            onClick={() => window.open(book.download_link, '_blank')}
            className="mt-2 px-3 py-1 bg-white text-purple-600 rounded text-sm"
          >
            Open PDF
          </button>
        </div>,
        {
          position: 'bottom-right',
          autoClose: 5000
        }
      );
    }, 1000);
  };
  

  return (
    <div className='min-h-screen bg-gray-900'>
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Book Info Grid - */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1.6fr]">

          {/* Image Column */}
          <div className="flex justify-center items-center h-full group relative">
              {/* Main Image */}
              <img 
                src={book.image} 
                alt={book.title}
                className="w-full max-w-xs rounded-lg shadow-lg border-4 border-white object-cover 
                        transition-all duration-500 ease-in-out
                        group-hover:scale-105 group-hover:shadow-xl group-hover:border-purple-300
                        transform-gpu"  // GPU acceleration
              />
              
              {/* Magical Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-400/30 via-transparent to-emerald-400/30 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-700
                            pointer-events-none" /> {/* Prevents interaction issues */}
              
              
            </div>

          {/* Metadata Column */}
          <div className="text-lg text-white">
            <div className="inline-block">
              <h1 className="text-3xl md:text-4xl font-bold pb-4 text-transparent bg-clip-text 
                    bg-gradient-to-r from-purple-400 to-emerald-400
                    transition-all duration-700 
                    hover:scale-105 hover:translate-y-1">
                {book.title}
              </h1>
            </div>

            <div className='text-lg text-gray-300'>
              <p><span className="font-semibold text-purple-300">Year:</span> {book.year}</p>
              <p className='pt-1'><span className="font-semibold text-emerald-300">Pages:</span> {book.pages}</p>
              <p className="pt-1"><span><strong className='pr-2 text-cyan-500'>Genre: </strong></span>{book.genre.join(', ')}</p>
              <p className="pt-1"><span className="font-semibold pr-2 text-orange-400">Author: </span>{book.author}</p>
              <p className="pt-1"><span className="font-semibold text-blue-400">Main Characters: </span>{book.main_characters.join(', ')}</p>
              <p className="pt-1"><span className="font-semibold text-red-500">Villains: </span>{book.villains.join(', ')}</p>
              <p className="font-semibold text-sky-300 pt-1">Suspense TimeBombs:</p>
              <ul className="list-disc pl-6 space-y-1">
                {book.suspense_elements.map((suspense, index) => (
                  <li key={index} className="text-gray-300"> {suspense}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* NEW ENHANCED SUMMARY SECTION */}
        <div className="pt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text 
                        bg-gradient-to-r from-purple-400 to-emerald-400
                        pb-4 ">
            Magical Journey
          </h2>
          
          <div className="space-y-8 text-gray-300">
            {book.summary.map((paragraph, index) => {
              const paragraphText = Object.values(paragraph)[0];
              const themeIndex = index % 3;
              const themes = [
                { border: "border-purple-400/50", text: "text-purple-300" },
                { border: "border-red-400/50", text: "text-red-300" },
                { border: "border-emerald-400/50", text: "text-emerald-300" }
              ];

              return (
                <div key={index} className="group" data-aos="fade-up">
                 
                  <p className="text-lg leading-relaxed mb-6">{paragraphText}</p>
                  
                  
                  {book.inside_images?.[index] && (
                    <div className="py-6 text-center transition-all duration-300 hover:scale-[1.01]">
                      <div className={`inline-block rounded-xl overflow-hidden border-3 ${themes[themeIndex].border} shadow-xl`}>
                        <img 
                          src={book.inside_images[index].url}
                          alt={book.inside_images[index].caption}
                          className="max-w-[350px] md:max-w-[500px] w-full justify-center h-auto rounded-lg shadow-lg"
                        />
                      </div>
                      <p className={`text-center italic ${themes[themeIndex].text} pt-3 text-sm`}>
                        {book.inside_images[index].caption}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

          {/* interesting facts */}

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text 
                          bg-gradient-to-r from-purple-400 to-emerald-400
                          pb-4 pt-4">
              Interesting Facts
            </h2>
            <ul className="list-disc pl-8 pb-4 space-y-1 text-gray-300">
              {book.interesting_facts.map((fact, index) => (
                <li key={index} className="text-gray-300">{fact}</li>
              ))}
            </ul>
          </div>

        {/* download button */}
        <div className="text-center pt-4">
      <button
        onClick={handleDownload}
        disabled={downloadState.loading}
        className={`px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold shadow-lg transition-all duration-300 inline-flex items-center
          ${downloadState.loading ? 'opacity-75 cursor-wait' : 'hover:shadow-xl hover:scale-105'}`}
      >
        {downloadState.loading ? (
          <>
            <FaSpinner className="animate-spin mr-2" />
            Downloading...
          </>
        ) : downloadState.success ? (
          <>
            <FaCheck />
            Downloaded!
          </>
        ) : (
          <>
            <FaDownload  />
            Download PDF
          </>
        )}
      </button>
      
      {/* <p className="text-gray-400 text-sm mt-2">
        PDF will open in new tab automatically
      </p> */}
    </div>

      </div>
    </div>
  );
};

export default BookIDs;
