
import Banner1 from "../../../assets/carouselImg/banner1.webp";
import Banner2 from "../../../assets/carouselImg/banner2.webp";

export const Hero2 = () => {
  return (
  
     <div className="my-10 ml-[130px]" >
    <img
      src={Banner1}
      className="w-[1250px] h-[200px] rounded-lg"
      alt="Banner1"
    />
    <img
      src={Banner2}
     className="my-10 w-[1250px] h-[200px]  rounded-lg" 
      alt="Banner2"
    />
  </div>
  
  
  
  )
}
