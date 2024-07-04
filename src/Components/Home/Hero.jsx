import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { Power2 } from "gsap";
import Header from "./Header";
import About from "./About";
import Products from "./Products";
import Tdt from "./Tdt";
import Follow from "./Follow";
import Footer from "./Footer";

const Hero = () => {

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".hero-image", {
      opacity: 1,
      duration: 1.4,
      ease: Power2.easeIn,
    })
      .from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: Power2.easeInOut,
        stagger: 0.2,
      });
  });

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div className="bg-black w-full">
      <Header />
      <section id="home" className="relative bg-[#1b1b1b]">
        {/* Mobile */}
        <div className="lg:hidden bg-gradient-to-b from-black to-[#080D28]">
          <div className="flex justify-center items-center flex-col gap-1 lg:hidden py-8">
            <h2 className="text-white font-extralight font-inter text-2xl hero-text">
              Shree
            </h2>
            <h1 className="text-white font-roboto text-4xl hero-text">Crafteria</h1>
            <h3 className="pt-6 text-white font-mono font-extralight tracking-[4px] text-lg hero-text">
              Craft Of Divine
            </h3>
          </div>
          <img
            className="w-full object-cover opacity-0 mx-auto pb-4 hero-image"
            src="mobile.png"
            alt="Mobile Background"
          />
        </div>
        {/* Desktop */}
        <figure className="w-full overflow-hidden">
          <img data-scroll data-scroll-speed="-.3"
            className="w-full object-cover opacity-0 hidden lg:block hero-image"
            src="https://dl.dropboxusercontent.com/scl/fi/4jcuuhyryle9tw452xjel/1-2-_000000.jpg?rlkey=j553bxh07n2atr44uzmxkr8l3&st=gsfoxyu1&dl=0"
            alt="Desktop Background"
          />
        </figure>
        <div className="space-y-1 hidden lg:block lg:absolute left-[10%] top-1/2 -translate-y-1/2 z-20">
          <h2 className="text-white font-extralight font-inter lg:text-6xl xl:text-7xl hero-text">
            Shree
          </h2>
          <h1 className="text-white font-roboto lg:text-8xl xl:text-9xl hero-text">
            Crafteria
          </h1>
          <h3 className="pt-7 text-white font-mon lg:tracking-[4px] lg:text-2xl xl:text-3xl font-extralight hero-text">
            Craft Of Divine
          </h3>
        </div>
      </section>
      <About />
      <Products />
      <Tdt />
      <Follow />
      <Footer />
    </div>
  );
};

export default Hero;
