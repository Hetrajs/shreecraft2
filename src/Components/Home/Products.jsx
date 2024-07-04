import { useGSAP } from "@gsap/react";
import gsap, { Power3, ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const BGColor = useRef(null);
  const BIGText = useRef(null);
  const smallText = useRef(null);

  const LeftImage = useRef(null);
  const TopImage = useRef(null);
  const BottomImage = useRef(null);
  const RightImage = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const tl = gsap.timeline();

      gsap.to(BGColor.current, {
        scrollTrigger: {
          trigger: BGColor.current,
          start: "top 60%",
          end: "top 20%",
          scrub: 1,
        },
        backgroundColor: "#111111"
      });

      tl.fromTo(BIGText.current, {
        scale: 1
      }, {
        scrollTrigger: {
          trigger: BIGText.current,
          start: "top 30%",
          end: "top 0%",
          scrub: 3,
        },
        top: "100px",
        fontSize: "500px",
        lineHeight: "400px",
        duration: 3
      });

      // Photo's Animation
      tl.fromTo(LeftImage.current, {
        x: "-50%",
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: "#photos",
          start: "top 30%",
          end: "top 20%",
          scrub: 1,
        },
        x: "0%",
        duration: 2,
        opacity: 1
      }, 'a');

      tl.fromTo(TopImage.current, {
        y: "-50%",
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: "#photos",
          start: "top 30%",
          end: "top 20%",
          scrub: 1,
        },
        y: "0%",
        duration: 2,
        opacity: 1
      }, 'a');

      tl.fromTo(BottomImage.current, {
        y: "50%",
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: "#photos",
          start: "top 30%",
          end: "top 20%",
          scrub: 1,
        },
        y: "0%",
        duration: 2,
        opacity: 1
      }, 'a');

      tl.fromTo(RightImage.current, {
        x: "50%",
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: "#photos",
          start: "top 30%",
          end: "top 20%",
          scrub: 1,
        },
        x: "0%",
        duration: 2,
        opacity: 1
      }, 'a');
    });

    // Mobile Animation

    mm.add("(max-width: 768px)", () => {
      
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#photos",
          start: "top 30%",
          end: "top 0%",
          scrub: 3,
        },
      });
      tl2.fromTo(smallText.current,{
        y: "30%",
        opacity: 0
       },{
         y: "0%",
         opacity: 1,
         duration: 2,
         ease: Power3.easeInOut
       })
       .fromTo(LeftImage.current,{
       y: "30%",
       opacity: 0
      },{
        y: "0%",
        opacity: 1,
        duration: 2,
        ease: Power3.easeInOut
      })
      .fromTo(TopImage.current,{
        y: "30%",
        opacity: 0
       },{
         y: "0%",
         opacity: 1,
         duration: 2,
         ease: Power3.easeInOut
       })
       .fromTo(BottomImage.current,{
        y: "30%",
        opacity: 0
       },{
         y: "0%",
         opacity: 1,
         duration: 2,
         ease: Power3.easeInOut
       })
       .fromTo(RightImage.current,{
        y: "30%",
        opacity: 0
       },{
         y: "0%",
         opacity: 1,
         duration: 2,
         ease: Power3.easeInOut
       })


      // const tl = gsap.timeline();

      // gsap.to(BGColor.current, {
      //   scrollTrigger: {
      //     trigger: BGColor.current,
      //     start: "top 60%",
      //     end: "top 20%",
      //     scrub: 1,
      //   },
      //   backgroundColor: "#111111"
      // });

      // tl.fromTo(BIGText.current, {
      //   fontSize: "90px",
      // }, {
      //   scrollTrigger: {
      //     trigger: BIGText.current,
      //     start: "top 50%",
      //     end: "top 0%",
      //     scrub: 1,
      //     markers: true,
      //   },
      //   fontSize: "200px",
      //   lineHeight: "150px",
      //   duration: 3,
      //   opacity: 0
      // });

      // // Photo's Animation
      // tl.fromTo(LeftImage.current, {
      //   x: "-50%",
      //   opacity: 0
      // }, {
      //   scrollTrigger: {
      //     trigger: "#photos",
      //     start: "bottom 50%",
      //     end: "top 30%",
      //     scrub: 1,
      //   },
      //   x: "0%",
      //   duration: 2,
      //   opacity: 1
      // }, 'a');

      // tl.fromTo(TopImage.current, {
      //   y: "-50%",
      //   opacity: 0
      // }, {
      //   scrollTrigger: {
      //     trigger: "#photos",
      //     start: "top 50%",
      //     end: "top 30%",
      //     scrub: 1,
      //   },
      //   y: "0%",
      //   duration: 2,
      //   opacity: 1
      // }, 'a');

      // tl.fromTo(BottomImage.current, {
      //   y: "50%",
      //   opacity: 0
      // }, {
      //   scrollTrigger: {
      //     trigger: "#photos",
      //     start: "top 50%",
      //     end: "top 30%",
      //     scrub: 1,
      //   },
      //   y: "0%",
      //   duration: 2,
      //   opacity: 1
      // }, 'a');

      // tl.fromTo(RightImage.current, {
      //   x: "50%",
      //   opacity: 0
      // }, {
      //   scrollTrigger: {
      //     trigger: "#photos",
      //     start: "top 50%",
      //     end: "top 30%",
      //     scrub: 1,
      //   },
      //   x: "0%",
      //   duration: 2,
      //   opacity: 1
      // }, 'a');
    });


    return () => {
      mm.revert();
    };
  }, []);

  return (
    <>
      <section ref={BGColor} id="products" className="relative overflow-hidden bg-black">
        <div className="container mx-auto px-6 py-16 max-w-[1300px] w-full">
          <div className="bg-[#111111] lg:bg-black p-8 lg:py-16 flex w-full flex-col rounded-[20px] gap-8 justify-center items-center lg:gap-16">
          <h1 ref={smallText} className=" text-[#333333] font-bold lg:hidden text-7xl">Our <br /> Products</h1>
            <div className="our_products">
              <h1 ref={BIGText} className="text-[#333333] top-[100px] -left-0 font-bold font-inter lg:leading-[170px] text-[90px] hidden lg:inline-block leading-[90px] tracking-tighter lg:text-[200px] absolute">Our <br /> Products </h1>
              <div id="photos" className="w-full relative z-[2] grid mx-auto justify-center items-center lg:grid-cols-2 gap-5">
                <div ref={LeftImage} className="opacity-0 w-full overflow-hidden space-y-2">
                  <img
                    className="max-w-[400px]  lg:max-w-[550px] rounded-[9px] xl:max-w-[595px] h-[200px] lg:min-h-[570px] xl:min-h-[725px] object-cover lg:object-[70%] w-full"
                    src="https://dl.dropboxusercontent.com/scl/fi/4iehdjlxetlgnyzga11p2/radha-krishna.jpg?rlkey=662ppdmmu51iqqzu9grlbo0f5&st=1jaryemk&dl=0"
                  />
                  <h2 className=" text-white font-rob font-semibold">
                    Radha - <span className="text-[#6B6B6B]">Krishna</span>
                  </h2>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-5">
                  <div ref={TopImage} className="opacity-0 w-full space-y-2">
                    <img
                      className="max-w-[400px] lg:max-w-[650px]  w-full object-cover h-[200px] lg:h-[400px] rounded-[9px]"
                      src="https://dl.dropboxusercontent.com/scl/fi/uc6lqas3f43ah0kf3z5m8/jai-ganesh.jpg?rlkey=m4infbjbpzuc2gd7mez8v12we&st=zz1eezt1&dl=0"
                    />
                    <h2 className=" text-white font-rob font-semibold">
                      Jai <span className="text-[#6B6B6B]">Ganesh</span>
                    </h2>
                  </div>
                  <div className=" w-full flex flex-col lg:flex-row items-center justify-center gap-5 xl:gap-10">
                    <div ref={BottomImage} className=" opacity-0 overflow-hidden w-full space-y-2">
                      <img
                        className="max-w-[400px] lg:max-w-[550px] rounded-[9px] h-[200px] lg:h-[270px] object-cover w-full"
                        src="https://dl.dropboxusercontent.com/scl/fi/hl757h8xfijsetkro8zru/buddha.jpg?rlkey=m378xcvkrsm3jwmrgbmua7mbo&st=k2haennm&dl=0"
                      />
                      <h2 className=" text-white font-rob font-semibold">
                        Gautam <span className="text-[#6B6B6B]">Buddha</span>
                      </h2>
                    </div>
                    <div ref={RightImage} className=" opacity-0 w-full over-flow-hidden h-full space-y-2">
                      <img
                        className="max-w-[400px] lg:max-w-[550px] w-full rounded-[9px] object-cover lg:object-[0%] h-[200px] lg:h-[270px]"
                        src="https://dl.dropboxusercontent.com/scl/fi/fpx0dne745kg6u2o5nabr/red-blue-art.jpeg?rlkey=5eu3w1vs7wg6yuybf3rmakz9s&st=ljp1ihqr&dl=0"
                      />
                      <h2 className=" text-white font-rob font-semibold">
                        Red-Blue <span className="text-[#6B6B6B]">Rangoli</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                className="bg-white block mt-20 lg:mt-40 mx-auto w-fit text-center px-7 py-3 rounded-full font-inter"
                to="/products"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
