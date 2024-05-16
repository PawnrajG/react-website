import React, { useState } from "react";
import {RiMenuFill, RiCloseLargeFill} from "react-icons/ri";

const Navbar = () =>{
    //using states in react.js
    const [menu, setMenu] = useState(false) // here the menu = false 
    const handleMenu = () =>{
        setMenu(!menu);  // when menu is clicked then setMenu(true)
    };
    return(
        <div className="mx-auto max-w-screen-lg text-white flex flex-row w-full justify-between items-center m-5 px-5">
            <div className="flex flex-row items-center">
                <img src="logo512.png" className="h-11" />
                <h4 className="text-2xl font-bold mx-1 px-1 text-cyan-300">REACT.</h4>
            </div> 
            <ul className="hidden flex-row md:flex">
                <li className="mx-4 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer">Home</li>
                <li className="mx-4 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer">Company</li>
                <li className="mx-4 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer">Resources</li>
                <li className="mx-4 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer">Contact</li>
                <li className="mx-4 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer">About</li>
            </ul>
            <div className="md:hidden text-cyan-300 cursor-pointer" onClick = {handleMenu}>
                {!menu ? <RiCloseLargeFill size={20}/> : <RiMenuFill size={20}/>}
            </div>
            <div className={!menu ? "md:hidden fixed w-[40%] top-0 left-0 h-full border-r border-r-gray-600 bg-[#000300] ease-in-out duration-1000" : "hidden left-[-100%]"}>
                <div className="flex flex-row items-center m-5">
                    <img src="logo512.png" className="h-11" />
                    <h4 className="text-2xl font-bold mx-1 px-1 text-cyan-300">REACT.</h4>
                </div>
                <ul className="my-20 text-xl">
                   <li className="text-cyan-300 hover:text-cyan-100 my-5 py-3 px-10 border-b border-b-gray-900 cursor-pointer">Home</li>
                   <li className="text-cyan-300 hover:text-cyan-100 my-5 py-3 px-10 border-b border-b-gray-900 cursor-pointer">Company</li>
                   <li className="text-cyan-300 hover:text-cyan-100 my-5 py-3 px-10 border-b border-b-gray-900 cursor-pointer">Resources</li>
                   <li className="text-cyan-300 hover:text-cyan-100 my-5 py-3 px-10 border-b border-b-gray-900 cursor-pointer">Contact</li>
                   <li className="text-cyan-300 hover:text-cyan-100 my-5 py-3 px-10 border-b border-b-gray-900 cursor-pointer">About</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar