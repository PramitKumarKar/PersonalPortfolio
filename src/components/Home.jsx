import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'
import profilePicture1 from "../assets/profilePicture1.jpeg"
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>Full Stack Developer</h2>
          <p className='text-gray-400 py-4 max-w-md'>
            I have been working on personal and academic projects for the past 1+ year and love working on softwares like ReactJS, NodeJS, Tailwind etc.
          </p>
          <div>
            <Link to='portfolio' duration={500} smooth className='group text-white  w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-600 to-pink-600 hover:cursor-pointer'>
              Portfolio 
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={20} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={profilePicture1} alt="mypic" className='rounded mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home