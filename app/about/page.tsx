'use client'

import { useEffect, useState } from "react";
import React from "react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";

export default function About() {
  // Array of image URLs
  const images = [
    "/images/james-hooper-avatar.png", // Replace with your image paths
    "/images/james-hooper-avatar.png",
    "/images/james-hooper-avatar.png",
    "/images/james-hooper-avatar.png",
    "/images/james-hooper-avatar.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <>
    <section className="flex flex-col items-center justify-center w-screen h-full overflow-hidden pb-32 ">
    <Navigation />
    {/* <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      /> */}
      <div className="w-full max-w-md h-[100vh] overflow-hidden flex items-center justify-center">
        <img
          src={images[currentImageIndex]}
          alt="Slideshow"
          className="object-contain w-full h-full rounded-md"
        />
      </div>
      <div className="pt-10 pb-22 mx-10 md:mx-22 text-left animate-fade-in text-white max-w-[600px] text-lg mx-6 md:mx-40">
        <h1 className="text-3xl font-light mb-4  bg-gradient-to-r from-blue-500 to-pink-500  bg-clip-text text-transparent">James Hooper</h1>
        <p className="mt-6 text-gray-400 mx-auto mb-10">
          Hi, I'm James Hooper, a UX/UI web designer specializing in helping small businesses build beautiful, functional, and results-driven websites. With years of experience transforming ideas into seamless digital experiences, I’m dedicated to creating designs that not only look great but also drive business growth.
        </p>
        <h2 className='text-xl mb-4 bg-gradient-to-r from-blue-500 to-pink-500  bg-clip-text text-transparent'>What I Do</h2>
        <p className='text-gray-400   mb-10'>I work closely with businesses like yours to craft user-centered websites that connect with your audience and enhance your brand’s online presence. My approach combines creativity with strategy, ensuring that every design decision is rooted in delivering value to both your users and your business.</p>
        <h2 className='text-xl mb-4 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent'>Why Work With Me?</h2>
        <ul className='mb-10'>
          <li className='list-disc ml-5 space-y-2 text-gray-400  mb-4'><span className='bg-gradient-to-r from-blue-500 to-pink-500 hover:text-white bg-clip-text text-transparent'>Tailored Solutions:</span> No two businesses are the same, and neither are my designs. I create unique, personalized websites that align with your goals and target audience.</li>
          <li className='list-disc ml-5 space-y-2 text-gray-400  mb-4'><span className='bg-gradient-to-r from-blue-500 to-pink-500 hover:text-white bg-clip-text text-transparent'>Expert in User Experience:</span> I prioritize usability, ensuring that every interaction is intuitive, smooth, and engaging.</li>
          <li className='list-disc ml-5 space-y-2 text-gray-400  mb-4'><span className='bg-gradient-to-r from-blue-500 to-pink-500 hover:text-white bg-clip-text text-transparent'>Committed to Results:</span> Whether you want to boost engagement, drive sales, or increase brand visibility, I’m here to design solutions that make an impact.</li>
          <li className='list-disc ml-5 space-y-2 text-gray-400  mb-4'><span className='bg-gradient-to-r from-blue-500 to-pink-500 hover:text-white bg-clip-text text-transparent'>Collaborative Process:</span> I believe in working with my clients every step of the way. From initial concept to final launch, you’ll have a clear vision of the progress and direction of your project.</li>
        </ul>
        <h2 className='text-xl mb-4 bg-gradient-to-r from-blue-500 to-pink-500  bg-clip-text text-transparent'>My Promise</h2>
        <p className='text-gray-400  mb-10'>Your website is the face of your business online, and I take that seriously. My mission is to help your business thrive by designing a digital experience that leaves a lasting impression on your customers and turns clicks into conversions.</p>
        <h2 className='text-xl mb-4 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent'>Let’s Get Started</h2>
        <p className='text-gray-400 '>Ready to take your business to the next level? Let’s chat! I’m excited to learn more about your project and how we can create something amazing together.</p>
      </div>
    </section>
    </>
  );
}
