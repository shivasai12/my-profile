/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

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

                <span className="nav-link-inner--text">Shiva Sai Gujjari</span>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Projects</span>
                    </DropdownToggle>

                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                      <Media
                          className="d-flex align-items-center"
                          href="https://shiva-clothing-live.herokuapp.com/"
                          target="_blank"
                        >
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Shiva Clothing
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Clothing app is created using React, Redux and Firebase
                              Guided by Andrei and completely developed from scratch
                              with add to cart, checkout and payments with stripe payments
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="https://shivasai12.github.io/monsters-rolodex/"
                          target="_blank"
                        >
                          
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Monster Rolodex
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Basic React app with search facilities and completely
                              developed from scratch using technologies like HTML,
                              CSS, React, Javascript
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="https://shivasai12.github.io/conFusion"
                          target="_blank"
                        >

                        <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Restaurant conFusion
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Full fledged restaurant application with feautures 
                              dish select, reserve table, dish details and contact
                              forms. Completely developed using technologies like
                              React, Javascript, Node.js and Mongo DB
                            </p>
                          </Media>
                          </Media>
                        
                        
                        
                      </div>
                    </DropdownMenu> 
                    
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Links</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      
                      <DropdownItem to="/profile-page" tag={Link}>
                        Profile
                      </DropdownItem>
                      
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/shivasaigujjari"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Visit my Facebook profile
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.linkedin.com/in/shiva-sai-gujjari-897837115/"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        LinkedIn
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Visit my LinkedIn profile
                    </UncontrolledTooltip>
                  </NavItem>
                  
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/shivasai12"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Visit me on Github
                    </UncontrolledTooltip>
                  </NavItem>
                  
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
