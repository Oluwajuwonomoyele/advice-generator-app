import React, { useState } from 'react';
import patternDividerMobile from './images/pattern-divider-mobile.svg';
import patternDividerDesktop from './images/pattern-divider-desktop.svg';
import dice from './images/icon-dice.svg';
import { ImSpinner2 } from 'react-icons/im'

function App() {
  const [advice, setAdvice] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false)
 
  const fetchAdvice = async () => {
    setIsPending(true)

    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      if(!res.ok){
        throw new Error('Not Found')
      }
      const json = await res.json();

      setIsPending(false)
      setAdvice(json) 
      setError(null)
    } catch(error){
      setIsPending(false)
      setError(error.message)
      console.log(error.message)
    }
  }

  return (
   <div className='bg-neutral-dark-blue h-screen'>
      <div className='max-w-[1400px] mx-auto lg:px-8 flex flex-col justify-center items-center h-[90%]'>
        { isPending && (
          <div>
            <ImSpinner2  className='animate-spin text-primary-neon-green' size={32}/>
          </div>
        )}
        {error && (
          <div className='px-4 text-center text-primary-light-cyan'>
            {error}
          </div>
        )}
        { (advice && !isPending && !error)  &&  (
          <div className='w-[90%] lg:w-[50%] mx-auto bg-neutral-dark-grayish-blue rounded-lg text-center pt-6 pb-14 px-4 relative mt-6 flex flex-col items-center'>
            <h1 className='text-primary-neon-green text-sm tracking-[3px]'>ADVICE #{advice.slip.id}</h1>
            <p className='text-[22px] my-4 font-[800] text-primary-light-cyan'>{advice.slip.advice}</p>
            <picture>
              <source media="(min-width: 1024px)" srcSet={patternDividerDesktop} />
              <img src={patternDividerMobile} alt="pattern divider" />
            </picture>
            <div className='bg-primary-neon-green w-14 h-14 flex items-center justify-center rounded-full absolute -bottom-6 mx-auto inset-x-0 cursor-pointer animate-pulse hover:animate-none hover:shadow-2xl hover:shadow-primary-neon-green transition-all ease duration-200' onClick={() => fetchAdvice()}>
              <img src={dice} alt="dice" />
            </div>
        </div>
        )}
        { (!advice && !isPending && !error) && (
          <div className='w-[90%] lg:w-[50%] mx-auto bg-neutral-dark-grayish-blue rounded-lg text-center pt-6 pb-14 px-4 relative mt-6 flex flex-col items-center'>
            <h1 className='text-primary-neon-green text-sm tracking-[3px] mb-8'>ADVICE ?</h1>
            <picture>
              <source media="(min-width: 1024px)" srcSet={patternDividerDesktop} />
              <img src={patternDividerMobile} alt="pattern divider" />
            </picture>
            <div className='bg-primary-neon-green w-14 h-14 flex items-center justify-center rounded-full absolute -bottom-6 mx-auto inset-x-0 cursor-pointer animate-pulse hover:animate-none hover:shadow-2xl hover:shadow-primary-neon-green transition-all ease duration-200' onClick={() => fetchAdvice()}>
            <img src={dice} alt="dice" />
            </div>
          </div>
        )}
      </div>

      <div className='text-center px-4'>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer" className='text-primary-light-cyan cursor-pointer'>Frontend Mentor</a>. 
        Coded by <a href="https://github.com/oluwajuwonomoyele" className='text-primary-neon-green animate-pulse cursor-pointer'>Olutomisin Oluwajuwon</a>.
      </div>
   </div>
  );
}

export default App;
