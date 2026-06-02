import React from 'react'

const Navbar = () => {
  return (
    <>
<nav className='w-full flex justify-center gap-6 h-32 bg-red-500 p-7'>
  <div className="div-1 flex gap-12 bg-white h-22 border-2 border-white rounded-lg">
    <img className='w-48 h-16 m-5' src="/assets/images/logo.png" alt="logo"/>
    <div className="contain-li p-6 flex gap-10 items-start text-nowrap text-2xl list-none">
      <li>Flavor's</li>
      <li>story</li>
      <li>How it's made</li>
      <li className='flex justify-between items-start'>Gifting <img className='w-15 h-15' src="/assets/images/colored-gift.gif" alt="Gift" /></li>
    </div>
  </div>
  <div className="div-2 bg-white h-22 w-78 p-5 text-nowrap border-2 border-white rounded-lg">
    <li className='flex gap-6 text-2xl'>Explore Flavors
       <svg fill="none" xmlns="http://www.w3.org/2000/svg">
       <rect width="32" height="32" rx="16" transform="matrix(-1 0 0 1 32 0)" fill="#FF6B57"/>
       <path d="M23 16H9M23 16L17 22M23 16L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
    </li>

  </div>
</nav>






      {/* <nav className='flex justify-center gap-12 p-5'>
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
           <svg className='w-6' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" transform="matrix(-1 0 0 1 32 0)" fill="#FF6B57"/>
            <path d="M23 16H9M23 16L17 22M23 16L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </a>
      </nav> */}
    </>
  )
}

export default Navbar
