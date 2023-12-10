import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../css/inicio/Svg-loading.css";

function LoadingPage() {
  useEffect(() => {
    const progressInner = document.getElementById("progress-inner");

    gsap.to(progressInner, {
      width: "100%",
      duration: 3.5,
      ease: "power1.inOut",
      onComplete: function () {
        window.location.href = "index.html";
      },
    });

    gsap.from("#title", { opacity: 0, duration: 1, y: -50 });
  }, []);

  const svgRef = useRef();

  useEffect(() => {
    svgRef.current.classList.add("active");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <svg
        ref={svgRef}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 600 600"
      >
        <path
          id="follower"
          fill="none"
          stroke="none"
          strokeWidth="3"
          d="M52.3,32.7H31.5l-3.8,5.7l-4-5.7H3c-1.7,0-3-1.4-3-3V3c0-1.6,1.4-3,3-3h49.3
        c1.6,0,3,1.4,3,3v26.7C55.3,31.3,54,32.7,52.3,32.7z"
        />
        <path
          id="circ"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="
        M300,220c44.2,0,80,35.8,80,80s-35.8,80-80,80s-80-35.8-80-80S255.8,220,300,220"
        />
        <path
          id="straight"
          fill="none"
          stroke="none"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="
        M49,300h502"
        />
        <path
          id="straightProgress"
          fill="none"
          stroke="#3BCE76"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="
        M49,300h502"
        />
        <path
          id="halfway"
          fill="none"
          stroke="none"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="
        M117,220c117,160,268,160,347,0"
        />
        <path
          id="arrow"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="
        M332.5,309.3L300,341.7l-32.5-32.5 M300,258.3v83"
        />
        <path
          id="pencil"
          fill="none"
          stroke="none"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="
        M308,321.3l-8,20.5l-8-20.5 M308,238.3v83h-16v-83H308z"
        />
        <path
          id="tick"
          fill="none"
          stroke="none"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="
        M264.1,311.3l34,28.2L344,272"
        />
      </svg>
      <h1 className="m-5 text-4xl text-center text-white" id="title">
        TimeIT
      </h1>
      <div className="flex justify-center"></div>
      <div className="bar m-5">
        <div id="progress-bar" className="rounded-full ">
          <div id="progress-inner" className="rounded-full "></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
