import React, {useRef,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegQuestionCircle } from "react-icons/fa";

function ToggleMenu({ onClose, ref,isopen }) {  


    const internalRef = useRef(null);

    // Prevent scrolling when overlay is open
      useEffect(() => {
        if (!isopen || !internalRef.current) return;
      
        const header = document.querySelector('header');
        const headerHeight = header?.offsetHeight || 50;
    
        const spaceAvailable = Math.max(window.innerHeight - headerHeight, 100);
      
        const contentHeight = Math.max(
          internalRef.current.scrollHeight,
          spaceAvailable * 0.7
        );
      
        internalRef.current.style.height = `${contentHeight}px`;
        document.body.style.overflow = 'hidden';
      
        return () => {
          document.body.style.overflow = '';
          if (internalRef.current) internalRef.current.style.height = '';
        };
      }, [isopen]);
    
    
  // Combine refs (forwarded + internal)
  useEffect(() => {
    if (typeof ref === 'function') {
      ref(internalRef.current);
    } else if (ref) {
      ref.current = internalRef.current;
    }
  }, [ref]);


  //click outside handler
  useEffect(() => {
    const handleOutsideInteraction = (event) => {

      // 1. Check if click/focus is outside menu
      if (internalRef.current && !internalRef.current.contains(event.target)) {

        // 2. Check if the new focus is outside menu
        const focusedElement = event.target;
        if (!internalRef.current.contains(focusedElement))
         {
          onClose();
        }
      }
    };

    // Add both mouse and keyboard event listeners
    document.addEventListener('mousedown', handleOutsideInteraction);
    document.addEventListener('focusin', handleOutsideInteraction);

    return () => {
      document.removeEventListener('mousedown', handleOutsideInteraction);
      document.removeEventListener('focusin', handleOutsideInteraction);
    };
  }, [onClose]);


    const menuItems = [
      { path: "/", name: "Home" },
      { path: "/books", name: "Books" },
      { path: "/movies", name: "Movies" },
      { path: "/houses", name: "Houses" },
      { path: "/games", name: "Games" },
      { path: "/facts", name: "Facts" },
      { path: "/QnA", name: <FaRegQuestionCircle  /> }
    ];

  return (

    <div 
      ref={internalRef}
      className="fixed top-20 right-0 bg-violet-700 bg-opacity-50 rounded-lg shadow-xl z-30 border border-black no-scrollbar 
      transition-all duration-300 ease-in-out"
      style={{
        maxHeight: 'calc(100vh - 8rem)',
        overflowY: 'auto',
        width: '15rem',
        boxSizing: 'border-box',
      }}
    >
      <nav>
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => `
              block px-3 py-1 text-white hover:text-gray-800 hover:font-bold transition-colors

              ${isActive ? 'font-medium underline' : ''}

              ${index !== menuItems.length - 1 ? 'border-b border-gray-700' : ''} 
             
            `}
            onClick={onClose}
          >
            <div className="text-lg py-10 px-6 flex items-center justify-center" style={{
                boxSizing:'border-box',
                padding: '1rem',

            }}>
              {item.name}
            </div>
          </NavLink>
        ))}
      </nav>
    </div>
  
  );
}

export default ToggleMenu;