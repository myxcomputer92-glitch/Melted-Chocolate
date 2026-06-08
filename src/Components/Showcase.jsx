import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React,{useRef} from 'react'

const Showcase = () => {

const heading_ref = useRef()
const Container_Ref = useRef()

// function Split_Chars() {

//   const text=heading_ref.current.textContent;
//   const chars=text.split('')
// console.log(chars)

// }

// console.log(Split_Chars)

gsap.registerPlugin(ScrollTrigger)

useGSAP(()=>{

  const tl=gsap.timeline({scrollTrigger:{
    trigger:heading_ref.current,
    // markers:true,
    start:'top 10%',
    end:'+=200'
  }})

  const tl2=gsap.timeline({scrollTrigger:{
    trigger:Container_Ref.current,
    markers:true,
    start:'top top',
    end:'+=800',
    scrub:true,
    pin:true
  }})

  tl.to(heading_ref.current,{
    opacity:1,
    duration:2
  })


// tl2.fromTo(Container_Ref.current,{
//   opacity:0,
// },{
//     opacity:1,
//   duration:1,

// })


tl2.to('.svg-1',{
    opacity:1,
  duration:1,
})

tl2.to('.h2-1-4',{
    opacity:1,
  duration:1,
})

tl2.to('.nd',{
    opacity:1,
  duration:1,

})

tl2.to('.svg-2',{
    opacity:1,
  duration:1,
})

tl2.to('.h2-2-4',{
    opacity:1,
  duration:1,
})


tl2.to('.rd',{
    opacity:1,
  duration:1,

})

tl2.to('.svg-3',{
    opacity:1,
  duration:1,
})

tl2.to('.h2-3-4',{
    opacity:1,
  duration:1,
})

tl2.to('.th',{
    opacity:1,
  duration:1,

})

tl2.to('.svg-4',{
    opacity:1,
  duration:1,
})

tl2.to('.h2-4-4',{
    opacity:1,
  duration:1,
})




})


  return (
    <>
    <div ref={Container_Ref} className='cont-3 w-full h-screen relative flex flex-col items-center bg-lime-300 text-white'>
      <h1 ref={heading_ref} className='text-6xl transform translate-y-14 text-black font-medium opacity-0 relative z-10'>Feel The Melt </h1>
      
      <div className="contain-multiple-images w-full h-[60vh] relative top-24 z-0 flex items-center justify-center">
<img className='st w-48 h-94 transform rotate-45 absolute' src="/assets/images/bite.png" alt="" />
<img className='nd w-48 h-94 transform rotate-45 absolute opacity-0' src="/assets/images/bite-1.png" alt="" />
<img className='rd w-48 h-94 transform rotate-45 absolute opacity-0' src="/assets/images/bite-2.png" alt="" />
<img className='rth w-48 h-94 transform rotate-45 absolute opacity-0' src="/assets/images/bite-3.png" alt="" />


<div className="contain-svgs w-full flex justify-center">


  <svg className='svg-1 absolute top-[26vw] right-[45vw] mt-5 opacity-0' width="118" height="39" viewBox="0 0 118 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="arrow-path arrow-1"
                d="M0.5 11.2
                C6.6 21 34.5 32.1 54 32.6
                C75.1 33.3 86.9 29.8 110.3 16
                C110.1 17.6 109.8 19 109.8 20.2
                C109.7 21.6 109.6 23.1 109.8 24.4
                C109.9 24.9 110.6 25.5 111.1 25.5
                C111.6 25.6 112.4 24.9 112.5 24.5
                C113.6 20.5 114.5 16.5 115.5 12.3
                C115.8 11 115.2 10.1 113.8 9.8
                C108.4 9 102.9 8.2 97.4 7.5
                C96.1 7.4 94.7 7.8 93.1 8
                C94.7 11.3 97.6 10.7 99.8 11.3
                C102.1 12.1 104.6 12.4 107.5 13.1
                C101.2 18.3 94.6 21.8 87.5 24.3
                C61.5 33.6 36.5 30.5 12.4 17.9
                C9.2 16.3 6.3 14.3 3.3 12.5
                C2.3 12.2 1.5 11.9 0.5 11.2Z"
                fill="none"
                stroke="#2C2C2C"
                strokeWidth="2.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
<h2 className='h2-1-4
 transform translate-y-[12vw] translate-x-70 mt-3 text-2xl capitalize font-medium opacity-0'>smooth</h2>

<svg className='svg-2 absolute left-[44vw] top-4 rotate-195 opacity-0' width="118" height="39" viewBox="0 0 118 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="arrow-path arrow-2"
                d="M0.5 11.2
                C6.6 21 34.5 32.1 54 32.6
                C75.1 33.3 86.9 29.8 110.3 16
                C110.1 17.6 109.8 19 109.8 20.2
                C109.7 21.6 109.6 23.1 109.8 24.4
                C109.9 24.9 110.6 25.5 111.1 25.5
                C111.6 25.6 112.4 24.9 112.5 24.5
                C113.6 20.5 114.5 16.5 115.5 12.3
                C115.8 11 115.2 10.1 113.8 9.8
                C108.4 9 102.9 8.2 97.4 7.5
                C96.1 7.4 94.7 7.8 93.1 8
                C94.7 11.3 97.6 10.7 99.8 11.3
                C102.1 12.1 104.6 12.4 107.5 13.1
                C101.2 18.3 94.6 21.8 87.5 24.3
                C61.5 33.6 36.5 30.5 12.4 17.9
                C9.2 16.3 6.3 14.3 3.3 12.5
                C2.3 12.2 1.5 11.9 0.5 11.2Z"
                fill="none"
                stroke="#2C2C2C"
                strokeWidth="2.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
 <h2 className='h2-2-4 trasform -translate-y-40 -translate-x-20 text-2xl capitalize font-medium opacity-0'>crunchy</h2>

 <svg className='svg-3 absolute top-[6vw] right-[30vw] mt-5 opacity-0' width="113" height="84" viewBox="0 0 113 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="arrow-path arrow-3"
                d="M0 23.5
                C9.8 17.3 40.1 19.9 57.9 28
                C77.1 36.7 86.2 45 101.1 67.7
                C101.7 66.1 102 64.8 102.5 63.7
                C103.1 62.4 103.6 61 104.4 59.8
                C104.6 59.5 105.7 59.3 106.1 59.4
                C106.6 59.6 107 60.6 106.9 61
                C106.1 65.1 105.2 69.1 104.3 73.2
                C103.9 74.6 103 75.1 101.6 74.8
                C96.4 73.1 91.1 71.4 85.8 69.6
                C84.7 69.2 83.6 68.1 82.2 67.3
                  C85.1 65 87.4 66.9 89.7 67.2
                  C92.1 67.6 94.5 68.3 97.4 69
                  C94 61.6 89.6 55.5 84.4 50.1
                  C65.1 30.4 41.2 22.2 14.1 22.9
                  C10.5 23 7 23.5 3.5 23.7
                  C2.5 23.6 1.6 23.5 0 23.5Z"
                  fill="none"
                  stroke="#2C2C2C"
                  strokeWidth="2.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
            </svg>
            <h2 className='h2-3-4 trasform -translate-y-4 translate-x-68 text-2xl capitalize font-medium opacity-0'>satisfying</h2>


 <svg className='svg-4 absolute left-[29vw] top-[18.5vw] rotate-150 opacity-0' width="113" height="84" viewBox="0 0 113 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="arrow-path arrow-4"
                d="M0 23.5
                  C9.8 17.3 40.1 19.9 57.9 28
                  C77.1 36.7 86.2 45 101.1 67.7
                  C101.7 66.1 102 64.8 102.5 63.7
                  C103.1 62.4 103.6 61 104.4 59.8
                  C104.6 59.5 105.7 59.3 106.1 59.4
                  C106.6 59.6 107 60.6 106.9 61
                  C106.1 65.1 105.2 69.1 104.3 73.2
                  C103.9 74.6 103 75.1 101.6 74.8
                  C96.4 73.1 91.1 71.4 85.8 69.6
                  C84.7 69.2 83.6 68.1 82.2 67.3
                  C85.1 65 87.4 66.9 89.7 67.2
                  C92.1 67.6 94.5 68.3 97.4 69
                  C94 61.6 89.6 55.5 84.4 50.1
                  C65.1 30.4 41.2 22.2 14.1 22.9
                  C10.5 23 7 23.5 3.5 23.7
                  C2.5 23.6 1.6 23.5 0 23.5Z"
                  fill="none"
                  stroke="#2C2C2C"
                  strokeWidth="2.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
            </svg>
       <h2 className='h2-4-4 trasform translate-y-16 -translate-x-[32vw] text-2xl capitalize font-medium opacity-0'>balanced</h2>     
                  </div>

{/* <h2>satisfying</h2>  */}
{/* <h2>balanced</h2>   */}

      </div>

    </div>
    </>
  )
}

export default Showcase
