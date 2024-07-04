import { useGSAP } from "@gsap/react";
import gsap, { Power2, ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Tdt = () => {
  const PCVideo =
    "https://dl.dropboxusercontent.com/scl/fi/y9l9envaf6fc941etvktt/tdt_pc_5-2.mp4?rlkey=91f8kpxto8nqdvybxh82pd5lb&st=l7yhx055&dl=0";
  const MobileVideo =
    "https://dl.dropboxusercontent.com/scl/fi/0i587apffprs9n1acjmw5/tdt_mobile_2.mp4?rlkey=z4uqtc2k4xatnbhfivhnmgj70&st=f8ndo3xc&dl=0";

  const Title = useRef(null);
  const para1 = useRef(null);
  const para2 = useRef(null);
  const socialLinks = useRef(null);
  const socialLink2 = useRef(null);

  const MobPara = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements1 = para1.current.querySelectorAll("span");
    const textElements2 = para2.current.querySelectorAll("span");
    const MobElement = MobPara.current.querySelectorAll("span");

    const tl = gsap.timeline();

    // Disable ScrollTrigger's sessionStorage caching
    ScrollTrigger.config({ markers: false });

    // Define media queries with GSAP's matchMedia
    const mm = gsap.matchMedia();
    mm.add("(min-width: 769px)", () => {
      ScrollTrigger.create({
        trigger: "#tdt",
        pin: true,
      });

      tl.fromTo(
        Title.current,
        {
          color: "#333333",
        },
        {
          scrollTrigger: {
            trigger: Title.current,
            start: "top 0%",
            end: "top -20%",
            scrub: 3,
          },
          color: "#cb6200",
          letterSpacing: "10px",
          duration: 3,
        }
      );

      tl.fromTo(
        textElements1,
        {
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 3,
          delay: 2,
          stagger: 0.1,
          color: "#fff",
          scrollTrigger: {
            trigger: para1.current,
            start: "top 20%",
            end: "top 0%",
            scrub: 3,
          },
        }
      );

      tl.fromTo(
        textElements2,
        {
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 3,
          delay: 2,
          stagger: 0.1,
          color: "#fff",
          scrollTrigger: {
            trigger: para2.current,
            start: "top 20%",
            end: "top 0%",
            scrub: 3,
          },
        }
      );

      tl.fromTo(
        socialLinks.current,
        {
          y: 20,
          opacity: 0,
          duration: 2,
          ease: Power2.easeInOut,
        },
        {
          scrollTrigger: {
            trigger: socialLinks.current,
            start: "top 50%",
            end: "top 0%",
            scrub: 3,
            ease: Power2.easeInOut,
          },
          y: 0,
          opacity: 1,
          duration: 2,
          ease: Power2.easeInOut,
        }
      );
    });

    // Mobile Animation

    mm.add("(max-width: 768px)", () => {
      tl.fromTo(
        Title.current,
        {
          color: "#333333",
        },
        {
          scrollTrigger: {
            trigger: Title.current,
            start: "top 0%",
            end: "top -10%",
            scrub: 3,
          },
          color: "#cb6200",
          letterSpacing: "10px",
          duration: 1,
        }
      );

      tl.fromTo(
        MobElement,
        {
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 3,
          delay: 2,
          stagger: 0.1,
          color: "#fff",
          scrollTrigger: {
            trigger: MobPara.current,
            start: "top 20%",
            end: "top 0%",
            scrub: 3,
          },
        }
      );

      tl.fromTo(
        socialLink2.current,
        {
          y: 20,
          opacity: 0,
          duration: 2,
          ease: Power2.easeInOut,
        },
        {
          scrollTrigger: {
            trigger: socialLink2.current,
            start: "top 10%",
            end: "top 0%",
            scrub: 1,
            ease: Power2.easeInOut,
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: Power2.easeInOut,
        }
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <>
      <main id="tdt" className="w-full bg-[#010009] overflow-hidden">
        <div className="title_links pt-10 lg:flex px-6 lg:pl-6 xl:pl-10 lg:px-0">
          <div className="pc_title flex flex-col">
            <h1
              ref={Title}
              className="text-[#333333] uppercase leading-none font-rubik text-[3rem] lg:text-[7rem]"
            >
              The <br /> Divine <br /> Truth
            </h1>
            <p
              ref={para1}
              className="text-[#111111] hidden lg:block lg:text-[1.6rem] lg:leading-[2.4rem] px-5 mt-20 font-roboto"
            >
              {"Dive into the mystical world of Hindu history on our YouTube channel.".split(
                ""
              ).map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </p>
            <p
              ref={para2}
              className="text-[#111111] hidden lg:block lg:text-[1.6rem] lg:leading-[2.4rem] px-5 mt-10 font-roboto"
            >
              {"Join us for captivating stories of gods and goddesses that inspire and enlighten.".split(
                ""
              ).map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </p>
            <div
              ref={socialLinks}
              className="social_links mt-10 hidden ml-5 lg:flex items-center gap-5"
            >
              <img
                className="size-[35px]"
                src="https://dl.dropboxusercontent.com/scl/fi/hhscgdmm2ggugkd0wuyep/instagram-1.png?rlkey=dfwzcpozhek56uc751c8wexwi&st=sv5zqz2n&dl=0"
                alt=""
              />
              <img
                className="size-[45px]"
                src="https://dl.dropboxusercontent.com/scl/fi/u7lcr6qqwgrtgons9a3pi/youtube.png?rlkey=pjj75jfqm6phzifsi7bk0hlfi&st=mmvi42sz&dl=0"
                alt=""
              />
            </div>
          </div>
          <video
            autoPlay
            muted
            loop
            src={PCVideo}
            className="w-[67.7%] hidden lg:flex h-full object-cover pb-10"
          ></video>
        </div>
        <p ref={MobPara} className="text-[#111111] lg:hidden px-5 mt-10 font-roboto">
          {"Dive into the mystical world of Hindu history on our YouTube channel. Join us for captivating stories of gods and goddesses that inspire and enlighten.".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </p>
        <div ref={socialLink2} className="social_links lg:hidden mt-10 ml-5 flex items-center gap-5">
          <img
            className="size-[45px]"
            src="https://dl.dropboxusercontent.com/scl/fi/u7lcr6qqwgrtgons9a3pi/youtube.png?rlkey=pjj75jfqm6phzifsi7bk0hlfi&st=mmvi42sz&dl=0"
            alt=""
          />
          <img
            className="size-[35px]"
            src="https://dl.dropboxusercontent.com/scl/fi/hhscgdmm2ggugkd0wuyep/instagram-1.png?rlkey=dfwzcpozhek56uc751c8wexwi&st=sv5zqz2n&dl=0"  />
        </div>
        <div className="video-div relative">
          <video
            playsInline
            autoPlay
            muted
            loop
            src={MobileVideo}
            className="w-full lg:hidden h-[400px] object-cover pb-10"
          ></video>
        </div>
      </main>
    </>
  );
};

export default Tdt;

