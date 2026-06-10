import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React,{useRef} from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Hero = () => {

const Main_Heading = useRef()
const cardParent = useRef()

gsap.registerPlugin(ScrollTrigger)

useGSAP(()=>{
  const tl=gsap.timeline()

const tl2=gsap.timeline({scrollTrigger:{
   trigger:'.heading-2-2',
  //  markers:true,
   start:'top 100',
   end:'1700 top',
   scrub:true,
}})


  tl.fromTo(Main_Heading.current,{
    opacity:0,
    // duration:0.6,
    // x:2,
    scale:1.4
  },{
    opacity:1,
    x:2,
    scale:1,
    duration:1
  })
  tl.from('.heading-2-2',{
    opacity:0,
    duration:1,
    y:'2vw',
  })

  tl.fromTo('.stamp-img',{
    opacity:0,
    scale:2
  },{
    opacity:1,
    scale:1,
    duration:1,
    y:-5
  })


  tl2.add('sad')

tl2.to('.same-images',{
duration:1,
y:1460,
scale:0.6,
},'sad')

tl2.to('.no-3-img',{
duration:1,
y:1460,
x:25,
scale:0.6,
},'sad')


tl2.to('.no-4-img',{
duration:1,
y:1460,
x:42,
scale:0.6,
},'sad')

tl2.to('.dark-cocoa,.orange',{
duration:1,
y:1500,
scale:0.6
},'sad')

const cards=Array.from(cardParent.current.children)

const mainImages= gsap.utils.toArray('.same-images')

cards.forEach((card,img)=>{
const heading= card.querySelector("h2")
const image= card.querySelector("img")

// console.log(image)

card.addEventListener('mouseenter',()=>{

  gsap.to(mainImages[img],{
    opacity:0,
  })

  gsap.to(heading,{
    opacity:1,
    y:-20,
    duration:0.4
  })

  gsap.to(image,{
    opacity:1,
    y:-20,
    duration:0.4
  })
})

card.addEventListener('mouseleave',()=>{

  gsap.to(mainImages[img],{
    opacity:1,
  })

  gsap.to(heading,{
    opacity:0,
    y:0,
    duration:0.4
  })
  gsap.to(image,{
    opacity:0,
    y:0,
    duration:0.4
  })
})


})

const aladin=()=>{



}











})




  return (
    <>
      <div className="cont-2 relative w-full h-[300vh] flex flex-col justify-between">
        <div className="contain-text flex flex-col items-center justify-center pt-15">
          <h1 ref={Main_Heading} className="text-amber-900 text-8xl font-bold">
            Four <span className="text-orange-500">Flavors.</span>
          </h1>
          <h1 className="heading-2-2 text-amber-900 text-5xl pt-6 font-medium">One Perfect Melt.</h1>
          <img
            className="stamp-img relative left-[22vw] w-46 z-50 transform rotate-45 brightness-110"
            src="/assets/images/stamp.png"
            alt=""
            srcset=""
          />
        </div>

        <div className="images flex justify-center absolute top-[36vh] left-[10vw] z-40">
          <img
            className="same-images no-1-img w-74 relative top-16"
            src="/assets/images/crispy-caramel.png"
            alt=""
          />
          <img
            className="dark-cocoa same-images no-2-img w-74 brightness-110"
            src="/assets/images/dark-cocoa.png"
            alt=""
          />
          <img
            className="orange same-images no-3-img w-74 brightness-110"
            src="/assets/images/orange-zest-milk.png"
            alt=""
          />
          <img className="same-images no-4-img w-74 relative top-16 brightness-110" src="/assets/images/almond-crunch.png" alt="" />
        </div>

        <div ref={cardParent} className="cards flex justify-center gap-4">

          <div className="card-1 flex flex-col items-center justify-center relative bg-[#FF6B57] w-76 border-2 border-transparent rounded-xl h-74">
            <img className="absolute bottom-[2vw] w-42 opacity-0 z-50" src="/assets/images/crispy-caramel-1.png" alt="" srcset="" />
            <h2 className="opacity-0 text-2xl font-medium text-center">
              Sweet crunch, slow melt.
          </h2>
          </div>

          <div className="card-1 flex flex-col items-center justify-center relative bg-[#499CD3] w-76 border-2 border-transparent rounded-xl h-74">
            <img className="absolute bottom-[2vw] w-42 opacity-0 z-50" src="/assets/images/dark-cocoa-1.png" alt="" srcset="" />
           <h2 className="opacity-0 text-2xl font-medium text-center"> Bold cocoa with a deep finish.</h2>
          </div>
          <div className="card-1 flex flex-col items-center justify-center relative bg-[#FDD327] w-76 border-2 border-transparent rounded-xl h-74">
            <img className="absolute bottom-[2vw] w-42 opacity-0 z-50" src="/assets/images/orange-zest-milk-1.png" alt="" srcset="" />

            <h2 className="opacity-0 text-2xl font-medium text-center">
            Bright citrus with creamy balance.
          </h2>
          </div>
          <div className="card-1 flex flex-col items-center justify-center relative bg-[#9D9C3D] w-76 border-2 border-transparent rounded-xl h-74">
            <img className="absolute bottom-[2vw] w-42 opacity-0 z-50" src="/assets/images/almond-crunch-1.png" alt="" srcset="" />
            <h2 className="opacity-0 text-2xl font-medium text-center">
            Nutty comfort, perfectly smooth.
          </h2>
          </div>
        </div>
      </div>

      {/* Sweet crunch,
slow melt.
Bold cocoa with a
deep finish.
   
   Bright citrus with
creamy balance.

Nutty comfort,
perfectly smooth.

One Perfect Melt. */}
    </>
  );
};

export default Hero;
