import React from "react";

const Newsletter = () =>{
    return(
        <div className="my-28 max-w-screen-lg mx-auto flex flex-col md:flex-row w-full h-auto bg-black text-white justify-center items-center" id='newsletter'>
            <div className="m-4">
                <h2 className="text-xl font-bold md:text-2xl">Want tips & tricks to optimize you flow?</h2>
                <p className="mt-5">Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className="flex justify-center items-center flex-col h-32 m-6">
                <form className="flex flex-row justify-around items-center">
                    <input className="py-2 px-2 w-48 text-sm md:py-3 md:px-4 md:w-72 md:text-lg text-black border-none rounded-lg" type="email" placeholder="Enter your email..."/>
                    <a href="#" className="w-[95px] md:w-[150px] border-2 border-cyan-300 text-black bg-cyan-300 font-bold rounded-lg px-3 py-2 mx-2 text-sm md:text-lg md:px-6 md:py-3 md:mx-4">Notify Me</a>
                </form>
                <p className="mt-5">We care about the protection of your data. Read our <a className="text-cyan-300 underline cursor-pointer">Privacy Policy.</a></p>
            </div>
        </div> 
    );
}

export default Newsletter;