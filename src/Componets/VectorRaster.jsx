import React from 'react'

const VectorRaster = () => {
  return (
    <div
      id='projects'
      className='bg-[#3B3838] scroll-smooth text-white font-sans min-h-screen flex items-center justify-center'
    >
      <div className='flex justify-between flex-col 2xl:flex-row w-full p-8'>
        <div className='flex justify-center 2xl:hidden  items-center'>
          <div className='text-[#000000] justify-between h-full mb-8 flex items-center gap-5'>
            {['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S'].map((letter, index) => (
              <span key={index} className='project-text'>
                {letter}
              </span>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center gap-5 mb-8'>
          <h2 className='simple-heading pb-4 text-center'>VECTOR</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2 gap-5'>
            <div className='vector-images text-center overflow-hidden'>
              <img
                src='j.png'
                alt='Vector Image 1'
                className='w-full h-full object-contain bg-[#3B3838]'
              />
            </div>
            <div className='vector-images text-center overflow-hidden'>
              <img
                src='2.jpeg'
                alt='Vector Image 2'
                className='w-full h-full object-contain bg-[#3B3838]'
              />
            </div>
            <div className='vector-images text-center overflow-hidden'>
              <img
                src='https://res.cloudinary.com/dzh3qalmv/image/upload/v1737744581/Rectangle_2_woil0h.png'
                alt='Vector Image 3'
                className='w-full h-full object-contain bg-[#3B3838]'
              />
            </div>
            <div className='vector-images text-center overflow-hidden'>
              <img
                src='https://res.cloudinary.com/dzh3qalmv/image/upload/v1737744500/Rectangle_13_srkvtj.png'
                alt='Vector Image 4'
                className='w-full h-full object-contain bg-[#3B3838]'
              />
            </div>
            <div className='vector-images text-center overflow-hidden'>
              <img
                src='https://res.cloudinary.com/dzh3qalmv/image/upload/v1737744500/Rectangle_9_eoym7a.png'
                alt='Vector Image 5'
                className='w-full h-full object-contain bg-[#3B3838]'
              />
            </div>
            <div className='vector-images text-center overflow-hidden'>
              <img
                src='6.png'
                alt='Vector Image 6'
                className='w-full h-full object-contain bg-[#3B3838]'
              />
            </div>
          </div>
        </div>

        <div className='hidden justify-center 2xl:flex items-center'>
          <div className='text-[#000000] justify-between h-full flex flex-col-reverse items-center gap-5'>
            {['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S'].map((letter, index) => (
              <span key={index} className='project-text'>
                {letter}
              </span>
            ))}
          </div>
        </div>

        <div className='flex flex-col items-center gap-5'>
          <h2 className='simple-heading pb-4 text-center'>RASTER</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2 gap-5'>
            <div className='project-images overflow-hidden'>
              <img
                src='7.jpeg'
                alt='Raster Image 1'
                className='w-full h-full object-cover bg-[#3B3838]'
              />
            </div>
            <div className='project-images overflow-hidden'>
              <img
                src='8.jpeg'
                alt='Raster Image 2'
                className='w-full h-full object-cover bg-[#3B3838]'
              />
            </div>
            <div className='project-images overflow-hidden'>
              <img
                src='9.jpeg'
                alt='Raster Image 3'
                className='w-full h-full object-cover bg-[#3B3838]'
              />
            </div>
            <div className='project-images overflow-hidden'>
              <img
                src='10.jpeg'
                alt='Raster Image 4'
                className='w-full h-full object-cover bg-[#3B3838]'
              />
            </div>
            <div className='project-images overflow-hidden'>
              <img
                src='11.jpeg'
                alt='Raster Image 5'
                className='w-full h-full object-cover bg-[#3B3838]'
              />
            </div>
            <div className='project-images overflow-hidden'>
              <img
                src='12.jpeg'
                alt='Raster Image 6'
                className='w-full h-full object-cover bg-[#3B3838]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VectorRaster
