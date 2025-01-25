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
                src='https://res.cloudinary.com/dzh3qalmv/image/upload/v1737738368/Rectangle_1_1_evv2sd.png'
                alt='Vector Image 1'
                className='w-full h-full object-contain bg-[#3B3838]'
              />
            </div>
            <div className='vector-images text-center overflow-hidden'>
              <img
                src='https://res.cloudinary.com/dzh3qalmv/image/upload/v1737744510/Rectangle_5_euyhuh.png'
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
                src='https://res.cloudinary.com/dzh3qalmv/image/upload/v1737744500/Rectangle_14_udxbrc.png'
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
                src='https://res.cloudinary.com/dzh3qalmv/image/upload/v1737835913/7_jdyz8f.jpg'
                alt='Raster Image 1'
                className='w-full h-full object-cover bg-[#3B3838]'
              />
            </div>
            <div className='project-images overflow-hidden'>
              <img
                src='https://res.cloudinary.com/dzh3qalmv/image/upload/v1737835911/8_qgheze.jpg'
                alt='Raster Image 2'
                className='w-full h-full object-cover bg-[#3B3838]'
              />
            </div>
            <div className='project-images overflow-hidden'>
              <img
                src='https://res.cloudinary.com/dzh3qalmv/image/upload/v1737835971/9_j7pmt9.jpg'
                alt='Raster Image 3'
                className='w-full h-full object-cover bg-[#3B3838]'
              />
            </div>
            <div className='project-images overflow-hidden'>
              <img
                src='https://res.cloudinary.com/dzh3qalmv/image/upload/v1737835970/10_jcsemh.jpg'
                alt='Raster Image 4'
                className='w-full h-full object-cover bg-[#3B3838]'
              />
            </div>
            <div className='project-images overflow-hidden'>
              <img
                src='https://res.cloudinary.com/dzh3qalmv/image/upload/v1737835978/11_xez38z.jpg'
                alt='Raster Image 5'
                className='w-full h-full object-cover bg-[#3B3838]'
              />
            </div>
            <div className='project-images overflow-hidden'>
              <img
                src='https://res.cloudinary.com/dzh3qalmv/image/upload/v1737835978/12_yjqgav.jpg'
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
