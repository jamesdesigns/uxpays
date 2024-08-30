'use client'

import { useEffect, useState } from "react";
import React from "react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";

export default function About() {
  // Array of image URLs
  const images = [
    "/images/image1.jpg", // Replace with your image paths
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
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
    <section className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
    <Navigation />
    <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="text-4xl font-light mb-8 text-gray-400 hover:text-white">James Hooper</h1>
      <div className="w-full max-w-md h-[40vh] overflow-hidden flex items-center justify-center">
        <img
          src={images[currentImageIndex]}
          alt="Slideshow"
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="pt-10 pb-22 mx-10 md:mx-22 text-center animate-fade-in">
        <p className="mt-6 text-lg text-gray-400 hover:text-white text-center px-4 max-w-[600px] mx-auto">
          A professional and passionate designer always ready to tackle new
          challenges and deliver top-notch results.
        </p>
      </div>
    </section>
    </>
  );
}
