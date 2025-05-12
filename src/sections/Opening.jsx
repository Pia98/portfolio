import Typewriter from 'typewriter-effect';
import { heading_texts, intro_text } from '../constants/index.js';
import FancyButton from '../components/FancyButton.jsx';
import ThreeDExperience from '../components/threeDModels/ThreeDExperience.jsx';
import { useGSAP } from '@gsap/react';
import  gsap  from 'gsap';

const Opening = () => {
    useGSAP(() => {
        gsap.fromTo('.anim-text', 
            { opacity: 0, y: 50 }, 
            { opacity: 1,
                y: 0, 
                stagger: .2, 
                duration: .75,
                ease: 'power2.inOut'});
    });
    return (
        <section id="opening" className='relative overflow-hidden'>
            <div className='absolute top-0 left-0 z-10'>
                <img src='/images/bg.png' alt='Background'/>
            </div>
            <div className='header-layout'>
                {/* Left: text */}
                <header className='flex flex-col justify-center absolute xl:w-[50%] left-0 md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className='header-text'>
                            <Typewriter
                            options={{
                                strings: heading_texts,
                                autoStart: true,
                                loop: true,
                                cursor: '_',
                                deleteSpeed: 0,
                                delay: 40
                              }}/>
                        </div>
                        <p className='text-white md:text-xl relative z-10 pointer-events-none anim-text'>
                           {intro_text}
                        </p>
                        <FancyButton
                        className='md:w-80 md:h-16 w-60 h-12 anim-text'
                        id="button"
                        text='See more!'
                        targetId='education'/>	
                    </div>
                </header>
                {/* right: 3d model */} 
                <figure>
                    <div className='header-3d-layout'>
                        <ThreeDExperience/>
                    </div>
                </figure>
            </div>
        </section>
    );
};

export default Opening;