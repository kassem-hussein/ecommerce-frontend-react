import React from 'react'
import './proccess.css'
import { Row,Col } from 'react-bootstrap';
const Process = (props) => {
  return (
      <div className='container'>
            <Row className='checkout-steps'>
                  <Col className={props.step1 ? 'active':''}>Sign-In</Col>
                  <Col className={props.step2 ? 'active':''}>Address</Col>
                  <Col className={props.step3 ? 'active':''}>Payment</Col>
                  <Col className={props.step4 ? 'active':''}>place order</Col>
            </Row>    
      </div>
  )
}

export default Process
