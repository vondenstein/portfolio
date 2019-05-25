import React from "react";
import { Link } from "react-router-dom";

import {
  NavbarBrand,
  Navbar,
  Container
} from "reactstrap";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/logo.png")}
                />
              </NavbarBrand>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default NavBar;
