import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    gsap.from(".first-project-wrapper" ,
        {
            xPercent: -100,
            opacity: 0,
            transformOrigin: "left left",
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: "#showcase",
              start: "top 80%",
              toggleActions: "restart none none none",
            },
          });

          gsap.utils.toArray(".project").forEach((project, index) => {
            gsap.from(project, {
              xPercent: 100,
              opacity: 0,
              transformOrigin: "right right",
              duration: 1,
              ease: "power2.inOut",
              delay: 0.3 * (index + 1),
              scrollTrigger: {
                trigger: project,
                start: "top bottom-=200",
                toggleActions: "restart none none none",
              },
            });
          });
  }, []);

  return (
    <section ref={sectionRef} id="showcase" className="app-showcase">
      <div className="w-full">
        <div className="showcase-layout">
          {/* LEFT */}
          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              <img
                src="/projectImages/heroNet/opener.png"
                alt="First Project Hero.Net"
              />
            </div>
            <div className="text-content">
              <h2>Hero.Net: An interactive TV-Gameshow with Mixed Reality</h2>
              <p className="text-white md:text-xl">
                Hero.Net is an interactive TV game show, in which two teams are
                challenged to a quest for the core codes of the internet. By
                finding those, they rescue the internet from the antagonist. The
                contestants are sent to a virtual enviroment. In order to win,
                they must complete taskes and challenges, as well as escape the
                traps the antagonist has laid out for them.
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div ref={project2Ref} className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/projectImages/rarity/opener.png"
                  alt="Project: Rarity"
                />
              </div>
              <h2>Rarity: A website to showcase endangered species</h2>
            </div>
            <div ref={project3Ref} className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="/projectImages/vag/opener.png"
                  alt="Project: Rarity"
                />
              </div>
              <h2>The virtual art gallery</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
