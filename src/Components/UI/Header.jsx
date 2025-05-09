import React, { useState ,useEffect,useRef} from 'react'
import { NavLink} from 'react-router-dom';
import { CgMenuRightAlt } from "react-icons/cg";
import { RiCloseCircleLine } from "react-icons/ri";
import ToggleMenu from '../Layout/ToggleMenu';

function Header() {

  const [isMobileMenuOpen,setIsMObileMenuOpen] =useState(false);

  const menuRef = useRef(null);
  
  //for toggle button
  const toggleMobileMenu=()=>{
    setIsMObileMenuOpen(!isMobileMenuOpen);
  };

  // Active link style function
  const getNavLinkClass = ({ isActive }) => 
    isActive 
      ? 'bold underline sm:text-lg md:text-xl underline-offset-4  text-black'
      : 'text-white md:hover:text-xl sm:hover:text-lg px-3 py-1  transition-colors';

  return (
  <>
    <header>

    <div>

      <div className='flex flex-row justify-center  items-center bg-violet-600 h-auto min-w-auto  '>

        <div>

          <NavLink to="/">
          <h1><img src="/public/images/OtherStuff/LOGO_BlackNoBG.png" alt="logo" className='h-23 w-45 shrink-0 ' /></h1>
          </NavLink>


        </div>

        <nav>
          <ul className='hidden  md:flex md:gap-8 md:text-lg  
          sm:flex sm:gap-1 sm:text-md
          flex-row items-center justify-center font-bold text-white 
          '> 
            <li><NavLink to= "/" className= {getNavLinkClass} end>Home</NavLink></li>
            <li><NavLink to= "/books" className={getNavLinkClass}>Books</NavLink></li>
            <li><NavLink to= "/movies" className={getNavLinkClass}>Movies</NavLink></li>
            <li><NavLink to= "/houses" className={getNavLinkClass}>Houses</NavLink></li>
            <li><NavLink to= "/games" className={getNavLinkClass}>Games</NavLink></li>
            <li><NavLink to= "/facts" className={getNavLinkClass}>Facts</NavLink></li>
            <li><NavLink to= "/Snaps" className={getNavLinkClass}>Snaps</NavLink></li>

          </ul>
        </nav>
      
        <button 
        onClick={toggleMobileMenu}
        aria-label='Toggle Menu'
        className='sm:hidden md:hidden text-3xl focus:outline-none'
        >
          {isMobileMenuOpen ? <RiCloseCircleLine/> :<CgMenuRightAlt/>}
        </button>

      </div>    

    </div>
  </header>

  {isMobileMenuOpen && (
        <ToggleMenu onClose = {toggleMobileMenu} ref={menuRef} isOpen={isMobileMenuOpen}/>
      
      )}
  </>
  )
}

export default Header