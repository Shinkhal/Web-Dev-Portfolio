import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, img } = personalDetails;
  const [roles, setRoles] = useState([
    "Web Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "Coder",
    "Graphic Designer"
  ]);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const h11 = useRef();
  const h12 = useRef();
  const myimageref = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    const animateFromLeft = (ref, delay) => {
      tl.from(
        ref.current,
        {
          x: "-100%",
          delay,
          opacity: 0,
          duration: 1.5, // Faster animation
          ease: "Power3.easeOut",
        },
        "<"
      );
    };

    animateFromLeft(h11, 0.8);
    animateFromLeft(h12, 0.5);

    tl.from(
      myimageref.current,
      {
        x: "200%",
        delay: 0.5,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    );

    tl.from(
      buttonRef.current,
      {
        y: "100%",
        opacity: 0,
        duration: 1.5,
        ease: "Power3.easeOut",
      },
      "<"
    );

    // Role changing animation
    const roleChangeInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) =>
        prevIndex === roles.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(roleChangeInterval);
  }, []);

  return (
    <main className="container mx-auto max-w-screen-xl   md:flex justify-between items-center px-4 pb-20 mt-10" >
      <div>
        <h1
          ref={h11}
          className="text-3xl md:text-4xl lg:text-5xl text-white xl:text-6xl xl:leading-tight font-bold"
        >
          Hello,<br />I am <br />
        </h1>
        <h1
          ref={h12}
          className="text-3xl md:text-4xl lg:text-5xl  bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent xl:text-6xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={buttonRef}
          className="text-3xl md:text-4xl lg:text-5xl text-light-heading xl:text-6xl xl:leading-tight font-bold"
        >
          {roles[currentRoleIndex]}
        </h2>
        <div className="mt-5">
        <a
          href="/shinkhal_sinha_cv.pdf" 
          download="shinkhal_sinha_cv.pdf" 
         className="cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]">
          Resume

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5 animate-bounce"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            ></path>
          </svg>
          </a>
        </div>
      </div>
      <div className="mt-5 ">
        <img
          ref={myimageref}
          className="w-max md:w-2/3 xl:w-1/2 md:ml-auto"
          src={img}
          alt="shinkhal sinha"
          onError={(e) => (e.target.src = "path/to/fallback/image.jpg")}
        />
      </div>
    </main>
    
  );
}

export default Home;
