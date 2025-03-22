

import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Carousel1 from "../../../assets/carouselImg/carousel1.webp";
import Carousel2 from "../../../assets/carouselImg/carousel2.webp";
import Carousel3 from "../../../assets/carouselImg/carousel3.webp";
import Carousel4 from "../../../assets/carouselImg/carousel4.webp";
import Carousel5 from "../../../assets/carouselImg/carousel5.webp";
import Carousel6 from "../../../assets/carouselImg/carousel6.webp";
import Carousel7 from "../../../assets/carouselImg/carousel7.webp";



export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      images: [Carousel1, Carousel2, Carousel3], 
    },
    {
      id: 2,
      images: [Carousel4, Carousel5, Carousel6],
    },
    {
      id: 3,
      images: [Carousel7, Carousel1, Carousel2],
    },
  ];

  return (
    <div className="relative w-full container mx-auto">
   
      <div className="overflow-hidden">
        <div
          className="flex duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-none">
              <div className="flex justify-center space-x-8 p-6"> 
                {slide.images.map((image, index) => (
                  <div key={index} className="flex">
                    <img
                      src={image}
                      alt={`Slide ${slide.id} - Image ${index + 1}`}
                      className="w-86 h-56 object-cover rounded-lg shadow-lg" // Increased image size
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

   
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30"
      >
        <FaChevronLeft className="h-4 w-4 text-[#006691]" /> 
      </button>
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30"
      >
        <FaChevronRight className="h-4 w-4 text-[#006691]" /> 
      </button>

   
      <div className="absolute  bottom-2 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-white/50"} hover:bg-blue-500`} // Increased dot size
          />
        ))}
      </div>

    
      
    </div>
  );
};


