import React,{useEffect, useState} from 'react'
import Helmet from '../../Helmet'
import './placeorder.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Checkout from '../payment/Checkout'
import { Col, Row } from 'react-bootstrap'
const PlaceOrder = () => {
  const {cart,user} =useSelector(state=>state)
  const [shipping,setShipping] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardHolder: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const cartItem =cart
  const itemPrice =cartItem.reduce((a,p)=>{
      return a+(p.price * p.quantity)
  },0)
  const navigate =useNavigate()
  const tax =(itemPrice*(20/100)).toFixed(2)
  const total =(Number(itemPrice) + Number(tax) + Number(shipping)).toFixed(2)
  useEffect(()=>{
    if(!user.isLogin){
      navigate('/login')
    }
    if(cart.length === 0){
      navigate('/shop')
    }
  },[user,cart,navigate])

  const handleSubmit =  (e)=>{
    e.preventDefault();
    alert("order submiting");
  }
  return (
    <div className='container mt-5'>
      <Helmet title='checkout'>
          <form onSubmit={handleSubmit}>
              <Row>
                  <Col className="col-12 col-md-8">
                    <Checkout userData={userData} shipping={shipping} setShipping={setShipping} cartItems={cartItem} setUserData={setUserData}/>
                  </Col>
                  <Col className='col-12 col-md-4'>
                      <div className='summary' style={{marginTop:'80px'}}>
                                <h4>Order summary</h4>
                                <div className='d-flex justify-content-between align-items-center'>
                                  <h5>items ({cartItem.length})</h5>
                                  <h5>${itemPrice}</h5>
                                </div>
                                <hr/>
                                <div className='d-flex justify-content-between align-items-center'>
                                  <h5>Shpping</h5>
                                  <h5>${shipping.toFixed(2)}</h5>
                                </div>
                                <hr/>
                                <div className='d-flex justify-content-between align-items-center'>
                                  <h5>Tax</h5>
                                  <h5>${tax}</h5>
                                </div>
                                <hr/>
                                <div className='d-flex justify-content-between align-items-center'>
                                  <h5>Total</h5>
                                  <h5>${total}</h5>
                                </div>
                      </div>
                  </Col>
              </Row>
          </form>
      </Helmet>
    </div>
  )
}

export default PlaceOrder
