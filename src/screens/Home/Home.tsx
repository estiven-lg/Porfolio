import {  Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";
import profilePhoto from '../../assets/avatar.jpeg';


function Home() {
  return (
    <section>
      <div className="home-section" id="home">
  
          <Row>
            <Col md={7} className="home-header">
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
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>

              <div className="profile-photo-container p-5">
                <img
                  src={profilePhoto}
                  alt="Estiven_LG"
                  className="profile-photo"
                />
              </div>
            </Col>
          </Row>
   
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
