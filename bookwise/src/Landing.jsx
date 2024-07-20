import React from 'react'
import Logo from './assets/BookwiseLogo.png'

<<<<<<< HEAD
import React from 'react'
import Logo from './assets/BookwiseLogo.png'

=======
import React, { useState } from 'react';
import Logo from './assets/BookwiseLogo.png';
import UploadForm from './components/UploadForm';
>>>>>>> 69d1681cccaaf8fd310a418dd3c00bcaef673fa3

const Landing = () => {
  const [formState, setFormState] = useState(false);

  const closeModal = () => {
    setFormState(false);
  };

  return (
<<<<<<< HEAD
    <section className='bg-[#CAF4FF] overflow-y-auto h-screen'>
      <div>
        <div className='flex my-5 mx-4 mb-7'>
          <img src={Logo} alt='Bookwise Logo' className='w-7 mr-2' />
          <h1 className='text-primaryBlue text-2xl font-bold'>Bookwise</h1>
        </div>
        <div className='mx-5 px-2 border-[0.15rem] rounded-lg bg-white py-16 md:mx-[6rem] lg:px-[10rem]'>
          <div className='px-4 py-6'>
            <h1 className='text-darkBlue text-center py-4 text-[1.5rem] md:text-[1.9rem]  font-semibold'>
              Books Simplified, Focus Amplified
            </h1>
            <p className='text-lightBlue text-center text-[1.1rem] md:text-[1.3rem]'>
              Your AI-powered reading companion, built to enhance focus and
              understanding for the social media generation.
            </p>
          </div>
          <div className='flex justify-center py-4'>
            <button className='px-4 py-2 rounded-lg bg-buttonBg hover:bg-buttonHover text-darkBlue font-medium'>
              Upload your book
            </button>
          </div>
=======
    <section className={`bg-[#CAF4FF] overflow-y-auto h-screen ${formState ? 'modal-open' : ''}`}>
      {formState && <UploadForm closeModal={closeModal} />}
      <div className='flex my-5 mx-4 mb-7'>
        <img src={Logo} alt="Bookwise Logo" className='w-7 mr-2' />
        <h1 className='text-primaryBlue text-2xl font-bold'>Bookwise</h1>
      </div>
      <div className='mx-5 px-2 border-[0.15rem] rounded-lg bg-white py-16 md:mx-[6rem] lg:px-[10rem]'>
        <div className='px-4 py-6'>
          <h1 className='text-darkBlue text-center py-4 text-[1.5rem] md:text-[1.9rem] font-semibold'>
            Books Simplified, Focus Amplified
          </h1>
          <p className='text-lightBlue text-center text-[1.1rem] md:text-[1.3rem]'>
            Your AI-powered reading companion, built to enhance focus and
            understanding for the social media generation.
          </p>
        </div>
        <div className='flex justify-center py-4'>
          <button onClick={() => setFormState(true)} className='px-4 py-2 rounded-lg bg-buttonBg hover:bg-buttonHover text-darkBlue font-medium'>
            Upload your book
          </button>
>>>>>>> 69d1681cccaaf8fd310a418dd3c00bcaef673fa3
        </div>
      </div>
    </section>
  )
}

export default Landing
