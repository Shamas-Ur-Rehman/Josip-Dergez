import React from 'react'

export default function AboutMe () {
  return (
    <div id='about' className='bg-[#3B3838] scroll-smooth text-[#F8F4E3] p-8'>
      <h1 className='headings mb-4 text-[#F8F4E3]'>About Me</h1>
      <p className='sub-txt w-full text-justify md:text-left lg:w-[75%] mb-8'>
        Ja sam Josip Dergez strastveni fotograf i dizajner koji neprestano
        istražuje mogućnosti kreativnog izražavanja. Završio sam srednju
        Elektrostrojarsku školu u Varaždinu, smjer medijski tehničar, koju sam
        pohađao od 2018. do 2022. godine. Nakon toga odlučio sam produbiti svoje
        znanje i vještine te sam upisao Sveučilište Sjever u Varaždinu, Odjel za
        multimediju, oblikovanje i primjenu, koji i danas pohađam.
        <br />
        Moja strast prema fotografiji i dizajnu razvijala se kroz obrazovanje i
        osobne projekte. Posebno uživam u stvaranju vizuala koji spajaju
        estetiku i funkcionalnost, a kroz svoje radove nastojim prenijeti priče
        i emocije. Inspiraciju pronalazim u svakodnevnim trenucima i izazovima,
        dok svoje znanje neprestano nadograđujem kako bih ostavio prepoznatljiv
        trag u svijetu multimedije. U tablci ispod možete vidjeti sve moje
        tehničke vještine, koje su ključni alati mog kreativnog izražavanja i
        profesionalnog usavršavanja.
      </p>

      <table className='w-full table-fixed border-collapse border border-[#000000] text-[#000000] text-center bg-[#D9D9D9]'>
        <thead>
          <tr className='bg-[#D9D9D9]'>
            <th className='border border-[#000000] px-4 py-2 w-1/2 About-headings'>
              Skills
            </th>
            <th className='border border-[#000000] About-headings px-4 py-2 w-1/2'>
              Rating
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-[#000000] px-4 py-2 w-1/2'>
              <img
                src='/Group 4.png'
                alt='Photoshop'
                className='image-style mx-auto'
              />
            </td>
            <td className='border border-[#000000] px-4 py-2 w-1/2'>
              <span className='text-[#EBE049BA] 2xl:text-5xl lg:text-4xl md:text-3xl text-2xl tracking-[0.6]'>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
              </span>
            </td>
          </tr>
          <tr>
            <td className='border border-[#000000] px-4 py-2 w-1/2'>
              <img
                src='/Group 5.png'
                alt='Illustrator'
                className='image-style mx-auto'
              />
            </td>
            <td className='border border-[#000000] px-4 py-2 w-1/2'>
              <span className='text-[#EBE049BA] 2xl:text-5xl lg:text-4xl md:text-3xl text-2xl tracking-[0.6]'>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
              </span>
            </td>
          </tr>
          <tr>
            <td className='border border-[#000000] px-4 py-2 w-1/2'>
              <img
                src='/Group 6.png'
                alt='Premiere Pro'
                className='image-style mx-auto'
              />
            </td>
            <td className='border border-[#000000] px-4 py-2 w-1/2'>
              <span className=' text-[#EBE049BA] 2xl:text-5xl lg:text-4xl md:text-3xl text-2xl tracking-[0.6]'>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span className='text-[#AABBAABA]'>&#9733;</span>
                <span className='text-[#AABBAABA]'>&#9733;</span>
              </span>
            </td>
          </tr>
          <tr>
            <td className='border border-[#000000] px-4 py-2 w-1/2'>
              <img
                src='/Group 7.png'
                alt='Audition'
                className='image-style mx-auto'
              />
            </td>
            <td className='border border-[#000000] px-4 py-2 w-1/2'>
              <span className='text-[#EBE049BA] 2xl:text-5xl lg:text-4xl md:text-3xl text-2xl tracking-[0.6]'>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span className='text-[#AABBAABA]'>&#9733;</span>
                <span className='text-[#AABBAABA]'>&#9733;</span>
              </span>
            </td>
          </tr>
          <tr>
            <td className='border border-[#000000] px-4 py-2 w-1/2'>
              <img
                src='/Group 8.png'
                alt='After Effects'
                className='image-style mx-auto'
              />
            </td>
            <td className='border border-[#000000] px-4 py-2 w-1/2'>
              <span className='text-[#EBE049BA] 2xl:text-5xl lg:text-4xl md:text-3xl text-2xl tracking-[0.6]'>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span className='text-[#AABBAABA]'>&#9733;</span>
                <span className='text-[#AABBAABA]'>&#9733;</span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
