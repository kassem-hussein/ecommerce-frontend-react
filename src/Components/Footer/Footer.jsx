import React from 'react'
import './Footer.css'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col lg={3} md={4} sm={6}>
            <Link className='footer-link footer-brand'><span style={{color:`var(--orange)`}}>e</span>Shop</Link>
            <p className='footer-brand-desc'>E-commerce website</p>
        </Col>
        <Col lg={3} md={4} sm={3} className='d-flex flex-column'>
          <div className='quick-link-title'>Quick Link</div>
          <Link to={"/"} className='footer-link'>Home</Link>
          <Link to={"/shop"} className='footer-link'>Shop</Link>
          <Link to={"/about"} className='footer-link'>About</Link>
          <Link to={"/contact"} className='footer-link'>Contact-us</Link>
        </Col>

        <Col  lg={3} md={4} sm={3} className='d-flex flex-column  mb-5 mb-lg-0'>
          <div className='quick-link-title'></div>
          <Link to={"/cart"}  className='footer-link'>your cart</Link>
          <Link to={"/heart"} className='footer-link'>Loved products</Link>
        </Col>

        <Col  lg={3} md={12} sm={12} className='d-flex flex-column'>
          <div className='quick-link-title'>Socail Media</div>
          <div className='d-flex'>
            <Link to={"https://www.facebook.com"} target='_blank' className='footer-link footer-icon'><i className="ri-facebook-circle-fill"></i></Link>
            <Link to={"https://www.instagram.com"} target='_blank' className='footer-link footer-icon'><i className="ri-instagram-fill"></i></Link>
            <Link to={"https://www.linkedin.com"} target='_blank'className='footer-link footer-icon'><i className="ri-linkedin-box-fill"></i></Link>
            <Link to={"https://www.whatsapp.com"} target='_blank'className='footer-link footer-icon'><i className="ri-whatsapp-fill"></i></Link>
          </div>
          
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='footer-copyright'>
            &#169; Copyright.All rights resaved for eshop.
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
