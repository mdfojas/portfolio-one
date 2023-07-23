import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b
    from-gray-500 to-black to-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex
        flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl 
                font-bold inline border-b-4 
                border-gray-50'>
                    About</p>
            </div>

            <p className='text-xl mt-20'>
            Hello! I'm Mark Oliver Fojas, a recent Computer Science graduate with a passion for web development. Throughout my academic journey, I've been fascinated by the world of programming and the limitless possibilities it offers. From coding my first "Hello, World!" program to diving deep into web technologies, I have discovered my true calling as an aspiring Front-end developer. The art of crafting visually appealing and interactive user interfaces excites me, and I'm driven to create seamless online experiences that captivate users. As a continuous learner, I thrive on staying up-to-date with the latest trends and best practices in web development, and I'm eager to apply my skills to contribute to innovative projects and make a positive impact on the digital landscape.
            </p>

            <br/>

            <p className='text-xl'>
                Apart from my tech endeavors, I'm an avid adventurer and a lover of the great outdoors. Whether it's hiking through scenic trails, exploring new destinations, or simply spending time in nature's embrace, I find solace and inspiration in the beauty of the world around us. I believe in the power of empathy and collaboration, and I actively seek opportunities to work with diverse teams to gain fresh perspectives and learn from others. When I'm not immersed in code or exploring new places, you'll likely find me enjoying a good book, experimenting with cooking recipes, or engaging in stimulating discussions about technology, design, and the future of the digital realm. With an unwavering drive and a curious spirit, I'm excited to embark on my journey as a Front-end developer, ready to turn imagination into reality, one line of code at a time.
            </p>
        </div>
    </div>
  )
}

export default About