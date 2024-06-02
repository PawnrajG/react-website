import React from 'react';
import HTML from '../assets/html.png';
import REACT from '../assets/react.png';
import CSS from '../assets/tailwindcss.png';
const Techcards = () =>{
    return(
        <div className='w-full bg-white my-8'>
            <h1 className='text-2xl font-bold text-center p-10 text-cyan-400 md:text-4xl'>Technologies used</h1>
            <div className='max-w-screen-lg mx-auto grid grid-row-1 gap-0 md:grid-cols-3 p-4'>
                <div className='text-center h-auto w-full md:w-72 text-black text-lg flex flex-col justify-around items-center shadow-xl border-2 p-3 my-3 md:ml-3 md:p-5 md:my-10 rounded-xl hover:scale-105 duration-300'>
                    <img className="w-24 md:w-32 rounded-full" src={HTML} alt="/" />
                    <h2 className='m-3 text-xl font-bold'>HyperText Markup Language</h2>
                    <p className='m-3 text-sm'>The standard language for structuring web content using elements like headings, paragraphs, and links. It provides the basic framework for web pages.</p>
                </div>
                <div className='text-center h-auto w-full md:w-72 text-black text-lg flex flex-col justify-around items-center shadow-xl border-2 p-3 my-3 md:ml-4 md:my-5 md:p-5 rounded-xl hover:scale-105 duration-300'>
                    <img className="w-24 md:w-32 rounded-full" src={CSS} alt="/" />
                    <h2 className='m-3 text-xl font-bold'>Tailwind CSS</h2>
                    <p className='m-3 text-sm'>A utility-first CSS framework that allows for rapid styling directly in HTML. It promotes consistency and efficiency without writing custom CSS.</p>
                </div>
                <div className='text-center h-auto w-full md:w-72 text-black text-lg flex flex-col justify-around items-center shadow-xl border-2 p-3 my-3 md:ml-6 md:my-10 md:p-5 rounded-xl hover:scale-105 duration-300'>
                    <img className="w-24 md:w-32 rounded-full" src={REACT} alt="/" />
                    <h2 className='m-3 text-xl font-bold'>React</h2>
                    <p className='m-3 text-sm'>A JavaScript library for building dynamic and interactive user interfaces. It emphasizes reusable components and efficient state management for single-page applications.</p>
                </div>
            </div>
        </div>
    );
}

export default Techcards;