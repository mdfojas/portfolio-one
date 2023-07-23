import React from 'react'

// To Do: Update this pictures, this is the picture per project that I made
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

    //update this projects, and update the links
    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            code: "https://github.com/mdfojas",
            demo: "https://www.facebook.com/fojas.mark/",
        },
        {
            id: 2,
            src: installNode,
            code: "https://github.com/mdfojas",
            demo: "https://www.facebook.com/fojas.mark/",
        },
        {
            id: 3,
            src: navbar,
            code: "https://github.com/mdfojas",
            demo: "https://www.facebook.com/fojas.mark/",
        },
        {
            id: 4,
            src: reactSmooth,
            code: "https://github.com/mdfojas",
            demo: "https://www.facebook.com/fojas.mark/",
        },
        {
            id: 5,
            src: reactParallax,
            code: "https://github.com/mdfojas",
            demo: "https://www.facebook.com/fojas.mark/",
        },
        {
            id: 6,
            src: reactWeather,
            code: "https://github.com/mdfojas",
            demo: "https://www.facebook.com/fojas.mark/",
        },
    ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen '>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className='py-6'>
                    Check out some of my recent works right here
                </p>
            </div>

            {/* Start of Card Structure */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>            
                {portfolios.map((project)=>(
                    <div key={project.id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={project.src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                        <button
                            onClick={() => window.open(project.demo ? project.demo : "/", "_blank")}
                            className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                        >
                            Demo
                        </button>
                        <button
                            onClick={() => window.open(project.code ? project.code : "/", "_blank")}
                            className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                        >
                            Source Code
                        </button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Portfolio