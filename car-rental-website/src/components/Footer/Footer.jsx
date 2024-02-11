import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  
  return (
    <footer className="footer">
      <Container><Row >
     
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
               
                  
                  <Link to="/home" className="d-flex align-items-center gap-2">
                  <i className="ri-car-line"></i>
                  <span>
                    Dream Car Motors
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Welcome to Dream Car Motors, your trusted partner for car rentals. We offer a wide range of high-quality vehicles to suit your every need, whether it's for a family trip or a business venture. Our mission is to provide you with the best car rental experience possible, ensuring comfort, safety, and affordability. Discover the world on wheels with Dream Car Motors.
            </p>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>


          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">123 Mainstreet ,Erode, TamilNadu</p>
              <p className="office__info">Phone: (123) 456 7890</p>

              <p className="office__info">Email: carrentalinfo@gmail.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>


          
              
          
               
            

          
          
          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
            <Col lg="6" md="6" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">ConnectWithUs</h5>
              {/* Add your social media icons and links here */}
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="ri-twitter-fill"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="ri-instagram-fill"></i>
                </a>
              </div>
              </div>
              </Col>

            </div>
          </Col>

          
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
