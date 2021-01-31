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
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class TabsSection extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <h3 className="h4 text-success font-weight-bold mb-4">My Profile</h3>
        <Row className="justify-content-center">
          
          <Col className="mt-5 mt-lg-0" lg="12">
            {/* Menu */}
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                Professional and Education Summary
              </small>
            </div>
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    Profile Summary
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 2
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    Education
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 3
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    Awards
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                    <p className="description">
                    A result-oriented professional with over 3.5+ years’ experience in application testing , service delivery and client
                    relationship management in Retail and Healthcare domain, and interested to work on development side.<br></br>
                    • Created few portfolio projects for reference and show ability to work in development side<br></br>
                    • Strong knowledge on front end technologies React, Redux, Hooks, Javascript (ES6), CSS, SASS, bootstrap, material-ui<br></br>
                    • Expert in back end technologies like Node.js, Express.js, Mongodb, Mongoose<br></br>
                    • Working with <strong>Legato Health technologies</strong> for almost 1.7 year (12 th August 2019- till current)<br></br>
                    • Worked with <strong>Capgemini Technology and services</strong> for more than 2 years (19 th April 2017 – 9 th August 2019)<br></br>
                    • Insightful knowledge of TestComplete, UFT, Selenium, TestNG, Android, Java, Webbasics , Python and other
                    technologies<br></br>
                    • Professional MERN STACK developer with front end and back end development<br></br>

                    </p>
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse.
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs2">
                    <p className="description">
                    . Completed BTech (Electrical and electronics Engineering) in Jawaharlal Nehru technological university with aggregate of 69%<br></br>
                    . Intermediate in Sri gayatri junior college with aggregate of 77% <br></br>
                    . Xth standard in Sanjuan Vidya Nikethanwith Aggregate of 72%
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs3">
                    <p className="description">
                     . Received extra mile award for creating Android app from Capgemini<br></br>
                     . Received Star award for outstanding performance by Capgemini<br></br>
                     
                     </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default TabsSection;
