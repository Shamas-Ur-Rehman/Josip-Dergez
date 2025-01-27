import React, { useState, useEffect } from 'react'

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPageLoaded, setIsPageLoaded] = useState(false)

  useEffect(() => {
    setIsPageLoaded(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleClick = section => {
    document.getElementById(section).scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <div
      id='home'
      className={`bg-cover scroll-smooth bg-center min-h-screen bg-[url('https://res.cloudinary.com/dzh3qalmv/image/upload/v1737697129/Rectangle_20_ha5hmr.png')] flex flex-col ${
        isPageLoaded ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      {/* Header */}
      <header
        className={`flex justify-between items-center p-4 sm:p-6 bg-opacity-50 transform transition-all duration-700 ${
          isPageLoaded
            ? 'translate-y-0 opacity-100'
            : '-translate-y-10 opacity-0'
        }`}
      >
        {/* Logo */}
        <a
          href='/'
          className='text-2xl ml-4 text-[#F8F4E3] !font-Courgette transition duration-300 '
        >
          Josip Dergez
        </a>

        {/* Burger Menu for Mobile */}
        <button
          className='text-[#F8F4E3] md:hidden'
          onClick={toggleMenu}
          aria-label='Toggle Menu'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-8 h-8'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>
        {/* Navigation */}
        <nav className='hidden md:flex md:gap-8 md:items-center'>
          <ul className='flex flex-row gap-[80px] items-center'>
            <li>
              <a
                onClick={() => handleClick('home')}
                className='text-[#F8F4E3] cursor-pointer hover:underline transition duration-300 text-lg'
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => handleClick('projects')}
                className='text-[#F8F4E3] cursor-pointer  hover:underline transition duration-300 text-lg'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => handleClick('about')}
                className='text-[#000000] cursor-pointer hover:underline transition duration-300 text-lg'
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => handleClick('contact')}
                className='text-[#000000] cursor-pointer hover:underline transition duration-300 text-lg'
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50'
          onClick={closeMenu}
        >
          <div
            className='bg-[#222] w-64 h-full flex flex-col p-6 text-[#F8F4E3] font-[Courgette] animate-slide-in'
            onClick={e => e.stopPropagation()}
          >
            <button
              className='self-end text-[#F8F4E3] mb-6'
              onClick={closeMenu}
              aria-label='Close Menu'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            <ul className='flex flex-col gap-6 text-lg'>
              {['Home', 'Projects', 'About', 'Contact'].map(item => (
                <li key={item}>
                  <a
                    onClick={item => {
                      const section =
                        item === 'Home'
                          ? 'home'
                          : item === 'Projects'
                          ? 'projects'
                          : item === 'About'
                          ? 'about'
                          : 'contact'
                      closeMenu()
                      handleClick(section)
                    }}
                    className='hover:underline'
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className='flex flex-col-reverse md:flex-row flex-grow items-center justify-center text-[#F8F4E3] gap-8 p-6'>
        {/* Text Section */}
        <div
          className={`flex-1 flex flex-col justify-center text-center md:text-left px-4 transform transition duration-700 ${
            isPageLoaded
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h3 className='headings text-center mb-4'>
            Bok, <br /> moje ime je Josip Dergez,
          </h3>
          <p className='sub-txt text-justify md:text-center mb-6'>
            21-godišnji student multimedije s velikom strašću prema fotografiji
            i dizajnu. Kroz studij i praktičan rad razvijam kreativne vještine,
            istražujem nove tehnologije i stvaram projekte koji spajaju vizualnu
            estetiku i funkcionalnost. Inspiraciju pronalazim u svakodnevnom
            životu i nastojim kroz svoj rad ispričati priče koje ostavljaju
            dojam.
          </p>

          {/* Action Buttons */}
          <div className='flex gap-4 justify-center items-center'>
            {['Projects', 'About me'].map(btn => (
              <button
                key={btn}
                onClick={() => {
                  const section = btn === 'About me' ? 'about' : 'projects'
                  handleClick(section)
                }}
                className='md:h-[73px] md:w-[205px] px-6 py-2 font-normal text-[16px] md:text-[32px]  !font-righteous bg-[#F8F4E3] text-black  rounded-[30px] transition-transform transform hover:scale-105 hover:bg-opacity-90'
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`flex-1 flex transform transition duration-700 ${
            isPageLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        >
          <img
            src='https://res.cloudinary.com/dzh3qalmv/image/upload/v1737697129/Rectangle_1_egmikb.png'
            alt='Josip Dergez'
            className='w-48 sm:w-60 md:w-80 h-auto !m-0 md:mr-[220px] cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
