import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const Quality = () => {

gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{

    const tl=gsap.timeline({scrollTrigger:{
    trigger:'.heading-1-4',
    start:'top center',
    end:'center center',
    // markers:true,
    }})
    const tl2=gsap.timeline({scrollTrigger:{
    trigger:'.cont-4',
    start:'top top',
    end:'+=800',
    // markers:true,
    scrub:1,
    pin:true
    }})

    tl.from('.heading-1-4',{
      opacity:0,
      y:25,
      duration:1,
    })

    tl2.add('mad')

    tl2.to('.card1',{
      opacity:1,
      y:-90,
      duration:1,
      rotate:0
    },'mad')
    
    tl2.to('.card2',{
      opacity:1,
      y:-380,
      duration:1,
      rotate:0
    },)
    
    tl2.to('.card3',{
      opacity:1,
      y:-625,
      duration:1,
      rotate:0
    })





    
  })

  return (
    <>
    <div className='cont-4 w-full bg-gray-500 h-[110vh] flex flex-row  xl:flex lg:flex md:flex'>
      <div className="left w-[50%] flex flex-col justify-between h-[70vh]">
        <h1 className='heading-1-4 text-[2cm] pl-5 ml-15 font-medium'>what goes into every bar of <span className='text-orange-600 uppercase'>Melt</span></h1>
        <p className='text-xl pl-5 ml-15 w-96'>Every bar is a result of careful sourcing, precise timing, and countless taste tests — all to make sure each bite feels intentional.</p>
      </div>
      <div className="right-1-4 w-[50%] bg-lime-500 pt-15 overflow-hidden flex flex-col items-center">
        <div className="cards transform translate-y-14">
            <div className="card1 transform -rotate-12 translate-y-52 opacity-0 w-[30vw] h-[55vh] pt-16 border-2 border-transparent rounded-2xl p-5 m-2 bg-sky-500 text-white xl:w-[30vw] xl:h-[55vh] lg:w-[34vw] lg:h-[52vh] md:w-[100%] md:h-[55vh]">
                <h1 className='text-9xl font-medium'>200+</h1>
<h2 className='text-3xl pt-5 font-medium'>Taste Iterations </h2>
<h3 className='absolute bottom-5 text-lg font-medium'>Refined until the flavour feels just right.</h3>
            </div>
            <div className="card2 opacity-0 transform rotate-12 w-[30vw] h-[55vh] pt-16 border-2 border-transparent rounded-2xl p-5 m-2 bg-yellow-300 text-white xl:w-[30vw] xl:h-[55vh] lg:w-[34vw] lg:h-[52vh] md:w-[100%] md:h-[55vh]">
<h1  className='text-9xl font-medium'>30+ </h1>
<h2 className='text-3xl pt-5 font-medium'>Test Batches</h2>
<h3 className='absolute bottom-5 text-lg font-medium'> Small batches. Big attention to detail.</h3>

            </div>
            <div className="card3 transform -rotate-12 opacity-0 w-[30vw] h-[55vh] pt-16 border-2 border-transparent rounded-2xl p-5 m-2 bg-lime-800 text-white xl:w-[30vw] xl:h-[55vh] lg:w-[34vw] lg:h-[52vh] md:w-[100%] md:h-[55vh]">
                <h1 className='text-9xl font-medium'>100%</h1>
 <h2 className='text-3xl pt-5 font-medium'>Natural Ingredients</h2>
<h3 className='absolute bottom-5 text-lg font-medium'>No shortcuts. No compromises.</h3>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Quality
