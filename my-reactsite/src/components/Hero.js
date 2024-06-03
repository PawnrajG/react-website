import React from "react";
import {ReactTyped} from "react-typed";
const Hero = () =>{
    return(
        <div className="text-white" id='hero'>
            <div className="font-bold mx-auto max-w-screen-lg flex flex-col h-screen w-full md:mt-3 p-5 justify-center items-center">
                <img src="logo192.png" className="h-24 md:h-32 animate-bounce"/>
                <h2 className="text-center uppercase md:text-2xl text-sm text-cyan-300 m-2 p-1">To learn about the react</h2>
                <h1 className="text-center md:text-6xl text-2xl w-auto text-white m-2 p-1">Create Web in React.</h1>
                <ReactTyped className="text-sm md:text-2xl md:max-w-full max-w-lg text-white m-2 p-1 self-center text-center" strings={["A fast and interactive user interface."," A fast and interactive user experience."]} typeSpeed={100} backSpeed={50} loop></ReactTyped>
                <p className="hidden md:block md:max-w-full max-w-lg md:text-xl text-xs w-auto text-gray-600 mt-2 p-1 self-center text-center">It's widely used in both small projects and large-scale applications.</p>
                <a href="https://react.dev" className="border-2 rounded-full px-5 py-2 my-10 tranform hover:scale-110 transition ease-in-out duration-300">Get Started</a>
            </div>
        </div>
    );
}

export default Hero