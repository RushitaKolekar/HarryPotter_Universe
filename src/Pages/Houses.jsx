import React from 'react';
import { NavLink } from 'react-router-dom';
import HogwartHouseInfo from "../api/HogwartHouseInfo.json";
import { GiFairyWand } from "react-icons/gi";

function Houses() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-sm:px-6 lg:px-8">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-center pb-16 group animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold italic text-center bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent px-4 
                        transform transition-all duration-700 group-hover:scale-105 group-hover:translate-y-1">
            Chambers of Hogwarts: Where Your Magical Journey Begins <GiFairyWand className="inline ml-2 text-purple-500 dark:text-emerald-400 text-2xl animate-pulse"
            aria-hidden="true" />
          </h2>
        </div>

        {/* Introduction Section */}
        <div className="pb-12 p-8 rounded-2xl bg-white/95 dark:bg-gray-800/95 shadow-xl backdrop-blur-sm border border-gray-300 dark:border-gray-600 
                       transition-all duration-500 hover:shadow-2xl hover:border-purple-400 dark:hover:border-emerald-400">
          <div className="flex flex-col lg:flex-row gap-10 items-center pb-10">
            <div className="relative w-full lg:w-3/5 flex-shrink-0 group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-xl opacity-75 blur-lg group-hover:opacity-100 transition-all duration-500"></div>
              <img 
                src="/Images/Houses/Flags4H1.jpg" 
                alt="Hogwarts House Crests" 
                className="relative w-auto h-full rounded-xl border-4 border-amber-400 shadow-2xl transform transition-all duration-500 group-hover:scale-103 z-10"
              />
            </div>

            <div className="flex-1 space-y-4">
              <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
                In the <b className="text-purple-600 dark:text-purple-400">10th century</b>, long before the Ministry of Magic existed, four of the most extraordinary witches and wizards of their time -
              </p>

              <ul className="grid grid-cols-2 gap-1.5 py-4">
                <li className="text-red-600 dark:text-red-400 font-medium flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-2"> </span>
                    Godric Gryffindor
                </li>

                <li className="text-yellow-600 dark:text-yellow-400 font-medium flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-2"></span> 
                  Helga Hufflepuff
                </li>

                <li className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2">
                  <span className="w-2.5 h-2.5  bg-blue-500 rounded-full mr-2"></span>
                  Rowena Ravenclaw
                </li>

                <li className="text-green-600 dark:text-green-400 font-medium flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
                  Salazar Slytherin
                </li>
              </ul>

              <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
                joined forces to establish <b className="text-purple-600 dark:text-purple-400">Hogwarts School of Witchcraft and Wizardry.</b> Their vision was to create a <b className="text-purple-600 dark:text-purple-400">hidden sanctuary</b> where young magical minds could learn and thrive, safe from the persecution of Muggles.
              </p>
            </div>
          </div>



          <div className="space-y-8 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
            {/* Godric Gryffindor */}
            <div className="p-5 rounded-lg bg-red-50/50 dark:bg-red-900/20 border-l-4 border-red-500">
              <p>
                <b className="text-red-600 dark:text-red-400">Godric Gryffindor</b>, a <b>courageous</b> and daring wizard, believed that <b>bravery and chivalry</b> were the most important traits a witch or wizard could possess. He valued <b>nobility of spirit</b> over bloodline, welcoming all who showed daring and nerve.
              </p>
            </div>

            {/* Helga Hufflepuff */}
            <div className="p-5 rounded-lg bg-yellow-50/50 dark:bg-yellow-900/20 border-l-4 border-yellow-500">
              <p>
                <b className="text-yellow-600 dark:text-yellow-400">Helga Hufflepuff</b>, the most <b>kind-hearted</b> of the four, insisted that <b>hard work, patience, and loyalty</b> were the true marks of greatness. She accepted students without prejudice, famously declaring, <b className="italic text-yellow-700 dark:text-yellow-300">"I'll take the lot and treat them just the same."</b>
              </p>
            </div>

            {/* Rowena Ravenclaw */}
           
              <div className="rounded-lg p-5 bg-blue-50/50 dark:bg-blue-900/20 border-l-4 border-blue-500">
                <p>
                  <b className="text-blue-600 dark:text-blue-400">Rowena Ravenclaw</b>, renowned for her <b>brilliance and wisdom</b>, prized <b>intelligence, creativity, and a thirst for knowledge</b>. She designed Hogwarts' ever-changing floorplan and believed that only those with a <b>sharp mind</b> deserved to unlock magic's deepest mysteries.
                </p>
              </div>
                         

            {/* Salazar Slytherin */}
            <div className="p-5 rounded-lg bg-green-50/50 dark:bg-green-900/20 border-l-4 border-green-500">
              <p>
                In stark contrast, <b className="text-green-600 dark:text-green-400">Salazar Slytherin</b>, a <b>cunning and ambitious</b> sorcerer, argued that magical education should be reserved only for those of <b>pure-blood heritage</b>. His <b>ruthless ideology</b> created the first major rift among the founders.
              </p>
            </div>

            {/* founder images */}

            <div className="relative w-3/5 group ">
                <div className=" absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl opacity-50 blur-md group-hover:opacity-60 transition-all duration-500"></div>
                <img 
                  src="/Images/Houses/founders.png" 
                  alt="Founders of Hogwarts" 
                  className="relative rounded-xl border-4 border-white h-60 sm:h-80 md:h-100 w-auto dark:border-gray-700 shadow-xl transform transition-all duration-500 group-hover:scale-105 z-10"
                />
                </div>

            {/* House Descriptions */}
            <div className="p-6 rounded-xl  bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200 dark:border-purple-800">
              <p className="pb-4">
                To resolve their disagreements, they established the <b className="text-purple-600 dark:text-purple-400">four houses</b>, each reflecting their core values:
              </p>
              
              <div className="flex gap-4 flex-wrap">

                <div className="p-4 rounded-lg bg-red-100/50 dark:bg-red-900/30">
                  <h4 className="font-bold text-red-700 dark:text-red-300">Gryffindor</h4>
                  <p className="text-sm"> For the <b>brave and bold</b></p>
                </div>

                <div className="p-4 rounded-lg bg-yellow-100/50 dark:bg-yellow-900/30">
                  <h4 className="font-bold text-yellow-700 dark:text-yellow-300">Hufflepuff 
                  </h4>
                  <p className="text-sm"> For the <b>loyal and just</b></p>
                </div>

                <div className="p-4 rounded-lg bg-blue-100/50 dark:bg-blue-900/30">
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Ravenclaw</h4>
                  <p className="text-sm"> For the <b>wise and curious</b></p>

                </div>
                <div className="p-4 rounded-lg bg-green-100/50 dark:bg-green-900/30">
                  <h4 className="font-bold text-green-700 dark:text-green-300">Slytherin</h4>
                  <p className="text-sm"> For the <b>ambitious and cunning</b></p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="space-y-4 pt-4">
              <p className='pb-4'>
                Before parting ways, the founders enchanted <b className="text-red-600 dark:text-red-400">Godric Gryffindor's hat</b> —the <b>Sorting Hat</b> —to continue their legacy, ensuring students would be sorted into houses based on their traits.
                However, <b className="text-green-600 dark:text-green-400">Salazar Slytherin</b> left behind a dark secret: the <b>Chamber of Secrets</b>, hidden deep beneath the castle, housing a <b>deadly Basilisk</b> meant to purge Hogwarts of Muggle-borns. This act of betrayal would echo through history, shaping centuries of house rivalries—and even the rise of <b>Voldemort</b>, Slytherin's last heir.
              </p>

              <div className="text-center italic text-xl px-6 py-4 bg-gradient-to-r from-purple-100 to-emerald-100 dark:from-purple-900/30 dark:to-emerald-900/30 rounded-xl border-l-8 border-purple-500 shadow-inner">
                <b className="text-purple-700 dark:text-purple-300">"Beware, unite, or fall divided..."</b> — a reminder that their story is far from over.
              </div>
            </div>
          </div>
        </div>

        {/* House Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 pt-4">
          {HogwartHouseInfo.map((house) => (
            <div 
              key={house.id}
              className={`relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] 
                        border-2 ${house.name === "Gryffindor" ? 'border-red-500 hover:shadow-red-500/30' : 
                          house.name === "Hufflepuff" ? 'border-yellow-500 hover:shadow-yellow-500/30' :
                          house.name === "Ravenclaw" ? 'border-blue-500 hover:shadow-blue-500/30' :
                          'border-green-500 hover:shadow-green-500/30'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 z-0"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
              
              <div className="relative z-10 p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* House Image */}
                  <div className="flex-shrink-0 w-48 h-48">
                    <img 
                      src={house.image} 
                      alt={house.name} 
                      className="w-autoh-auto object-contain mx-auto border-4 rounded-lg shadow-lg"
                    />
                  </div>
                  
                  {/* House Details */}
                  <div className="flex flex-col gap-3 w-full ">  {/* Changed from flex-wrap to flex-col */}
                  <h3 className={`text-3xl font-bold ${house.name === "Gryffindor" ? 'text-red-400' : 
                    house.name === "Hufflepuff" ? 'text-yellow-400' :
                    house.name === "Ravenclaw" ? 'text-blue-400' : 'text-green-400'}`}>
                    {house.name}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-200 w-full">
                    <div className='pt-2'>
                      <p className="font-semibold text-white">Founder:</p>
                      <p>{house.founder}</p>
                    </div>


                    <div className='pt-2'>  {/* Added pt-2 for consistency */}
                      <p className="font-semibold text-white">Colors:</p>
                      <p>{house.colors.join(" & ")}</p>
                    </div>

                    <div className='pt-2 '>
                      <p className="font-semibold text-white">Animal:</p>
                      <p>{house.animal}</p>
                    </div>

                    <div className='pt-2'>
                      <p className="font-semibold text-white">Element:</p>
                      <p>{house.element}</p>
                    </div>

                    {/* <div className='pt-2'>
                      <p className="font-semibold text-white">Traits:</p>
                      
                      <div className="grid grid-flow-row ">
                        {house.traits.map((trait, index) => (
                          <span 
                            key={index}
                            className="px-0.5 py-0.5 text-md"
                                >
                            {trait}, 
                          </span>
                        ))}
                      </div>

                    </div> */}

                    {/* <div className='pt-2'>
                      <p className="font-semibold text-white">Ghost:</p>
                      <p>{house.ghost}</p>
                    </div> */}


                  </div>
                  
                  <div className="w-full space-y-4">  {/* Added container with consistent spacing */}
                    <div className='pb-2'>
                      <p className="font-semibold text-white">Common Room:</p>
                      <p className="text-gray-300">{house.common_room}</p>
                    </div>
                    
                    {/* <div>
                      <p className="font-semibold text-white">Notable Members:</p>

                      <div className="grid grid-flow-row text-gray-300">
                        {house.notable_members.map((notable_members, index) => (
                          <span 
                            key={index}
                            className=" py-0.5 text-md"
                                >
                            {notable_members}, 
                          </span>
                        ))}
                      </div>
                    </div>
                     */}
                    <div>
                      <p className="font-semibold text-white">House Quote:</p>
                      <p className="italic text-gray-300">"{house.house_quote}"</p>
                    </div>

                    <div className="p-4">
                     <NavLink 
                     to={`/houses/${house.id}`}>
                      <button
                        className={`
                          px-5 py-2.5 rounded-lg text-white font-bold
                          ${house.id === 1 ? 'bg-gradient-to-r from-red-600 to-amber-500' : 
                          house.id === 2 ? 'bg-gradient-to-r from-yellow-500 to-yellow-300' :
                          house.id === 3 ? 'bg-gradient-to-r from-blue-500 to-blue-300' :
                          'bg-gradient-to-r from-green-600 to-emerald-400'}
                          hover:brightness-110 transition-all shadow-md md:text-lg
                        `}
                      >
                        Know More about {house.name} House
                      </button>
                      </NavLink>
                    </div>
                    
                    


                  </div>

                  
                </div>

                
                </div>

                
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Houses;