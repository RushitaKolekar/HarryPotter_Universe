import React from 'react'
import HeroSection from '../Components/UI/HeroSection';
import MovieCard from "../Components/Cards/MovieCard.jsx";
import BookCard from '../Components/Cards/BookCard.jsx';
import  HouseCard from "../Components/Cards/HouseCard.jsx"

function Home() {
  return (
   <>
   <div className="min-h-screen bg-gray-900">
   <HeroSection/>
   <MovieCard/>
   <BookCard/>
   <HouseCard />

   </div>
   
   </>
  )
}

export default Home