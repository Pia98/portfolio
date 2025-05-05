import React from 'react';
import Typewriter from 'typewriter-effect';
import { heading_texts } from '../constants/index.js';
import FancyButton from '../components/FancyButton.jsx';
import ThreeDExperience from '../components/threeDModels/ThreeDExperience.jsx';

const Opening = () => {
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
                        <p className='text-white md:text-xl relative z-10 pointer-events-none'>
                            I am a frontend web developer based in Augsburg, Germany.
                            I am always eager to learn new technologies and improve my skills.
                            I am looking for a team where I can contribute my knowledge and grow as a developer.
                        </p>
                        <FancyButton
                        className='md:w-80 md:h-16 w-60 h-12'
                        id="button"
                        text='Let’s connect!'
                        onClick={() => window.open('mailto:pia.probst@online.de')}/>	
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