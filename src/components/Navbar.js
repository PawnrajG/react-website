import React, { useState } from "react";
import {RiMenuFill, RiCloseLargeFill} from "react-icons/ri";
import {Link} from 'react-scroll';

const Navbar = () =>{
    //using states in react.js
    const [menu, setMenu] = useState(true) // here the menu = true 
    const handleMenu = () =>{
        setMenu(!menu);  // when menu is clicked then setMenu(true)
    };
    return(
        <div className="fixed mx-auto max-w-screen-lg text-white flex flex-row w-full justify-between items-center p-4 bg-black" id='navbar'>
            <div className="flex flex-row items-center">
                <img src="logo192.png" className="h-11" />
                <h4 className="text-2xl font-bold mx-1 px-1 text-cyan-300">REACT</h4>
            </div> 
            <ul className="hidden text-lg flex-row md:flex">
                <Link to="hero" spy={true} smooth={true} offset={1} duration={500} className="mx-4 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer transform hover:scale-110 transition ease-in-out duration-300">Home</Link>
                <Link to="learn" spy={true} smooth={true} offset={1} duration={500} className="mx-4 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer transform hover:scale-110 transition ease-in-out duration-300">Learn</Link>
                <Link to="newsletter" spy={true} smooth={true} offset={1} duration={500} className="mx-4 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer transform hover:scale-110 transition ease-in-out duration-300">Contact</Link>
                <Link to="techcards" spy={true} smooth={true} offset={11} duration={500} className="mx-4 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer transform hover:scale-110 transition ease-in-out duration-300">Resources</Link>
                <Link to="footer" spy={true} smooth={true} offset={50} duration={500} className="mx-4 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer transform hover:scale-110 transition ease-in-out duration-300">About</Link>
            </ul>
            <div className="md:hidden text-cyan-300 cursor-pointer" onClick = {handleMenu}>
                {!menu ? <RiCloseLargeFill size={25} /> : <RiMenuFill size={25}/>}
            </div>
            <div className={!menu ? "md:hidden fixed w-72 top-0 left-0 h-full border-r border-r-gray-600 bg-[#000300] ease-in-out duration-500" : "hidden left-[-100%]"}>
                <div className="flex flex-row items-center mb-5 p-4">
                    <img src="logo192.png" className="h-11" />
                    <h4 className="text-2xl font-bold mx-1 px-1 text-cyan-300">REACT</h4>
                </div>
                <ul className="my-20 uppercase flex flex-col">
                   <Link to="hero" spy={true} smooth={true} offset={1} duration={500} className="text-cyan-300 hover:text-cyan-100 m-5 py-3 px-10 border-y border-y-gray-900 cursor-pointer">Home</Link>
                   <Link to="learn" spy={true} smooth={true} offset={1} duration={500} className="text-cyan-300 hover:text-cyan-100 m-5 py-3 px-10 border-y border-y-gray-900 cursor-pointer">Learn</Link>
                   <Link to="newsletter" spy={true} smooth={true} offset={1} duration={500} className="text-cyan-300 hover:text-cyan-100 m-5 py-3 px-10 border-y border-y-gray-900 cursor-pointer">Resources</Link>
                   <Link to="techcards" spy={true} smooth={true} offset={11} duration={500} className="text-cyan-300 hover:text-cyan-100 m-5 py-3 px-10 border-y border-y-gray-900 cursor-pointer">Contact</Link>
                   <Link to="footer" spy={true} smooth={true} offset={50} duration={500} className="text-cyan-300 hover:text-cyan-100 m-5 py-3 px-10 border-y border-y-gray-900 cursor-pointer">About</Link>
                </ul>
            </div>
        </div>
    );
}

export default Navbar