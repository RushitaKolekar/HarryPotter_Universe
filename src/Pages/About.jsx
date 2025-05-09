import React from 'react';
import { useEffect } from 'react';

const About = () => {
  // Add Harry Potter font dynamically
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.cdnfonts.com/css/harry-potter';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">

      {/* Parchment-style header */}
      <header>
        <div className="container mx-auto px-4 py-8 md:py-12  text-center">
          <h1 
            className="text-4xl pt-4 md:text-6xl text-orange-200"
            style={{ fontFamily: '"Harry Potter", cursive' }}
          >
            About The Magic
          </h1>
        </div>
      </header>

      {/* Main content - parchment style */}
      <main className="pb-6 px-4 sm:px-6">
        <div 
          className="container mx-auto max-w-4xl rounded-lg shadow-lg p-6 md:p-12 border-l-4 md:border-l-8 border-amber-200"
          style={{
            backgroundColor: 'rgba(253, 245, 230, 0.9)',
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")'
          }}
        >
          <section className="pb-4">
            <h2 
              className="text-2xl md:text-3xl pb-4 border-b-2 border-amber-500"
              style={{ fontFamily: '"Harry Potter", cursive', color: '#5c2c0a' }}
            >
              Our Story
            </h2>
            <div className="text-base md:text-lg text-justify px-2 md:px-4 pt-4 leading-relaxed" style={{ color: '#5c2c0a' }}>
              <p className='pb-2'>
                <span 
                  className="text-2xl float-left pr-1" 
                  style={{ fontFamily: 'serif', color: '#8b5a2b' }}
                >
                  W
                </span>
                elcome, dear witch, wizard, or Muggle, to this humble haven of all things Harry Potter! This is a place where the enchantment of J.K. Rowling's wizarding world lives on—through discussions, nostalgia, and the shared love of fans like you. Whether you're a Gryffindor at heart, a Slytherin in ambition, or simply someone who still waits for their Hogwarts letter, you're among friends here.
              </p>

              <p className='pb-2'>While this page is conjured with the best intentions, it's important to remember: No owls were harmed in the making of this fan site. This is an independent project, run purely on passion and Butterbeer-fueled enthusiasm. All rights belong to their respective creators—we're just here to celebrate them!</p>

              <p className='pb-2'>I'm <strong>Rushi</strong>, a lifelong Potterhead who still checks their wardrobe for secret platforms. Like many of you, I grew up with these stories, and they've shaped my love for fantasy, friendship, and the belief that happiness can be found even in the darkest of times—if one only remembers to turn on the light.</p>

              <p className='pb-2'>
              Fandom is best when shared, so whether you're here to debate the best Dumbledore quote, share your Patronus, or just revel in nostalgia, I'd love to hear from you! 
              Drop a comment—after all, help will always be given at this page to those who ask for it.
              </p>
              
              <p >
              Mischief managed! ✨
              </p>
            </div>
          </section>

          <section 
            className="bg-white p-4 md:p-6 rounded-lg shadow-md border-2 border-amber-200"
            style={{
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/rice-paper.png")'
            }}
          >
            <h2 
              className="text-xl md:text-2xl pb-2"
              style={{ fontFamily: '"Harry Potter", cursive', color: '#5c2c0a' }}
            >
              Disclaimer
            </h2>
            <p className="text-sm md:text-base" style={{ color: '#5c2c0a' }}>
            ⚠️ This isn't official - just a Ravenclaw's midnight project that got out of hand. No golden snitches were harmed in the making.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;