import React from 'react'

const ContactSection = () => {
  return (
    <div
      id='contact'
      className='flex scroll-smooth items-center justify-center min-h-screen bg-[#3B3838]'
    >
      <div className='w-4/5 max-w-xl p-8 text-center bg-[#3B3838] rounded-lg'>
        <h1 className='mb-12 simple-heading  text-white'>Contact</h1>
        <form className='flex flex-col gap-4 mb-6'>
          <input
            type='text'
            placeholder='Ime i prezime'
            className='w-full p-4 py-6 text-white bg-[#3B3838] border border-[#F8F4E3] rounded-md placeholder-[#F8F4E3] focus:outline-none'
          />
          <input
            type='email'
            placeholder='E-mail'
            className='w-full p-4 py-6 text-white bg-[#3B3838] border lg:px-10 border-[#F8F4E3] rounded-md placeholder-[#F8F4E3] focus:outline-none'
          />
          <button
            type='submit'
            className='w-1/2 px-4 py-2 mx-auto sm:text-sm text-[#F8F4E3] bg-[#3B3838] border border-[#F8F4E3] rounded-md hover:bg-[#3B3838]'
          >
            Contact me
          </button>
        </form>
        <p className='mb-8 sub-txt text-[#F8F4E3]'>
          Ukoliko imate nekih dodatnih pitanja ili tražite neke druge
          informacije možete me pronaći i na ovim društvenim mrežama!!!
        </p>
        <div className='flex justify-around'>
          <div className='flex flex-col items-center'>
            <img
              src='face.png'
              alt='Facebook'
              className='w-10 h-10 filter invert brightness-0'
            />
            <p className='mt-2 text-sm text-white'>Josip Dergez</p>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='insta.png'
              alt='Instagram'
              className='w-10 h-10 filter invert brightness-0'
            />
            <p className='mt-2 text-sm text-white'>jdergez</p>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='link.png'
              alt='LinkedIn'
              className='w-10 h-10 filter invert brightness-0'
            />
            <p className='mt-2 text-sm text-white'>Josip Dergez</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
