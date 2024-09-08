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
        <h1 className="text-3xl font-light mb-4  text-white">James Hooper</h1>
        <p className="mt-6 text-white/50 mx-auto mb-10">
          Hi, I'm James, a UX/UI web designer helping small businesses create beautiful, functional websites that drive results. With years of experience, I focus on designs that not only look great but help your business grow.
        </p>
        <h2 className='text-xl mb-4 text-white'>What I Do</h2>
        <p className='text-white/50 mb-10'>I design user-centered websites that connect with your audience and strengthen your brand. My approach blends creativity and strategy to ensure every design decision adds value to your business.</p>
        <h2 className='text-xl mb-4 text-white'>Why Work With Me?</h2>
        <ul className='mb-10'>
          <li className='list-disc ml-5 space-y-2 text-white/50 mb-4'><span className='text-white'>Custom Designs:</span> Every website is tailored to your goals and audience.</li>
          <li className='list-disc ml-5 space-y-2 text-white/50 mb-4'><span className='text-white'>User-Focused:</span> I prioritize smooth, intuitive experiences.</li>
          <li className='list-disc ml-5 space-y-2 text-white/50 mb-4'><span className='text-white'>Results-Driven:</span> I aim to boost engagement, sales, and visibility</li>
          <li className='list-disc ml-5 space-y-2 text-white/50  mb-4'><span className='text-white'>Collaborative:</span> I'll work closely with you from concept to launch.</li>
        </ul>
        <h2 className='text-xl mb-4 text-white'>My Promise</h2>
        <p className='text-white/50 mb-10'>Your website is crucial to your business, and I'm committed to creating a digital experience that turns visitors into customers.</p>
        <h2 className='text-xl mb-4 text-white'>Let's Get Started</h2>
        <p className='text-white/50 '>Ready to grow your business? Let's talk about how we can work together!</p>
      </div>
    </section>
    </>
  );
}
