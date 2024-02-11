import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css"; // Import your custom CSS file
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";
import { FaCheckCircle } from "react-icons/fa"; // Import an icon library (Font Awesome)

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "0px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Car Rent Service</h2>
              <p className="section__description">
                At Dream car Motors, we are passionate about providing you with the ultimate car rental experience. Our mission is to empower you to explore the world at your own pace, with the freedom and flexibility you deserve.
              </p>

              <div className="about__section-item">
                <div className="section__description d-flex align-items-center gap-2">
                  <FaCheckCircle className="check-icon" /> Diverse Fleet of Vehicles to Suit Your Needs.
                </div>

                <div className="section__description d-flex align-items-center gap-2">
                  <FaCheckCircle className="check-icon" /> Top-Notch Customer Service and Support.
                </div>
              </div>

              <div className="about__section-item">
                <div className="section__description d-flex align-items-center gap-2">
                  <FaCheckCircle className="check-icon" /> Competitive Pricing Without Compromising Quality.
                </div>

                <div className="section__description d-flex align-items-center gap-2">
                  <FaCheckCircle className="check-icon" /> Easy-to-Use Online Booking System for Your Convenience.
                </div>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="Car Rental Image" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
