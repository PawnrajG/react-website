import React from 'react';
import {Link} from 'react-scroll';
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa';
const Footer = () =>{
    return(
        <div className='bg-black my-10' id='footer'>
            <div className='max-w-screen-lg mx-auto w-full flex flex-row justify-around'>
                <section className='md:m-5 w-40 h-10'>
                    <div className='flex flex-row justify-center items-center w-32 ml-3 md:ml-4'>
                        <img src="logo192.png" className="h-9" />
                        <h4 className="text-xl md:text-2xl font-bold mx-1 px-1 text-cyan-300">REACT</h4>
                    </div>
                    <div className='text-md text-cyan-300 md:mx-3 m-3 md:ml-9 my-3 md:my-5'>
                        <p className='px-3'>&copy;2024</p>
                        <section className='w-auto h-18 flex flex-row text-cyan-300 my-12 md:hidden'>
                            <FaFacebookSquare className='text-xl m-2' />
                            <FaGithubSquare className='text-xl m-2' />
                            <FaInstagram className='text-xl m-2' />
                            <FaLinkedin className='text-xl m-2' />
                        </section>
                    </div>
                </section>
                <section className='h-auto w-40 md:p-5 mx-5'>
                    <ul className="md:text-lg text-sm flex flex-col text-end md:text-justify">
                        <Link to="hero" spy={true} smooth={true} offset={1} duration={500} className="m-2 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer transform hover:scale-110 transition ease-in-out duration-300">Home</Link>
                        <Link to="learn" spy={true} smooth={true} offset={1} duration={500} className="m-2 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer transform hover:scale-110 transition ease-in-out duration-300">Learn</Link>
                        <Link to="newsletter" spy={true} smooth={true} offset={1} duration={500} className="m-2 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer transform hover:scale-110 transition ease-in-out duration-300">Contact</Link>
                        <Link to="techcards" spy={true} smooth={true} offset={11} duration={500} className="m-2 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer transform hover:scale-110 transition ease-in-out duration-300">Resources</Link>
                        <Link to="footer" spy={true} smooth={true} offset={50} duration={500} className="m-2 p-1 text-cyan-300 hover:text-cyan-100 cursor-pointer transform hover:scale-110 transition ease-in-out duration-300">About</Link>
                    </ul>
                </section>
                <div className='hidden md:flex flex-col justify-around items-center'>
                    <section className='text-sm text-cyan-300 m-5 p-3'>
                        This is why React is more than a library, an architecture, or even an ecosystem. React is a community.
                        It’s a place where you can ask for help, find opportunities, and meet new friends. You will meet both developers and designers, 
                        beginners and experts, researchers and artists, teachers and students. 
                    </section>
                    <section className='w-auto h-18 flex flex-row text-cyan-300 m-5'>
                        <FaFacebookSquare className='text-2xl m-5' />
                        <FaGithubSquare className='text-2xl m-5' />
                        <FaInstagram className='text-2xl m-5' />
                        <FaLinkedin className='text-2xl m-5' />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Footer;