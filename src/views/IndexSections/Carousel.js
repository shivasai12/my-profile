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

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/1.png"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/2.png"),
    altText: "",
    caption: "",
    header: ""
  }
];

const items1 = [
  {
    src: require("assets/img/theme/3.png"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/4.png"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Crown Clothing
                </h1>
                <p className="lead text-white mt-4">
                  Complete clothing app with features like
                  browse by category, Add to Cart, Checkout,
                  Payment with stripe payment and much more.
                  This is developed by modern technologies
                  using React, Redux, Javascript, Html, SCss
                  and Firebase Firestore
                </p>
                
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>

        <section className="section section-shaped">
          <div className="shape shape-style-2 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-black font-weight-light">
                  Monster Rolodex
                </h1>
                <p className="lead tex-black mt-4">
                <strong>
                  Complete clothing app with features like
                  browse by category, Add to Cart, Checkout,
                  Payment with stripe payment and much more.
                  This is developed by modern technologies
                  using React, Redux, Javascript, Html, SCss
                  and Firebase Firestore
                  </strong>
                </p>
                
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items1} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>

        <section className="section section-shaped">
        <div className="shape shape-style-4 shape-default">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="py-md">
          <Row className="justify-content-between align-items-center">
            <Col className="mb-12 mb-lg-0" lg="12">
              <h1 className="text-white font-weight-light">
                QA Projects
              </h1>

              <p className="lead text-white mt-4">
              
              <h2 className="text-white">NYAPCD</h2>
               NYAPCD (United States)

              Involved in testing the new files which have to be sent to New York from Dental Systems Automation and Manual
              
              Project Description: NYAPCD: End to End testing of files that have to be sent to New York and received
              by New York from decare dental systems and validated the files using the companion
              guide provided in process of dental Claims and Enrolments
              

              <h2 className="text-white">  DPA application</h2>
              
              Worked as Automation tester created regression scripts by understanding requirements, created end to end
              Automation scripts with frameworks like cucumber and Testng, and raised severe defects. Always ensured 
              zero defect Lekage
              
              <h2 className="text-white">McDonalds</h2>
              
              GMA(Global Mobile Application) - End to End application that will used in McDonalds
              restaurant that used to take orders and tender the orders to customer. System has capable
              of generating different reports at individual Restaurant level and corporation level. Mobile
              application for placing orders. Web applications for publishing offers to end users.
              
                
              </p>
              
            </Col>
            
          </Row>
        </Container>
       
      </section>
      </>
    );
  }
}

export default Carousel;
