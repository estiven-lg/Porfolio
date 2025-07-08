

import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';
import profilePhoto from '../../assets/avatar.jpeg';
import Typewriter from "typewriter-effect";



function Home() {
  return (
    <section>
      <div className="flex justify-center items-center h-screen w-full px-10">
        <div className="flex sm:flex-row flex-col rounded-lg bg-secondary-white overflow-auto shadow-primary-lighter shadow-[0px_5px_10px_0_rgba(0,0,0,0.7)] hover:shadow-[0px_10px_20px_0_rgba(0,0,0,0.7)] transition-all duration-300 ease-in-out">
          <div className="w-full sm:w-1/3 bg-primary-dark shadow-[8px_0_5px_-1px_rgba(0,0,0,0.25)] ">
            <div className='p-5 sm:p-10'>
              <img
                src={profilePhoto}
                alt="Estiven_LG"
                className="profile-photo"
              />
            </div>
            <div className='bg-primary-white flex justify-around items-center p-2.5 sm:p-5'>

              <FaLinkedin title="LinkedIn" className='text-primary-light text-xl' />
              <FaTwitter title="Twitter" className='text-primary-light text-xl' />
              <FaGithub title="GitHub" className='text-primary-light text-xl' />
              <FaStackOverflow title="Stack Overflow" className='text-primary-light text-xl' />
            </div>
          </div>
          <div className="w-full sm:w-2/3 flex flex-col justify-center items-start p-10 sm:p-20">
            <h1 className="text-lg md:text-4xl lg:text-5xl font-bold text-center text-tertiary-dark">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="text-lg md:text-4xl lg:text-5xl font-bold text-center text-tertiary-dark">
              I'M
              <strong className="main-name"> Estiven Laferre</strong>
            </h1>
            <div className='text-primary-light text-lg md:text-2xl lg:text-3xl font-bold text-center mt-4'>
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Mobile App Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,

                }}
              />
            </div>
          </div>

        </div>
      </div>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;