import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Landing.css";

gsap.registerPlugin(ScrollTrigger);

const Landing = ({ children }: any) => {
  useEffect(() => {
    gsap.to(".character-model", {
      scrollTrigger: {
        trigger: ".landing-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: 100,
      opacity: 0.5,
      scale: 0.9,
    });
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-header">
            <h2>Hello! I'm</h2>
            <h1>VIVEK RAJ</h1>
            <div className="landing-sub">
              <h3>An SEO</h3>
              <h2 className="landing-info-h2">
                Professional<span> / </span>Analyst
              </h2>
            </div>
          </div>
        </div>
        <div className="landing-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-loop-render-32616-large.mp4"
          ></video>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
