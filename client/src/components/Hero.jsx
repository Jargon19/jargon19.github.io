import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { bwmap, worldmap, ucf } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap || "/placeholder.svg"}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap || "/placeholder.svg"}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div className="relative z-10">
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                Sean
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              Computer Science student at the University of Central Florida.
            </p>
            
            {/* Social links container with improved clickable area */}
            <div className="flex flex-row items-center mt-6 space-x-4 flex-wrap">
              {/* LinkedIn button with improved clickable area */}
              <div className="relative inline-block mb-2">
                <a 
                  href="https://linkedin.com/in/roman-di-cesare-994641309" 
                  className="inline-block w-full h-full px-4 py-2 text-lg font-bold text-battleGray border-2 border-battleGray rounded-md 
                            hover:bg-battleGray hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  LinkedIn
                </a>
              </div>
              
              {/* GitHub button with improved clickable area */}
              <div className="relative inline-block mb-2">
                <a 
                  href="https://github.com/romandicesarefernandes" 
                  className="inline-block w-full h-full px-4 py-2 text-lg font-bold text-battleGray border-2 border-battleGray rounded-md 
                            hover:bg-battleGray hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              </div>
              
              {/* Resume button with improved clickable area */}
              <div className="relative inline-block mb-2">
                <a 
                  href="https://www.dropbox.com/scl/fi/g1auwg8xlu7mgbjj3dgyt/Resume.pdf?rlkey=pjtc8iwb7d2lmmhp1fx49e43s&st=tqrznsdq&dl=0" 
                  className="inline-block w-full h-full px-4 py-2 text-lg font-bold text-battleGray border-2 border-battleGray rounded-md 
                            hover:bg-battleGray hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-7 ml-[45vw] 
            lg:ml-[68vw] md:ml-[45vw] xmd:ml-[45vw] 2xl:ml-[66vw]
            sm:h-[0vh] md:h-[32vh] xl:h-[35vh] hidden md:block"
            src={ucf}
            alt="ucf"
          />
          </div>
      </section>
    </>
  );
};

export default Hero;
