"use client";

import Image from "next/image";
import { useState } from "react";

export default function Banner() {
  /**
     * how to create slider with custom buttons
     
    1. make an array of slides where we store multiple components
    2. define a useState for store currentSlide and initial value will be 0
3. For showing the current Slide take a div and  set {slides[currentSlice]} this will show the current slide component 
by default and when buttons add for next and previous it will be changed
4. for previous button we set the currentSlide in a way if current slide is falsy then we set the current slide length - 1 from the slides array otherwise current slide - 1
5. for handling next we can set the current slide a logic of loop 
(currentSlide +1) % slideArray.length

it ensure that if the slide is last slide then it will   go back to the 1st slide
6. best way to handle a slide if the images or component is dynamic using map
7. for map  just className will be dynamic addition 
"basic style" + (currentSlide === idx? "block" " hidden")
this map function will stop the re-rendering 
     */
  const slides = [
    "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC05/image/cache/catalog/demo/banners/slider-01-1580x730.jpg",
    "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC05/image/cache/catalog/demo/banners/slider-02-1580x730.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const handlePrev = () => {
    setCurrentSlide(!currentSlide ? slides.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };
  return (
    <div className="space-y-10">
      <h1>This is Slider component</h1>

      <div className="relative border w-fit mx-auto">
        <div className=" text-black font-bold items-center justify-center flex">
          {slides?.map((src, idx) => (
            <div key={idx} className="">
              <Image
                className={
                  " w-full " + (currentSlide === idx ? "block" : "hidden")
                }
                height={1000}
                width={1000}
                src={src}
                alt="f"
              />
            </div>
          ))}
        </div>
        <div className="flex absolute right-2 bottom-2 w-fit justify-center items-center   text-md  md:text-xl lg:text-2xl  ">
          <i
            onClick={handlePrev}
            className="ri-arrow-left-s-line transition-colors duration-600  py-1 px-4  hover:bg-green-500 bg-black  rounded-l-full   "
          ></i>
          <span className="  w-px self-stretch bg-neutral-100 opacity-20 "></span>
          <i
            onClick={handleNext}
            className="ri-arrow-right-s-line transition-colors duration-600 py-1 px-4   hover:bg-green-500 bg-black rounded-r-full  "
          ></i>
        </div>
      </div>
    </div>
  );
}
