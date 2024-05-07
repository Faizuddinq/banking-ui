import React, { useState } from 'react'
import {close, logo, menu} from '../assets'
import {navLinks} from '../constants'
const Navbar = () => {
  const [toggle, setToggle]=useState(false);
  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    setToggle(false);
  };



  return (
    <nav className=' w-full flex py-6  justify-between items-center navbar'>
      <img src={logo} alt="hoobank" className=' w-[124px] h-[32px]'/>
      {/* <div className=' text-white'>Bank uno</div> */}
      <ul className=' list-none sm:flex hidden justify-end items-center flex-1'>
        {
          navLinks.map((nav, index)=>(
            <li 
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[18px] text-white mr-10
            hover:border-b-2 border-white-600 transition-colors duration-300
            `}
            >
              <a href={`#${nav.id}`}>
                {nav.title}

              </a>
            </li>
          ))
        }
      </ul>

      <div className=' sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle? close:menu}
        alt="Menu"
        className=' w-[28px] h-[28px] object-contain cursor-pointer'
        // onClick={()=> setToggle(!toggle)}
        //not good for reactjs practice
        onClick={()=> setToggle((prev)=>!prev)}
        />
      </div>
      <div className={toggle ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setToggle(false)}
            >
            <img src={close} alt="close" className=' w-[28px] h-[28px] object-contain cursor-pointer' />  
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-[28px] font-semibold text-white">
              <li className="border-b border-white-600 my-8 uppercase"
              
              >
                <a href="#home" onClick={handleLinkClick}>Home</a>
              </li>
              <li className="border-b border-white-600 my-8 uppercase">
                <a href="#features" onClick={handleLinkClick}>Features</a>
              </li>
              <li className="border-b border-white-600 my-8 uppercase">
                <a href="#product" onClick={handleLinkClick}>Product</a>
              </li>
              <li className="border-b border-white-600 my-8 uppercase text-center">
                <a href="#clients" onClick={handleLinkClick}>Clients & <br /> Testimonial</a>
              </li>
              
            </ul>
          </div>
        
    
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: blue;
        background-color: transparent;
            border-radius: 10px;
            backdrop-filter: blur(5px);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    
    </nav>
  )
}

export default Navbar
