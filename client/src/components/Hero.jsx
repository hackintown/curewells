import { Button } from "./ui";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero({ toggleModal }) {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => handleAfterChange(index),
  };

  useEffect(() => {
    setAnimationComplete(true);
  }, []);

  const handleAfterChange = (index) => {
    setAnimationComplete(false);
    setCurrentSlide(index);
    setTimeout(() => {
      setAnimationComplete(true);
    }, 100); // Adjust the delay as needed
  };

  const SlideContent = () => (
    <motion.div
      className="absolute inset-0 flex items-start justify-center"
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: animationComplete ? 0 : 100,
        opacity: animationComplete ? 1 : 0,
      }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container mx-auto mt-10 flex flex-col items-start gap-4 p-4 md:mt-0 md:gap-6 md:p-10">
        <h5 className="font-poppins text-[16px] font-medium tracking-[0.44px] text-secondary md:text-[22px]">
          #Your Health, Our Priority
        </h5>
        <h1 className="font-poppins text-2xl font-bold text-[#031432] md:text-5xl md:leading-[120%]">
          We Provide
          <br />
          <span className="text-blue-500"> Medical</span> Services <br />
          That You Can <span className="text-blue-500">Trust</span>
        </h1>
        <p className="max-w-[300px] text-para md:max-w-[452px]">
          Experience the convenience and comfort of personalized healthcare
          solutions. Our services are designed to meet your unique needs,
          ensuring you receive comprehensive and compassionate care in the
          comfort of your own home.
        </p>
        <Button title="Book an appointment" onClick={toggleModal} />
      </div>
    </motion.div>
  );

  return (
    <div className="max-h-[600px] overflow-hidden">
      <Slider {...settings}>
        <div className="relative">
          <img
            src="slider2.jpg"
            alt="slide"
            className="h-[600px] w-full object-cover md:h-auto"
          />
          <SlideContent />
        </div>
        <div className="relative">
          <img
            src="slider.jpg"
            alt="slide"
            className="h-[600px] w-full object-cover md:h-auto"
          />
          <SlideContent />
        </div>
        <div className="relative">
          <img
            src="slider3.jpg"
            alt="slide"
            className="h-[600px] w-full object-cover md:h-auto"
          />
          <SlideContent />
        </div>
      </Slider>
    </div>
  );
}
