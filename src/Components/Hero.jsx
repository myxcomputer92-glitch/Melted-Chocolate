import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React,{useRef} from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Hero = () => {

const Main_Heading = useRef()

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


  tl.from(Main_Heading.current,{
    opacity:0,
    duration:0.6,
    y:6,
  })
  tl.from('.heading-2-2',{
    opacity:0,
    duration:1,
    x:'-12vw',
  })

  tl2.add('sad')

tl2.to('.same-images',{
duration:1,
y:1460,
scale:0.6
},'sad')

tl2.to('.dark-cocoa,.orange',{
duration:1,
y:1520,
scale:0.6
},'sad')

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
            className="relative left-[22vw] w-46 z-10 transform rotate-45 brightness-110"
            src="/assets/images/stamp.png"
            alt=""
            srcset=""
          />
        </div>

        <div className="images flex justify-center absolute top-[36vh] left-[10vw] z-0">
          <img
            className="same-images w-74 relative top-16"
            src="/assets/images/crispy-caramel.png"
            alt=""
          />
          <img
            className="dark-cocoa same-images w-74 brightness-110"
            src="/assets/images/dark-cocoa.png"
            alt=""
          />
          <img
            className="orange same-images w-74 brightness-110"
            src="/assets/images/orange-zest-milk.png"
            alt=""
          />
          <img className="same-images w-74 relative top-16 brightness-110" src="/assets/images/almond-crunch.png" alt="" />
        </div>

        <div className="cards flex justify-center gap-10">

          <div className="card-1 flex flex-col items-center justify-end bg-red-500 w-66 border-2 border-transparent rounded-xl h-82">
            <h2 className="opacity-0 hover:opacity-100">
              Sweet crunch, slow melt.
          </h2>
          </div>

          <div className="card-1 flex flex-col justify-end bg-blue-500 w-66 border-2 border-transparent rounded-xl h-82">
           <h2 className="opacity-0 hover:opacity-100"> Bold cocoa with a deep finish.</h2>
          </div>
          <div className="card-1 flex flex-col justify-end bg-green-500 w-66 border-2 border-transparent rounded-xl h-82">
            <h2 className="opacity-0 hover:opacity-100">
            Bright citrus with creamy balance.
          </h2>
          </div>
          <div className="card-1 flex flex-col justify-end bg-orange-500 w-66 border-2 border-transparent rounded-xl h-82">
            <h2 className="opacity-0 hover:opacity-100">
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
