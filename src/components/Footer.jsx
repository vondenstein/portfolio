import React from "react";

import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
        <>
          <footer className=" footer" id='footer'>
            <Container>
              <Row className=" row-grid align-items-center mb-5">
                <Col lg="6">
                  <h3 className=" font-weight-normal mb-2">
                    Let's connect.
                  </h3>
                  <h4 className=" mb-0 font-weight-light">
                    Want to see more of my work? Just want to chat? Reach out to me on one of these platforms!
                  </h4>
                </Col>
                <Col className=" text-lg-center btn-wrapper" lg="6">
                  <Button
                      className=" btn-neutral btn-icon-only btn-round"
                      color="github"
                      href="mailto: stephen@vondenstein.com"
                      id="tooltip126536702"
                      size="lg"
                      target="_blank"
                  >
                    <i className=" fa fa-envelope" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip126536702">
                    Email
                  </UncontrolledTooltip>
                  <Button
                      className=" btn-neutral btn-icon-only btn-round ml-1"
                      color="linkedin"
                      href="https://www.linkedin.com/in/stephen-vondenstein/"
                      id="tooltip383967593"
                      size="lg"
                      target="_blank"
                  >
                    <i className=" fa fa-linkedin" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip383967593">
                    LinkedIn
                  </UncontrolledTooltip>
                  <Button
                      className=" btn-neutral btn-icon-only btn-round ml-1"
                      color="gitlab"
                      href="https://mindcloud.dev/stephen"
                      id="tooltip626177562"
                      size="lg"
                      target="_blank"
                  >
                    <i className=" fa fa-gitlab" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip626177562">
                    GitLab
                  </UncontrolledTooltip>
                  <Button
                      className=" btn-neutral btn-icon-only btn-round ml-1"
                      color="instagram"
                      href="https://www.instagram.com/shvphoto/"
                      id="tooltip568564532"
                      size="lg"
                      target="_blank"
                  >
                    <i className=" fa fa-instagram" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip568564532">
                    Instagram
                  </UncontrolledTooltip>
                </Col>
              </Row>
              <hr />
              <Row className=' align-items-center justify-content-md-between'>
                <Col md='6'>
                  <div className=' copyright'>
                    © {new Date().getFullYear()}{" "} Stephen Vondenstein.
                  </div>
                </Col>
                <Col md='6'>
                  <Nav className=' nav-footer justify-content-end'>
                    <NavItem>
                      <NavLink
                          href='https://mindcloud.dev/stephen/portfolio'
                          target='_blank'
                      >
                        Source Code
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                          href='https://mindcloud.dev/stephen/portfolio/blob/master/LICENSE'
                          target='_blank'
                      >
                        License
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
            </Container>
          </footer>
        </>
    );
  }
}
export default Footer;
