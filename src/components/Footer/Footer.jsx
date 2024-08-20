import React from "react";
import { Col, Container, Row, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer_logo text-start">
              <img src={logo} alt="" />
              <h5>Take Food</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                tempore officia perferendis enim.
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Delivery Time</h5>
            <ListGroup className="deliver_time-list">
              <ListGroupItem className=" delivery_time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery_time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off Day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
          <h5 className="footer_title">Contact</h5>
          
            <ListGroup className="deliver_time-list">
            <ListGroupItem className=" delivery_time-item border-0 ps-0">
                <span>Location: SS,Road,Sirajganj-6700,Bangladesh</span>
                
              </ListGroupItem>
              <ListGroupItem className=" delivery_time-item border-0 ps-0">
                <span>Phone: +880-186289830</span>
                
              </ListGroupItem>
              <ListGroupItem className=" delivery_time-item border-0 ps-0">
                <span>Email: abdullahnur0000@gmail.com</span>
                
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
          <h5 className="footer_title">NewsLatter</h5>
          <p>Subscribe our newslatter</p>
         <div className="newslatter">
         <input type="email"placeholder="Enter your email"/>
          <span>
          <i class="ri-send-plane-line"></i>
          </span>
         </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg='6'md='6'>
          <p className="copyright_text">Cpyright -2024, website made by Abd Ibrahim Nur. All rights reserved</p>
          </Col>
          <Col lg='6'md='6'>
          <div className="social_links d-flex align-items-center gap-4 justify-content-end">
            <p className="m-0">Followed: </p>
            <span><Link to='https://www.facebook.com/nur.messi.96?mibextid=LQQJ4d'>
            <i class="ri-facebook-line"></i>
            </Link>
            </span>
            <span>
              <Link to='https://www.facebook.com/nur.messi.96'>
              <i class="ri-instagram-line"></i>
              </Link>
            </span>
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
