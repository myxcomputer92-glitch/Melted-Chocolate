import React,{useEffect,useRef} from 'react'

const Navbar = () => {
  return (
    <>

 <nav className='w-full sticky top-0 z-50 overflow-hidden flex justify-center shrink-0 xl:gap-8 p-7 xl:justify-center lg:justify-between md:justify-between'>
    <div className="div-1 flex justify-between font-medium capitalize bg-white h-22 border-2 border-white rounded-lg xl:w-242.5 xl:h-18 lg:w-177.5 lg:h-22 md:w-132.5 md:h-18 md:gap-0"> 
    <img className='xl:w-40 xl:h-12 xl:m-5 lg:w-36 lg:h-12 lg:m-6 md:w-32 md:h-12 md:m-5' src="/assets/images/logo.png" alt="logo"/>
    <div className="contain-li p-6 flex gap-10 items-start text-nowrap text-2xl list-none xl:gap-10 lg:gap-10 md:gap-5 lg:text-xl md:text-sm">
      <li className='hover:cursor-pointer hover:underline'>Flavor's</li>
      <li className='hover:cursor-pointer hover:underline'>Our story</li>
      <li className='hover:cursor-pointer hover:underline'>How it's made</li>
      <li className='hover:cursor-pointer flex justify-between items-start gap-0 hover:underline'>Gifting <img className='transform xl:w-12 xl:-translate-y-6 xl:h-14 lg:w-15 lg:-translate-y-5 lg:h-15 md:w-10 md:-translate-y-4 md:h-10 ' src="/assets/images/colored-gift.gif" alt="Gift" /></li>
    </div>
  </div>
   <div className="div-2 hover:cursor-pointer bg-white h-22 w-78 p-5 text-nowrap border-2 border-white rounded-lg xl:w-68 xl:h-18 xl:p-5 lg:p-6 lg:w-60 lg:h-22 md:w-46 md:h-18 md:p-6">
     <li className='flex gap-6 text-2xl xl:text-2xl lg:text-xl md:text-sm xl:gap-6 lg:gap-6 md:gap-2 hover:underline'><a href="https://flavors.com">Explore Flavors</a>
        <svg fill="none" xmlns="http:www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" transform="matrix(-1 0 0 1 32 0)" fill="#FF6B57"/> 
        <path d="M23 16H9M23 16L17 22M23 16L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
   </svg> 
    
    </li> 

   </div>  
</nav>







    {/*  <nav className='flex justify-center gap-12 p-5'>
        <div className='flex justify-between w-[50%] bg-white'>
        <img className='w-36 h-14' src="/assets/images/logo.png" alt="" />
        <div className="contain-li flex gap-4 list-none mt-4">
            <li>Flavor's</li>
            <li>Story</li>
            <li>How it's made</li>
            <a href='' className='flex items-start justify-between'>Gifting   <img className='w-10 h-10 pb-4' src="/assets/images/colored-gift.gif" alt="" /></a>
        </div>
       </div>
     
       <a className='flex gap-4 text-nowrap w-38 h-10 bg-white' href="">Explore Flavors
          //  <svg className='w-6' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http:www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" transform="matrix(-1 0 0 1 32 0)" fill="#FF6B57"/>
            <path d="M23 16H9M23 16L17 22M23 16L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </a>
      </nav> */}
    </>
  )
}

export default Navbar
