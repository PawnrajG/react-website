import React, { useState } from "react";
import {RiMenuFill, RiCloseLargeFill} from "react-icons/ri";

const Navbar = () =>{
    //using states in react.js
    const [menu, setMenu] = useState(true) // here the menu = true 
    const handleMenu = () =>{
        setMenu(!menu);  // when menu is clicked then setMenu(true)
    };
    return(
        <div className="mx-auto max-w-screen-lg text-white flex flex-row w-full justify-between items-center m-5 px-5">
            <div className="flex flex-row items-center">
                <img src="logo512.png" className="h-11" />
                <h4 className="text-2xl font-bold mx-1 px-1 text-cyan-300">REACT</h4>
            </div> 
            <ul className="hidden text-lg flex-row md:flex">
                <li className="mx-4 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer transform hover:scale-110 transition ease-in-out duration-300">Home</li>
                <li className="mx-4 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer transform hover:scale-110 transition ease-in-out duration-300">Company</li>
                <li className="mx-4 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer transform hover:scale-110 transition ease-in-out duration-300">Resources</li>
                <li className="mx-4 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer transform hover:scale-110 transition ease-in-out duration-300">Contact</li>
                <li className="mx-4 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer transform hover:scale-110 transition ease-in-out duration-300">About</li>
            </ul>
            <div className="md:hidden text-cyan-300 cursor-pointer" onClick = {handleMenu}>
                {!menu ? <RiCloseLargeFill size={25}/> : <RiMenuFill size={25}/>}
            </div>
            <div className={!menu ? "md:hidden fixed w-72 top-0 left-0 h-full border-r border-r-gray-600 bg-[#000300] ease-in-out duration-500" : "hidden left-[-100%]"}>
                <div className="flex flex-row items-center m-5">
                    <img src="logo512.png" className="h-11" />
                    <h4 className="text-2xl font-bold mx-1 px-1 text-cyan-300">REACT</h4>
                </div>
                <ul className="my-20 uppercase">
                   <li className="text-cyan-300 hover:text-cyan-100 m-5 py-3 px-10 border-y border-y-gray-900 cursor-pointer">Home</li>
                   <li className="text-cyan-300 hover:text-cyan-100 m-5 py-3 px-10 border-y border-y-gray-900 cursor-pointer">Company</li>
                   <li className="text-cyan-300 hover:text-cyan-100 m-5 py-3 px-10 border-y border-y-gray-900 cursor-pointer">Resources</li>
                   <li className="text-cyan-300 hover:text-cyan-100 m-5 py-3 px-10 border-y border-y-gray-900 cursor-pointer">Contact</li>
                   <li className="text-cyan-300 hover:text-cyan-100 m-5 py-3 px-10 border-y border-y-gray-900 cursor-pointer">About</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar