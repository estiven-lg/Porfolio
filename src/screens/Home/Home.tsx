

import profilePhoto from '../../assets/avatar.jpeg';
import Typewriter from "typewriter-effect";



function Home() {
  return (
    <section>
      <div className="flex sm:flex-row flex-col">
        <div className="w-full sm:w-2/3 flex flex-col justify-center items-start p-10 sm:p-20">
          <h1 className="text-lg md:text-4xl lg:text-5xl font-bold text-center text-gray-light">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1 className="text-lg md:text-4xl lg:text-5xl font-bold text-center text-gray-light">
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
        <div className="w-full sm:w-1/3 p-18">
          <img
            src={profilePhoto}
            alt="Estiven_LG"
            className="profile-photo"
          />
        </div>
      </div>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;