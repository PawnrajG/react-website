import React from "react";

const Learn = () =>{
    return(
        <div className="w-full bg-slate-100">
            <div className="mx-auto max-w-screen-lg grid sm:grid-cols-2 justify-center items-center p-3">
                <iframe className="rounded-3xl w-auto h-64 md:w-[475px] md:h-[300px] m-5" src="https://www.youtube.com/embed/SqcY0GlETPk?si=EZ-baZAsuBWvkvyF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className="text-black font-bold m-5 flex flex-col">
                    <h2 className="text-2xl md:text-4xl text-cyan-400 m-4">React for Beginners</h2>
                    <p className="text-slate-700 mx-4 mb-4 font-semibold">Before learning react you must me familiar with the basics of HTML, CSS and javascript and ensure you are done with some projects.</p>
                    <a href="https://react.dev/learn" className="w-[150px] border-2 border-black text-black rounded-full px-5 py-2 m-4 tranform hover:scale-110 transition ease-in-out duration-300">Start Learning</a>
                </div>
            </div>  
        </div>
    );
}

export default Learn