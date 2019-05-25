import React from "react";

import {Button, Card, Container, Row, Col} from "reactstrap";

import NavBar from "components/NavBar.jsx";
import Footer from "components/Footer.jsx";
import {NavLink} from "react-router-dom";

class Bio extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <NavBar />
        <main className="profile-page" ref="main">
          <section className="section section-lg section-shaped my-0">
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
            <Container className="py-lg-md">
              <Card className="card-profile shadow mt-0">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                              alt="..."
                              className="rounded-circle"
                              src={require("assets/img/brand/profile.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                        className="order-lg-3 text-lg-right align-self-lg-center"
                        lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <NavLink to='/projects' >
                          <Button
                              className="mr-4"
                              color="protonmail"
                              size="sm"
                          >
                            Projects
                          </Button>
                        </NavLink>
                        <Button
                            className="float-right"
                            color="info"
                            size="sm"
                            href='#footer'
                        >
                          Contact
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <a href="https://mindcloud.dev/stephen">
                            <img
                                className="icon"
                                src={require('assets/img/icons/common/GitLab.png')} />
                          </a>
                        </div>
                        <div>
                          <span className="heading">17</span>
                          <span className="description">Projects</span>
                        </div>
                        <div>
                          <span className="heading">317</span>
                          <span className="description">Commits</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Stephen Vondenstein
                      <span className="font-weight-light">, 23</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Baton Rouge, Louisiana
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Computer Science - Software Engineering
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Louisiana State University
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <div className="h6 pb-2">
                          Hi! If you want to learn more about me, you came to the right place.
                        </div>
                        <p>
                          I'm a computer science student at Louisiana State University with a knack for software
                          development and design. My favorite projects are those that challenge me to build upon my
                          problem-solving skills while maintaining my chops as a developer. To that end, I worked as a
                          student programmer at LSU automating virtualization workflows and contributing to
                          cybersecurity research. I've also gained experience building and training complex neural
                          networks in and outside of the classroom.
                        </p>
                        <p>
                          I'm now looking for new opportunities to learn and
                          collaborate with other talented engineers. Other than creating new things with computers,
                          I most enjoy connecting with people who share my passion for engineering and clean design.
                          If that sounds like you, please reach out to me using the links above or below!
                        </p>
                        <p>
                          When I'm waiting for builds to compile, I like to pursue a few other hobbies - my favorite
                          being photography. If you'd like to check out my photos, you can find them{" "}
                          <a
                              className="text-info"
                              href="https://instagram.com/shvphoto"
                          >
                            here
                          </a>
                          . I hope to dedicate a page on this site to my photos soon.
                        </p>
                        <Row className="pt-4">
                          <Col>
                            <div className="h6">
                              Fluent Languages:
                            </div>
                            <p>
                              Python, Java, JavaScript, Bash, SQL, HTML + CSS
                            </p>
                          </Col>
                            <Col>
                              <div className="h6">
                                Frameworks:
                              </div>
                              <p>
                                TensorFlow, Keras, React.JS, Redux
                              </p>
                            </Col>
                          <Col>
                            <div className="h6">
                              Dev Tools:
                            </div>
                            <p>
                              VS Code, IntelliJ, Xcode, GitHub & GitLab, Travis CI, GitLab CI, Linux Terminal
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
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
        </main>
        <Footer />
      </>
    );
  }
}

export default Bio;
