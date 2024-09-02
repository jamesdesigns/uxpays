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
    <section className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
    <Navigation />
    <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="w-full max-w-md h-[40vh] overflow-hidden flex items-center justify-center">
        <img
          src={images[currentImageIndex]}
          alt="Slideshow"
          className="object-contain w-full h-full rounded-md"
        />
      </div>
      <div className="pt-10 pb-22 mx-10 md:mx-22 text-center animate-fade-in">
      <h1 className="text-4xl font-light mb-8 text-white">James Hooper</h1>
        <p className="mt-6 text-lg text-gray-400 hover:text-white text-center px-4 max-w-[600px] mx-auto">
          Expert UX/UI Web Designer specializing in building beautiful branded websites for small businesses. 
        </p>
      </div>
    </section>
    </>
  );
}
