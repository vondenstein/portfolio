import React from "react";

import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

import NavBar from "components/NavBar.jsx";
import Footer from "components/Footer.jsx";

class Projects extends React.Component {
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
              <section className="section section-lg section-shaped pb-250">
                <div className="shape">
                  <img
                      src={require('assets/img/theme/background.png')}
                      alt="..."
                      style={
                        {
                          'max-height': '100%',
                          'min-width': '100%'
                        }
                      }
                  />
                </div>
                <Container className="py-lg-md d-flex">
                  <div className="col px-0">
                    <Row>
                      <Col lg="6">
                        <h1 className="display-3 text-white">
                          Elegant Solutions{" "}
                          <span>to complex problems</span>
                        </h1>
                        <p className="lead text-white">
                          These are what keep me up at night - challenging projects that help me grow as a developer
                          and problem-solver. Below are some that I found interesting and wanted to share.
                        </p>
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
                        className="fill-white"
                        points="2560 0 2560 100 0 100"
                    />
                  </svg>
                </div>
              </section>
            </div>
            <section className="section section-lg pt-lg-0 mt--200">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <Row className="row-grid">
                      <Col lg="4">
                        <Card className="shadow border-0">
                          <CardBody className="py-5">
                            <img
                                className='icon rounded-circle mb-4'
                                alt="..."
                                src={require('assets/img/icons/projects/GitBlast.png')}
                            />
                            <h6 className="text-gitblast text-uppercase">
                              GitBlast
                            </h6>
                            <p className="description mt-3">
                              Mobile GitLab client in React Native. A streamlined experience designed for ease of use on iOS and Android.
                            </p>
                            <div>
                              <Badge color="gitblast" pill className="mr-1">
                                JavaScript
                              </Badge>
                              <Badge color="gitblast" pill className="mr-1">
                                React Native
                              </Badge>
                            </div>
                            <Button
                                className="mt-4"
                                color="gitblast"
                                href="https://gitblast.com"
                            >
                              Download
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="shadow border-0">
                          <CardBody className="py-5">
                              <img
                                  className='icon rounded-circle mb-4'
                                  alt="..."
                                  src={require('assets/img/icons/projects/Ionic.png')}
                              />
                            <h6 className="text-ionic text-uppercase">
                              Ionic
                            </h6>
                            <p className="description mt-3">
                              Analyzes subsurface images using a Convolutional Neural Network to detect salt deposits.
                            </p>
                            <div>
                              <Badge color="ionic" pill className="mr-1">
                                Python
                              </Badge>
                              <Badge color="ionic" pill className="mr-1">
                                TensorFlow
                              </Badge>
                            </div>
                            <Button
                                className="mt-4"
                                color="ionic"
                                href="https://mindcloud.dev/neurology/ionic/blob/master/README.md"
                            >
                              Learn more
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="shadow border-0">
                          <CardBody className="py-5">
                            <img
                                className='icon rounded-circle mb-4'
                                alt="..."
                                src={require('assets/img/icons/projects/Tectonix.png')}
                            />
                            <h6 className="text-tectonix text-uppercase">
                              Tectonix
                            </h6>
                            <p className="description mt-3">
                              Predicts time-to-failure in tectonic systems by processing acoustic data from seismic sensors.
                            </p>
                            <div>
                              <Badge color="tectonix" pill className="mr-1">
                                Python
                              </Badge>
                              <Badge color="tectonix" pill className="mr-1">
                                TensorFlow
                              </Badge>
                            </div>
                            <Button
                                className="mt-4"
                                color="tectonix"
                                href="https://mindcloud.dev/neurology/tectonix/blob/master/README.md"
                            >
                              Learn more
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
            <section className="section section-lg pt-lg-0 mt-100">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <Row className="row-grid">
                    <Col lg="4">
                        <Card className="shadow border-0">
                          <CardBody className="py-5">
                            <img
                                className='icon rounded-circle mb-4'
                                alt="..."
                                src={require('assets/img/icons/projects/Schematic.png')}
                            />
                            <h6 className="text-schematic text-uppercase">
                              Schematic
                            </h6>
                            <p className="description mt-3">
                              An interpreter for MIT Scheme48. Covers most Scheme functions, including built-in functions.
                            </p>
                            <div>
                              <Badge color="schematic" pill className="mr-1">
                                Java
                              </Badge>
                              <Badge color="schematic" pill className="mr-1">
                                Scheme48
                              </Badge>
                            </div>
                            <Button
                                className="mt-4"
                                color="schematic"
                                href="https://mindcloud.dev/stephen/schematik/tags"
                            >
                              Try It
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="shadow border-0">
                          <CardBody className="py-5">
                            <img
                                className='icon rounded-circle mb-4'
                                alt="..."
                                src={require('assets/img/icons/projects/ProtonMail.png')}
                            />
                            <h6 className="text-protonmail text-uppercase">
                              ProtonMail Themes
                            </h6>
                            <p className="description mt-3">
                              A collection of themes for the ProtonMail web client.
                              Designed to fit in alongside services you already use.
                            </p>
                            <div>
                              <Badge color="protonmail" pill className="mr-1">
                                CSS
                              </Badge>
                            </div>
                            <Button
                                className="mt-4"
                                color="protonmail"
                                href="https://mindcloud.dev/stephen/pmthemes"
                            >
                              Get Themes
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="shadow border-0">
                          <CardBody className="py-5">
                            <img
                                className='icon rounded-circle mb-4'
                                alt="..."
                                src={require('assets/img/icons/projects/Bogie.png')}
                            />
                            <h6 className="text-bogie text-uppercase">
                              Bogie
                            </h6>
                            <p className="description mt-3">
                              Minimalist landing page in React. Displays a simple title
                              and animated social media links.
                            </p>
                            <div>
                              <Badge color="bogie" pill className="mr-1">
                                JavaScript
                              </Badge>
                              <Badge color="bogie" pill className="mr-1">
                                React.JS
                              </Badge>
                            </div>
                            <Button
                                className="mt-4"
                                color="bogie"
                                href="https://mindcloud.dev/stephen/bogie"
                            >
                              Fork It
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
            <section className="section section-lg pt-0">
              <Container>
                <Card className="bg-gradient-warning shadow-lg border-0">
                  <div className="p-5">
                    <Row className="align-items-center">
                      <Col lg="8">
                        <h3 className="text-white">
                          Wait, there's more!
                        </h3>
                        <p className="lead text-white mt-3">
                          The projects shown above are some of my favorite that I've worked on, but I'm always cooking
                          up new ideas.
                          If you'd like to see what else I've been up to, click here.
                        </p>
                      </Col>
                      <Col className="ml-lg-auto" lg="3">
                        <Button
                            block
                            className="btn-white"
                            color="default"
                            href="https://mindcloud.dev/stephen"
                            size="lg"
                        >
                          See More
                        </Button>
                      </Col>
                    </Row>
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
export default Projects;