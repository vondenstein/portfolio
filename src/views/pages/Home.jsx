import React from "react";

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import NavBar from "components/NavBar.jsx";
import Footer from "components/Footer.jsx";
import {NavLink} from "react-router-dom";

class Home extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <NavBar />
        <main ref="main">
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-100">
              <div className="shape">
                <img
                  src={require('assets/img/theme/background.png')}
                  style={
                    {
                      'max-height': '100%',
                      'min-width': '100%'
                    }
                  }
                />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0 pt-xl">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Stephen Vondenstein.{" "}
                      </h1>
                      <h3 className='display-4 text-white'>
                        <span>Developer | Coffee Enthusiast</span>
                      </h3>
                      <p className="lead text-white">
                        Passionate about technology and design. Excited to contribute my skills and experience to innovative projects and collaborate with talented people solving difficult, interesting problems.
                      </p>
                      <div className="btn-wrapper">
                        <NavLink to='/projects'>
                          <Button
                            className="btn-icon mb-3 mb-sm-0"
                            color="protonmail"
                          >
                            <span className="btn-inner--icon mr-1">
                              <i className="fa fa-code" />
                            </span>
                            <span className="btn-inner--text">Explore Projects</span>
                          </Button>
                        </NavLink>
                        <NavLink to='/bio' >
                          <Button
                            className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                            color="default"
                            href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                          >
                            <span className="btn-inner--icon mr-1">
                              <i className="ni ni-badge" />
                            </span>
                            <span className="btn-inner--text">
                              Read Bio
                            </span>
                          </Button>
                        </NavLink>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-secondary"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
