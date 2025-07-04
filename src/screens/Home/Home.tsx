
import Type from "./Type";
import profilePhoto from '../../assets/avatar.jpeg';


function Home() {
  return (
    <section>
      <div className="home-section" id="home">


        <h1 className="heading">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <h1 className="heading-name p-">
          I'M
          <strong className="main-name"> Estiven Laferre</strong>
        </h1>

        <div style={{ padding: 50, textAlign: "left" }}>
          <Type />
        </div>




        <div className="profile-photo-container p-5">
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
