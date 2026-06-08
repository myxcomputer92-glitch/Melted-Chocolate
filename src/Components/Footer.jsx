import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='cont-6 w-full h-[80vh] bg-orange-400 text-white'>
        <div className="parent flex pt-18">

      <div className="left w-[50%] h-[50vh] p-7 ">
<h1 className='text-5xl font-bold'>Crafted to melt,<br />not rush.</h1>
<div className="contain-links">
<img src="" alt="" />
<img src="" alt="" />
<img src="" alt="" />
    
</div>
      </div>


      <div className="right w-[50%] h-[50vh] p-7  flex flex-col justify-between items-center">
<table className='flex justify-start gap-12'>
    
    <thead>
    <th>Explore</th>
    <tr className='flex flex-col'>
        <td className='underline cursor-pointer p-px'>Flavor's</td>
        <td className='underline cursor-pointer p-px'>Our story</td>
        <td className='underline cursor-pointer p-px'>How its made</td>
        <td className='underline cursor-pointer p-px'>Gifting</td>
    </tr>
    </thead>

    <thead>
    <th>Experience</th>
    <tr className='flex flex-col'>
        <td className='underline cursor-pointer p-px'>Taste Journey</td>
        <td className='underline cursor-pointer p-px'>Texture & Melt</td>
        <td className='underline cursor-pointer p-px'>Ingredients</td>
        <td className='underline cursor-pointer p-px'>Process</td>
    </tr>
    </thead>

</table>

<div className="contain-img-text">
    <img src="" alt="" />
    <h2 className='underline font-bold text-2xl'>Subscribe Newsletter</h2>
</div>

      </div>
      
        </div>

<hr/>

      <div className="bottom flex justify-between items-center p-3  h-[20vh]">
<h3>Design by <span className='underline'>Rupz Web</span></h3>
<div className="last flex gap-4">
<h3>Privacy Policy</h3>
<h3>Terms & condition</h3>
</div>
      </div>
    </div>
    </>
  )
}

export default Footer
