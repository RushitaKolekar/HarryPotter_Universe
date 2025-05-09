import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaHatWizard, FaFire, FaPaw } from 'react-icons/fa';
import { GiLion, GiEagleEmblem, GiSnake } from 'react-icons/gi';
import { IoMdColorPalette } from 'react-icons/io';
import { RiGhostLine } from 'react-icons/ri';
import { MdMeetingRoom } from 'react-icons/md';

const HouseIDs = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHouse = async () => {
      try {
        const houseModule = await import(`/src/api/HouseInfo/${id}.json`);
        setHouse(houseModule.default);
      } catch (error) {
        console.error("Error loading house:", error);
      } finally {
        setLoading(false);
      }
    };

    loadHouse();
  }, [id]);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="text-2xl text-purple-400 animate-pulse">
        Loading magical house details...
      </div>
    </div>
  );

  if (!house) return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="text-2xl text-red-400">
        House not found
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4">


        {/* House Header */}
        <div className="flex justify-center px-4 py-4 pb-12 group animate-fade-in">
  <h2 className={`
    text-4xl md:text-5xl font-bold italic text-center bg-clip-text text-transparent px-4
    transform transition-all duration-700 
    group-hover:scale-105 group-hover:translate-y-1
    ${house.name === "Gryffindor" ? 
      'bg-gradient-to-r from-red-600 via-yellow-500 to-red-400' :
     house.name === "Hufflepuff" ? 
      'bg-gradient-to-r from-yellow-500 via-gray-300 to-yellow-400' :
     house.name === "Ravenclaw" ? 
      'bg-gradient-to-r from-blue-600 via-silver-300 to-blue-400' :
      'bg-gradient-to-r from-green-600 via-silver-300 to-green-400'
    }
  `}>
    {house.name} House: Where True {house.name === "Gryffindor" ? "Courage" : 
                              house.name === "Hufflepuff" ? "Loyalty" :
                              house.name === "Ravenclaw" ? "Wisdom" : "Ambition"} Shines
    {house.name === "Gryffindor" ? 
      <GiLion className="inline ml-2 text-yellow-500 text-2xl animate-pulse" aria-hidden="true" /> :
     house.name === "Hufflepuff" ? 
      <FaPaw className="inline ml-2 text-yellow-400 text-2xl animate-pulse" aria-hidden="true" /> :
     house.name === "Ravenclaw" ? 
      <GiEagleEmblem className="inline ml-2 text-blue-400 text-2xl animate-pulse" aria-hidden="true" /> :
      <GiSnake className="inline ml-2 text-green-400 text-2xl animate-pulse" aria-hidden="true" />
    }
  </h2>
</div>

        {/* House Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]  pb-8" data-aos="fade-up">
          {/* Left Column - Logo */}
          <div className="flex justify-center group relative">
            <img 
              src={house.image} 
              alt={`${house.name} Logo`}
              className="w-full max-w-xs rounded-lg shadow-2xl border-4 border-yellow-500 object-cover
                      transition-all duration-500 ease-in-out 
                      group-hover:scale-105 group-hover:shadow-xl group-hover:border-red-600
                      transform-gpu"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-red-600/30 via-transparent to-yellow-400/30 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-700
                          pointer-events-none" />
          </div>



          {/* Right Column - House Info */}
          <div className="  text-gray-300 leading-12 text-xl">
              <div className="">
                {/* <FaHatWizard className="text-yellow-400 text-2xl flex-shrink-0" /> */}
                <p><span className="font-semibold text-red-400">Founder:</span> {house.founder}</p>
              </div>
              
              <div className="">
                {/* <IoMdColorPalette className="text-yellow-400 text-2xl flex-shrink-0" /> */}
                <p><span className="font-semibold text-red-400">Colors:</span> {house["house_colors"].join(" & ")}</p>
              </div>
              
              <div className="">
                {/* <GiLion className="text-yellow-400 text-2xl flex-shrink-0" /> */}
                <p><span className="font-semibold text-red-400">Animal:</span> {house.animal}</p>
              </div>
              
              <div className="">
                {/* <FaFire className="text-yellow-400 text-2xl flex-shrink-0" /> */}
                <p><span className="font-semibold text-red-400">Element:</span> {house.element}</p>
              </div>
              
              <div className="">
                {/* <FaPaw className="text-yellow-400 text-2xl flex-shrink-0" /> */}
                <p><span className="font-semibold text-red-400">Traits:</span> {house.traits.join(", ")}</p>
              </div>
              
              <div className="">
                {/* <RiGhostLine className="text-yellow-400 text-2xl flex-shrink-0" /> */}
                <p><span className="font-semibold text-red-400">Ghost:</span> {house.ghost}</p>
              </div>
              
              <div className="">
                {/* <MdMeetingRoom className="text-yellow-400 text-2xl flex-shrink-0" /> */}
                <p><span className="font-semibold text-red-400">Common Room:</span> {house.common_room}</p>
              </div>
            </div>
        </div>


        {/* House Quote */}
        <div className="bg-gradient-to-r from-red-900/50 to-yellow-900/30 rounded-xl p-6 
                        border-x-4 border-yellow-400" data-aos="fade-right">
          <blockquote className="text-xl italic text-yellow-200 text-center">
            "{house.house_quote}"
          </blockquote>
        </div>

        {/* Notable Members */}
        <div className="pt-6 pb-3" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text 
                        bg-gradient-to-r from-red-500 to-yellow-400 pb-4">
            Notable Members
          </h2>
            <ul className="list-disc pl-12 leading-9 text-gray-300 text-lg">
            {house.notable_members.map((member, index) => (
              <li key={index}>
                {member}
              </li>
                ))}
              </ul>
        </div>


        {/* House Description */}
      <div className="">

        {/* Introduction */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text 
                        bg-gradient-to-r from-red-500 to-yellow-400 pb-4">
            House Introduction
          </h2>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <p className="text-lg text-gray-300 text-justify pl-6  leading-8 flex-1">
              {house.description.introduction}
            </p>
            {house.internal_image.founder?.url && (
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative group max-w-md">
                  <img 
                    src={house.internal_image.founder.url} 
                    alt={house.internal_image.founder.caption}
                    className="rounded-lg border-2 border-yellow-500 shadow-lg w-auto h-90"
                  />
                  <p className="text-center italic text-yellow-300 text-sm pt-2">
                    {house.internal_image.founder.caption}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Traits */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text 
                        bg-gradient-to-r from-red-500 to-yellow-400 pb-4 pt-4">
            House Traits
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {house.internal_image.trait?.url && (
              <div className="lg:w-1/3 flex justify-center order-first lg:order-none">
                <div className="relative group max-w-md">
                  <img 
                    src={house.internal_image.trait.url} 
                    alt={house.internal_image.trait.caption}
                    className="rounded-lg border-2 border-red-500 shadow-lg w-full h-auto"
                  />
                  <p className="text-center italic text-red-300 pt-2 text-sm">
                    {house.internal_image.trait.caption}
                  </p>
                </div>
              </div>
            )}
            <div className="flex-1">
              {house.description.traits.quote && (
                <blockquote className="text-xl italic text-yellow-200 pl-6 border-l-4 border-yellow-400">
                  "{house.description.traits.quote}"
                </blockquote>
              )}
              <p className="text-lg text-gray-300 leading-8 text-justify pb-6 pt-4">
                {house.description.traits.information}
              </p>
            </div>
          </div>
        </div>


        {/* Reputation */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text 
                        bg-gradient-to-r from-red-500 to-yellow-400 pb-6">
            House Reputation
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              {house.description.reputation.quote && (
                <blockquote className="text-xl italic text-yellow-200 mb-6 pl-6 border-l-4 border-yellow-400">
                  "{house.description.reputation.quote}"
                </blockquote>
              )}
              <p className="text-lg text-gray-300 leading-8 text-justify pt-4 pb-6">
                {house.description.reputation.information}
              </p>
            </div>
            {house.internal_image.reputation?.url && (
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative group max-w-md">
                  <img 
                    src={house.internal_image.reputation.url} 
                    alt={house.internal_image.reputation.caption}
                    className="rounded-lg border-2 border-yellow-500 shadow-lg w-full h-auto"
                  />
                  <p className="text-center italic text-yellow-300 pt-2 text-sm">
                    {house.internal_image.reputation.caption}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Common Room & Ghost */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text 
                        bg-gradient-to-r from-red-500 to-yellow-400 pb-4">
            Common Room & Ghost
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
            {house.internal_image.common_room?.url && (
              <div className="lg:w-1/3 flex justify-center order-first lg:order-none">
                <div className="relative group max-w-md">
                  <img 
                    src={house.internal_image.common_room.url} 
                    alt={house.internal_image.common_room.caption}
                    className="rounded-lg border-2 border-red-500 shadow-lg w-full h-auto"
                  />
                  <p className="text-center italic text-red-300 pt-2 text-sm">
                    {house.internal_image.common_room.caption}
                  </p>
                </div>
              </div>
            )}
            <div className="flex-1">
              <p className="text-lg text-gray-300 leading-8 pb-6 text-justify">
                {house.description.common_room.common_houseroom}
              </p>
            </div>
          </div>
          
          {/* Ghost Image */}
          {house.internal_image.ghost?.url && (
            <div className="flex justify-center pb-4">
              <div className="relative group max-w-md">
                <img 
                  src={house.internal_image.ghost.url} 
                  alt={house.internal_image.ghost.caption}
                  className="rounded-lg border-2 border-yellow-500 shadow-lg w-full h-90"
                />
                <p className="text-center italic text-yellow-300 pt-2 text-sm">
                  {house.internal_image.ghost.caption}
                </p>
              </div>
            </div>
          )}

          {/* Dormitories */}
          {house.description.common_room.dormitories && (
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-yellow-400 pb-4">Dormitories</h3>
              <p className="text-lg text-gray-300 leading-8 text-justify">
                {house.description.common_room.dormitories}
              </p>
              {house.internal_image.dormitory?.url && (
                <div className="flex justify-center">
                  <div className="relative group max-w-md">
                    <img 
                      src={house.internal_image.dormitory.url} 
                      alt={house.internal_image.dormitory.caption}
                      className="rounded-lg border-2 border-yellow-500 shadow-lg w-full h-auto"
                    />
                    <p className="text-center italic text-yellow-300 pt-2 text-sm">
                      {house.internal_image.dormitory.caption}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default HouseIDs;