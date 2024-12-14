import React from 'react'
import Video4 from '../assets/Video4.mp4'
const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:20">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center tracking-wide">
            Bhaang Golis From SFC 
            <span className='bg-gradient-to-r from-green-200 to-green-800 bg-clip-text text-transparent px-10'>
            for SFC
            </span>
            
        </h1>
        <p className='mt-20 text-lg text-neutral-500 max-w-4xl'>
            neighbour and somenone nd someon just slef goli form room to patna to worls
        </p>
        <div className="justify-center flex my-10">
            <a href='#' className='bg-gradient-to-r from-green-200 to-green-700 py-3 px-4 mx-3 rounded-md'>
                 Buy Now 
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className='rounded-lg w-1/2 border border-green-400 shadow-green-600 mx-2 my-4'>
            <source src={Video4} type='video/mp4'/>
            </video>
        </div>
    </div>
  )
}

export default Hero
