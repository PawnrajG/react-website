import React from 'react';
import HTML from '../assets/html.png';
import REACT from '../assets/react.png';
import CSS from '../assets/tailwindcss.png';
const Techcards = () =>{
    return(
        <div className='w-full bg-white my-8'>
            <h1 className='text-4xl font-bold text-center p-10 text-cyan-400'>Technologies used</h1>
            <div className=' max-w-screen-lg mx-auto grid grid-cols-3 gap-0'>
                <div className='text-center h-auto w-72 text-black text-lg flex flex-col justify-around items-center shadow-xl border-2 ml-8 p-5 my-10 rounded-xl hover:scale-105 duration-300'>
                    <img className="w-32 rounded-full" src={HTML} alt="/" />
                    <h2 className='m-3 text-xl font-bold'>HyperText Markup Language</h2>
                    <p className='m-3 text-sm'>The standard language for structuring web content using elements like headings, paragraphs, and links. It provides the basic framework for web pages.</p>
                </div>
                <div className='text-center h-auto w-72 text-black text-lg flex flex-col justify-around items-center shadow-xl border-2 ml-7 my-5 p-5 rounded-xl hover:scale-105 duration-300'>
                    <img className="w-32 rounded-full" src={CSS} alt="/" />
                    <h2 className='m-3 text-xl font-bold'>Tailwind CSS</h2>
                    <p className='m-3 text-sm'>A utility-first CSS framework that allows for rapid styling directly in HTML. It promotes consistency and efficiency without writing custom CSS.</p>
                </div>
                <div className='text-center h-auto w-72 text-black text-lg flex flex-col justify-around items-center shadow-xl border-2 ml-6 my-10 p-5 rounded-xl hover:scale-105 duration-300'>
                    <img className="w-32 rounded-full" src={REACT} alt="/" />
                    <h2 className='m-3 text-xl font-bold'>React</h2>
                    <p className='m-3 text-sm'>A JavaScript library for building dynamic and interactive user interfaces. It emphasizes reusable components and efficient state management for single-page applications.</p>
                </div>
            </div>
        </div>
    );
}

export default Techcards;