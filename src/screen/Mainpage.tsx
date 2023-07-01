import React,{useState} from 'react';
import Course from '../components/course/course';
import PricingCard from '../components/pricing/pricing';
import TestimonialCarousel from '../components/Reviews/reviews';



enum PricingOption {
    Monthly = 'monthly',
    Annually = 'annually',
  }
const NavBar: React.FC = () => {
    const pricingOptionsData  = [
        {
          title: 'Basic Plan',
          month:'/mo',
          year:'/yr',
          priceMonthly: '$54',
          priceAnnually: '$99',
          features: ['Free access to video class', 'Free access to video class', 'Free access to video class'],
        },
        {
          title: 'Premium Plan',
          month:'/mo',
          year:'/yr',
          priceMonthly: '$54',
          priceAnnually: '$199',
          features: ['Free access to video class', 'Free access to video class', 'Free access to video class'],
        },
        {
          title: 'Basic Plan',
          month:'/mo',
          year:'/yr',
          priceMonthly: '$54',
          priceAnnually: '$999',
          features: ['Free access to video class', 'Free access to video class', 'Free access to video class'],
        },
      ];
      const [activePlanIndex, setActivePlanIndex] = useState(0);

  const handlePlanClick = (index: number) => {
    setActivePlanIndex(index);
  };
  
  const [selectedOption, setSelectedOption] = useState<PricingOption>(
    PricingOption.Monthly
  );

  const handleToggle = () => {
    setSelectedOption(
      selectedOption === PricingOption.Monthly
        ? PricingOption.Annually
        : PricingOption.Monthly
    );
  };
  return (
    <>
    <div className='group'>
        <div className="overlap-group">
              <img
                className="polygon"
                alt="Polygon"
                src="https://generation-sessions.s3.amazonaws.com/07da9340a55c3b7f630af296ca60aa90/img/polygon-1-1.svg"
              />
              <img
                className="polygon-2"
                alt="Polygon"
                src="https://generation-sessions.s3.amazonaws.com/07da9340a55c3b7f630af296ca60aa90/img/polygon-1.svg"
              />
              <div className="ellipse" />
            </div>
            </div>
    <nav
    className="
      flex flex-wrap
      items-center
      justify-between
      w-full
      z-10
      py-4
      md:py-0
      px-4
      
    "
  >
   <div className='px-8'>
      <p className='text-white text-base'>Logo</p>
    </div>
   
    
   
   <div className="hidden  md:flex md:items-center" id="menu">
      <ul
        className="
          pt-4
        
          md:flex
          md:justify-between 
          md:pt-0"
      >
        <li>
          <a className="md:p-4 py-2 text-white block hover:text-purple-400" href="#about"
            >About</a
          >
        </li>
        <li>
          <a className="md:p-4 py-2 block text-white hover:text-purple-400" href="#pricing"
            >Pricing</a
          >
        </li>
        <li>
          <a className="md:p-4 py-2 block text-white hover:text-purple-400" href="#reviews"
            >Review</a
          >
        </li>
      </ul>
    </div>
  
</nav>
<div className="absolute">
            <div className="overlap-2 flex w-full py-12 relative ">
              <div className="w-7/12">
                <div className=" mb-6 pl-8">
                <p className="text-wrapper-3 text-white pl-3 text-4xl font-bold">
                    Learn how to launch a successful podcast
                  </p>
                  <p className="lorem-ipsum-is-2 w-96 pl-3 text-white text-base py-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting in ustry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s
                  </p>
                  <div className="pl-3 my-3">
                  <button className=" bg-purple-600 mt-6 px-8 py-3 text-white text-xl  font-bold rounded-md">Sign up Now</button>
                </div>
                </div>
               
              </div>
              <div className='w-5/12 py-8'>
              <img
                className="group-2 top-28"
                alt="Group"
                src="https://generation-sessions.s3.amazonaws.com/07da9340a55c3b7f630af296ca60aa90/img/group-75.png"
              />
              <img
                className="everyone-is-smiling top-12"
                alt="Everyone is smiling"
                src="https://generation-sessions.s3.amazonaws.com/07da9340a55c3b7f630af296ca60aa90/img/everyone-is-smiling-listens-group-people-business-conference-mod@2x.png"
              />
              <img
                className="group-business top-36"
                alt="Group business"
                src="https://generation-sessions.s3.amazonaws.com/07da9340a55c3b7f630af296ca60aa90/img/group-business-workers-smiling-happy-confident-working-together-@2x.png"
              />
              <img
                className="streamline-computer"
                alt="Streamline computer"
                src="https://generation-sessions.s3.amazonaws.com/07da9340a55c3b7f630af296ca60aa90/img/streamline-computer-voice-mail-mic-audio-mike-music-microphone.svg"
              />
              <img
                className="solar-podcast"
                alt="Solar podcast"
                src="https://generation-sessions.s3.amazonaws.com/07da9340a55c3b7f630af296ca60aa90/img/solar-podcast-outline.svg"
              />
              </div>
            </div>
          </div>
<div className='w-11/12' >
          <div className="frame-2" id='about'>
            <div className="course-2">
              <Course className="design-component-instance-node" />
              <Course className="course-instance" />
              <Course className="course-3" />
              <Course className="course-4" />
              
            </div>
            <div className="frame-3">
              <div className="title w-96">
                <h1 className="text-3xl font-bold ">About the Course</h1>
                <p className="text-sm pt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unkno
                </p>
              </div>
              <div className="">
                  <button className=" bg-purple-600 mt-6 px-8 py-3 text-white text-xl  font-bold rounded-md">Explore Now</button>
                </div>
            </div>
            </div>
          </div>
          <div className='' id="pricing">
            <div className='text-center width-300 mb-4'>
            <h1 className='text-3xl font-bold'>Choose Your Plan</h1>
            <p className='text-sm w-96 m-auto py-4' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            <span className='p-3 border-solid shadow-md rounded-2xl '>
            <button
            className={`px-4 py-2 rounded-full focus:outline-none ${
              selectedOption === PricingOption.Monthly
                ? 'bg-purple-400 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
            onClick={handleToggle}
          >
            monthly
          </button>
            <button
            className={`px-4 py-2 rounded-full focus:outline-none ${
              selectedOption === PricingOption.Annually
                ? 'bg-purple-400 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
            onClick={handleToggle}
          >
            yearly
          </button>
          </span>
            </div>
            
          <div className="flex flex-wrap justify-evenly ">
      {pricingOptionsData .map((option, index) => (
        <div
          key={index}
          className={`${
            activePlanIndex === index ? 'bg-purple-800 text-white' : 'bg-white text-black'
          }  px-4  border border-purple-600 mx-2 rounded-lg`}
          onClick={() => handlePlanClick(index)}
        >
          <PricingCard title={option.title}
              priceMonthly={
                selectedOption === PricingOption.Annually
                  ? option.priceAnnually
                  : option.priceMonthly
              }
              month={
                selectedOption === PricingOption.Annually
                ? option.year
                : option.month
              }
              year={option.year}
              priceAnnually={option.priceAnnually}
              features={option.features} />
        </div>
      ))}
    </div>
          </div>

          <img className="pngwing" alt="Pngwing" src="https://generation-sessions.s3.amazonaws.com/07da9340a55c3b7f630af296ca60aa90/img/pngwing-1.png"></img>
          <div className='w-11/12 mx-auto' id='reviews'>
            <div className='w-96'>
                <h1 className='text-3xl font-bold '>Reviews from customers</h1>
            <p className=' text-sm py-4' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>

            </div>
<TestimonialCarousel/>

          </div>
          <section className=''>
            <div className='termsandservices'>
          <div className='text-center pt-3'>
            <h1 className='text-3xl font-bold mb-4'>We have what you’re looking for</h1>
            <p className='w-1/2 mx-auto text-sm text-purple-600 py-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</p>
            <button className='bg-purple-600 mt-6 px-4 py-3 text-white text-xl  font-bold rounded-md'>Get Started Now</button>
          </div>
          <br/>
          <br/>

          <div className='w-9/12 mx-auto  mt-10'>
            <hr />
            <div className=' py-3 flex justify-between'>
            <div className=' w-9/12 flex justify-between'>
                <div>
                    <span className='text-white text-xs'>All Right Reserved @Copyright 2023</span>
                </div>
                <div className='text-white text-xs items-center flex'>
                    <p className='px-4'>Terms of Service</p>
                    <p className='px-4'>Privacy Policy</p>
                    <p className='px-4'>Product</p>
                </div>
                

            </div>
            <div className='flex items-center px-4'>
                <a className='text-white py-2 px-3 ' href='https://www.facebook.com/'><svg xmlns="http://www.w3.org/2000/svg" fill='#fff' height="1em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg></a>
                <a className='text-white py-2 px-3' href='https://www.youtube.com/'><svg xmlns="http://www.w3.org/2000/svg" fill='#fff' height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></a>
                <a className='text-white py-2 px-3' href='https://www.instagram.com/'><svg xmlns="http://www.w3.org/2000/svg" fill='#fff' height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                <a className='text-white py-2 px-3' href='https://twitter.com/'><svg xmlns="http://www.w3.org/2000/svg" fill='#fff' height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></a>
            </div>
            </div>
          </div>
          </div>
        </section>
          
          
</>
  );
};

export default NavBar;
