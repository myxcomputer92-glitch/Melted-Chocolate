import React from 'react'

const Pitcure = () => {
  return (
    <>
    <div className='cont-5 w-full h-screen relative bg-cyan-300'>

        <div className='absolute bg-transparnet z-10 w-[65%] h-[72vh] top-14 left-66 overflow-hidden border-2 border-transparnet rounded-2xl xl:w-[65%] xl:h-[72vh] xl:left-66 lg:w-[80%] lg:h-[74vh] lg:left-32 md:w-[93%] md:h-[64vh] md:left-8 sm:w-[93%] sm:h-[64vh] sm:left-8'>
        <img className='w-[1350px] h-[600px] object-cover xl:w-[1350px] xl:h-[600px] lg:w-[1350px] lg:h-[600px] md:h-[600px]' src="/assets/images/choclate-bg-2.png
        " alt="" />
      </div>
        </div>
        </>
  )
}

export default Pitcure



// import React from "react";

// const Picture = () => {
//   return (
//     <div className="w-full h-screen relative bg-lime-300">

//       {/* This div is the visible window */}
//       <div className="absolute z-10 w-[65%] h-[72vh] top-14 left-66 rounded-2xl overflow-hidden border-2 border-white">

//         {/* Full-size image */}
//         <img
//           src="/assets/images/choclate-bg-2.png"
//           alt="Chocolate"
//           className="absolute w-[1350px] h-[600px] object-cover"
//         />

//       </div>

//     </div>
//   );
// };

// export default Picture;