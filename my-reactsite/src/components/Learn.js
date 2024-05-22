import React from "react";

const Learn = () =>{
    return(
        <div className="flex flex-row w-full h-[720px] bg-slate-100">
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SqcY0GlETPk?si=QgMetgzUZdAtm1Bf" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div>
                <h4>TO GET STARTED WITH BASICS</h4>
                <h2>React for Beginners</h2>
                <p>Before learning react you must me familiar with the basics of HTML, CSS and javascript and ensure you are done with some projects</p>
            </div>
        </div>
    );
}

export default Learn