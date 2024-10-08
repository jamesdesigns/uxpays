import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import '../styles/ctaButton.css';

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "The Designer", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="mt-16 mb-6 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md duration-500 text-gray-400 hover:text-white pr-4"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-xl md:text-9xl whitespace-nowrap bg-clip-text ">
        UXPays
      </h1>
      {/* <h1 className="text-6xl bg-gradient-to-br text-pretty text-transparent bg-gradient-stop bg-clip-text from-white via-white via-30% to-white/30 max-w-sm sm:max-w-none xl:max-w-lg font-medium text-[32px] leading-none sm:text-[56px] md:text-[64px] xl:text-[64px] tracking-tighter">UXPays</h1> */}

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="pt-10 pb-22 mx-10 md:mx-22 text-center animate-fade-in">
        <h2 className="leading-loose text-md md:text-lg text-white/50 hover:text-white max-w-[600px] mx-auto font-light">
           I specialize in designing exceptional user experiences and building beautiful websites designed to elevate small businesses.</h2>
        <a
          href="/contact"
          className="inline-block my-10 px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-300 fancy "
        >
          Hire Me
        </a>
      </div>
    </div>
  );

}
