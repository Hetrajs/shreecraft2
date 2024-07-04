import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Power1, ScrollTrigger } from "gsap/all";
import Logo from '../Home/image/logo.mp4';

const About = () => {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);
  const logoAnimationDesktop = useRef(null);
  const logoAnimationMobile = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: text1.current,
          start: "top 100%",
          end: "top 0%",
          scrub: 1,
        }
      });

      tl.fromTo(
        text1.current,
        {
          x: "-100%",
          y: -50,
          scale: 6,
          color: "#666666",
          opacity: 0
        },
        {
          x: "-20%",
          y: -50,
          scale: 6,
          duration: 5,
          opacity: 1,
          color: "#666666"
        }
      )
      .fromTo(
        text1.current,
        {
          x: "-20%",
          y: -50,
          scale: 6,
        },
        {
          x: 0,
          y: 0,
          scale: 1,
          duration: 3,
          delay: 1,
          color: "white"
        }
      )
      .fromTo(
        text2.current,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: Power1.easeInOut
        }
      )
      .fromTo(
        text3.current,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: Power1.easeInOut,
          onStart: () => {
            logoAnimationDesktop.current.play();
          }
        },
        'a'
      )
      .fromTo(
        text4.current,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: Power1.easeInOut
        }
      )
      .fromTo(
        logoAnimationDesktop.current,
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1,
        },
        'a'
      );
    });

    // Mobile Animation

    mm.add("(max-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: text1.current,
          start: "top 70%",
          end: "top 0%",
          scrub: 1,
        }
      });
      tl.fromTo(
        text1.current,
        {
          x: "-100%",
          y: -20,
          scale: 3,
          color: "#999999",
          opacity: 0
        },
        {
          x: "0%",
          y: -20,
          scale: 3,
          duration: 3,
          opacity: 1,
          color: "#999999"
        }
      )
      .fromTo(
        text1.current,
        {
          x: "0%",
          y: -20,
          scale: 3,
        },
        {
          x: 0,
          y: 20,
          scale: 2,
          duration: 2,
          color: "white"
        }
      )
      .fromTo(
        text2.current,
        {
          y: 60,
          opacity: 0
        },
        {
          y: 20,
          opacity: 1,
          duration: 2,
          ease: Power1.easeInOut,
          onStart: () => {
            logoAnimationMobile.current.play();
          }
        }
      )
      
      .fromTo(
        text3.current,
        {
          y: 80,
          opacity: 0
        },
        {
          y: 30,
          opacity: 1,
          duration: 2,
          ease: Power1.easeInOut,
        },
        'a'
      )
      .fromTo(
        text4.current,
        {
          y: 80,
          opacity: 0
        },
        {
          y: 40,
          opacity: 1,
          duration: 2,
          ease: Power1.easeInOut
        }
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section id="about" className="bg-black overflow-hidden">
      <div className="container mx-auto px-6 py-20 lg:py-32 xl:py-40 max-w-[1300px] w-full">
        <div className="w-full flex flex-col justify-center items-center gap-8 lg:flex-row lg:justify-between lg:gap-24">
          <video ref={logoAnimationDesktop} muted autoPlay={false} src={Logo} width={500} className="max-w-[400px] xl:max-w-[600px] hidden lg:flex"></video>
          <div className="space-y-4 text-white xl:space-y-7">
            <h1 
              ref={text1}
              className="text-4xl -translate-x-[100%] text-center lg:text-5xl font-roboto tracking-wider"
            >
              About
            </h1>
            <video playsInline ref={logoAnimationMobile} muted autoPlay={false} src={Logo} width={250} className="max-w-[400px] lg:hidden xl:max-w-[600px] mx-auto"></video>
            <h2 ref={text2} className="text-justify text-sm lg:text-[16px] px-2 lg:px-0 lg:text-left font-inter tracking-normal">
              Welcome to Shree Crafteria, where creativity meets tradition!
              Explore our exquisite lippan art pieces, meticulously crafted to
              add an enchanting touch to any space. Elevate your décor with our
              unique blend of heritage and modern aesthetics
            </h2>
            <h2 ref={text3} className="text-justify text-sm lg:text-[16px] px-2 lg:px-0 mt-20 lg:text-left font-inter tracking-normal">
              Our handcrafted pieces blend tradition with innovation, bringing
              a touch of cultural elegance to your modern space. Discover the
              beauty of lippan artistry with us
            </h2>
            <h2 ref={text4} className="text-justify text-sm lg:text-[16px] px-2 lg:px-0 lg:text-left font-inter tracking-normal">
              Lippan art is a traditional form of decorative wall mural found in
              the Kutch region of Gujarat, India. It involves creating intricate
              patterns using a mixture of mud and camel dung, adorned with
              mirrors and colorful embellishments. It's not only visually
              striking but also serves cultural and spiritual significance in
              the local communities.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
