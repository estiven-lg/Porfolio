import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import profilePhoto from '../../assets/avatar.jpeg';


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content pt-32">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, zIndex: 99 }} className="heading">
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
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
