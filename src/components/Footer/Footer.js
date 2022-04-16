import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { StaticImage } from "gatsby-plugin-image"

import "./Footer.scss"

const Footer = () => {
  return (
    <main className="footer">
      <Row id="resource" className="footer__info"  data-aos="fade-right">
        <Col xs={6} sm={6} md={3} lg={6}>
          <StaticImage
            className="footer__logo"
            src="../../images/footer-logo.svg"
            alt="plats logo"
          />
          <Row className="justify-content-left">
            <Col xs={3} sm={2} md={3} lg={1}>
              <StaticImage src="../../images/facebook.svg" alt="facebook icon" />
            </Col>
            <Col xs={3} sm={2} md={3} lg={1}>
              <StaticImage src="../../images/twitter.svg" alt="twitter icon" />
            </Col>
            <Col xs={3} sm={2} md={3} lg={1}>
              <StaticImage src="../../images/linkedln.svg" alt="linkedln icon"/>
            </Col>
            <Col xs={3} sm={2} md={3} lg={1}>
              <StaticImage src="../../images/instagram.svg" alt="instagram icon" />
            </Col>
          </Row>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2}>
          <h2 className="footer__title">Quick Link</h2>
          <Row className="flex-column justify-content-center gy-lg-4 gy-md-4 gy-sm-3 gy-xs-3 mb-5">
            <Col className="footer__item">
              <p>Road map</p>
            </Col>
            <Col className="footer__item">
              <p>Privacy Policy</p>
            </Col>
            <Col className="footer__item">
              <p>Refund Policy</p>
            </Col>
            <Col className="footer__item">
              <p>Terms of Service</p>
            </Col>
            <Col className="footer__item">
              <p>Pricing</p>
            </Col>
          </Row>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2}>
          <h2 className="footer__title">Resources</h2>
          <Row className="flex-column justify-content-center gy-lg-4 gy-md-4 gy-sm-3 gy-xs-3 mb-5">
            <Col className="footer__item">
              <p>Home</p>
            </Col>
            <Col className="footer__item">
              <p>Page</p>
            </Col>
            <Col className="footer__item">
              <p>Portfolio</p>
            </Col>
            <Col className="footer__item">
              <p>Blog</p>
            </Col>
            <Col className="footer__item">
              <p>Contact</p>
            </Col>
          </Row>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2}>
          <h2 className="footer__title">Contact Us</h2>
          <Row className="flex-column justify-content-center gy-lg-4 gy-md-4 gy-sm-3 gy-xs-3 mb-5">
            <Col className="footer__item">
              <p>+809272561823</p>
            </Col>
            <Col className="footer__item">
              <p>info@gmail.com</p>
            </Col>
            <Col className="footer__item">
              <p>www.yourweb.com</p>
            </Col>
            <Col className="footer__item">
              <p>123 Stree New York City, </p>
            </Col>
            <Col className="footer__item">
              <p>United States Of America 750</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="footer__copyright">
        Copyright © 2022, Created by Plats Network
      </div>
    </main>
  )
}

export default Footer
