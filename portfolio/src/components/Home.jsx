import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {FaArrowRight} from 'react-icons/fa'
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-500'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4'>
            
            {/* text and arrow parent */}
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'> 
                    Hi! I am a Front-End Developer
                </h2>

                <p className='text-gray-500 py-4 max-w-md'>
                    I have 4 years of experience in the field of Computer Science, and I spent two of those years designing and creating web applications.
                    Currently, I am working on applying my experience onto real projects.
                    And I have experience using technologies like React, Tailwind, MongoDB, MySQL, and Firebase.
                </p>

                {/* button container */}
                <div>
                    <Link
                    to="portfolio"
                    smooth
                    duration={500}
                    className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                    >
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                    <FaArrowRight size={25} className='ml-1'/>
                    </span>
                    </Link>
                </div>
            </div>

            {/* image container, edit md:<w-full> to manage size of image in large screen*/}
            <div>
                <img
                src={HeroImage}
                alt="my profile"
                className="rounded-2xl mx-auto w-2/3 md:w-full"
                />
            </div>

        </div>
    </div>
  )
}

export default Home