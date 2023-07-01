import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCarousel = () => {
    const sliderRef = useRef<any>(null);
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2.5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
          },
        },
      ],
    };
    
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
    return (
      <div className="w-11/12 mx-auto relative">
        <div className="  absolute z-10 inset-y-28 right-0">
        <button
          className="bg-gray-800 text-white hidden px-4 py-2 rounded focus:outline-none"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="bg-purple-300 text-white px-2 py-2  absolute rounded-full focus:outline-none mr-5"
          onClick={handleNext}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill='color: rgb(107 33 168);' height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </button>
      </div>
        <Slider {...settings} ref={sliderRef}>
          <div className="bg-white dark:bg-gray-800 shadow-lg mx-auto rounded-xl p-4 width-23rem">
          <div className="flex items-center mt-4">
            <a href="#" className="relative block">
                <img alt="profil" src="https://generation-sessions.s3.amazonaws.com/07da9340a55c3b7f630af296ca60aa90/img/lolla-1-3@2x.png" className="mx-auto object-cover rounded-full h-10 w-10 "/>
            </a>
            <div className="flex flex-col justify-between ml-2">
                <span className="text-sm font-semibold text-indigo-500">
                    Lolla Smith
                </span>
                <span className="flex items-center text-xs dark:text-gray-400">
                    Microsoft
                    
                </span>
                <span className="flex items-center text-xs dark:text-gray-400">
                    <img alt='star' src='https://generation-sessions.s3.amazonaws.com/07da9340a55c3b7f630af296ca60aa90/img/frame-20-3.svg'></img>
                    
                </span>
            </div>
        </div>
        <p className="text-gray-600 text-sm pt-4 dark:text-white">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        </p>
          </div>
          <div className="bg-white dark:bg-gray-800 width-23rem shadow-lg mx-auto rounded-xl p-4">
          <div className="flex items-center mt-4">
            <a href="#" className="relative block">
                <img alt="profil" src="https://generation-sessions.s3.amazonaws.com/07da9340a55c3b7f630af296ca60aa90/img/lolla-1-3@2x.png" className="mx-auto object-cover rounded-full h-10 w-10 "/>
            </a>
            <div className="flex flex-col justify-between ml-2">
                <span className="text-sm font-semibold text-indigo-500">
                    Lolla Smith
                </span>
                <span className="flex items-center text-xs dark:text-gray-400">
                    Microsoft
                    
                </span>
                <span className="flex items-center text-xs dark:text-gray-400">
                    <img alt='star' src='https://generation-sessions.s3.amazonaws.com/07da9340a55c3b7f630af296ca60aa90/img/frame-20-3.svg'></img>
                    
                </span>
            </div>
        </div>
        <p className="text-gray-600 text-sm pt-4 dark:text-white">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        </p>
          </div>
          <div className="bg-white dark:bg-gray-800 width-23rem shadow-lg mx-auto rounded-xl p-4">
          <div className="flex items-center mt-4">
            <a href="#" className="relative block">
                <img alt="profil" src="https://generation-sessions.s3.amazonaws.com/07da9340a55c3b7f630af296ca60aa90/img/lolla-1-3@2x.png" className="mx-auto object-cover rounded-full h-10 w-10 "/>
            </a>
            <div className="flex flex-col justify-between ml-2">
                <span className="text-sm font-semibold text-indigo-500">
                    Lolla Smith
                </span>
                <span className="flex items-center text-xs dark:text-gray-400">
                    Microsoft
                    
                </span>
                <span className="flex items-center text-xs dark:text-gray-400">
                    <img alt='star' src='https://generation-sessions.s3.amazonaws.com/07da9340a55c3b7f630af296ca60aa90/img/frame-20-3.svg'></img>
                    
                </span>
            </div>
        </div>
        <p className="text-gray-600 text-sm pt-4 dark:text-white">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        </p>
          </div>
        </Slider>
      </div>
    );
  };


  export default TestimonialCarousel;