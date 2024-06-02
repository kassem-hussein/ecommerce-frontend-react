import React,{useEffect} from 'react'
import Helmet from '../../Helmet'
import { Steps } from '../../Components'
import './placeorder.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
const PlaceOrder = () => {
  const {cart,user} =useSelector(state=>state)
  const cartItem =cart
  const itemPrice =cartItem.reduce((a,p)=>{
      return a+(p.price * p.quantity)
  },0)
  const navigate =useNavigate()
  const tax =(itemPrice*(20/100)).toFixed(2)
  const total =(Number(itemPrice) + Number(tax)).toFixed(2)
  const address =`${user?.address?.country},${user?.address?.city},${user?.address?.street},${user?.address?.zip} `
  useEffect(()=>{
    if(Object.keys(user).length ===0){
      navigate('/login')
    }else if(Object.keys(user.address).length ===0){
      navigate('/address')
    }else if(user.paymentMethod){
      navigate('/place-order')
    }
  },[user,navigate])
  return (
    <div className='container mt-5'>
      <Helmet title='place order'>
            <Steps step1 step2 step3 step4/>
            <div className='myWapper d-flex justify-content-between flex-wrap'>
                <div className='mt-5'>
                      <h4>Preview order</h4>
                      <div className='card'>
                        <h4>Shopping</h4>
                        <div className='d-flex align-items-baseline'>
                            <h6>Adress :</h6>
                            <address>{address}</address>
                        </div>
                        <Link to={'/address'}>Edit</Link>
                      </div>
                      <div className='card'>
                      <h4>payment</h4>
                        <h6>Method : <span>{user?.paymentMethod}</span></h6>
                        <Link to={'/payment'}>Edit</Link>
                      </div>
                      <div className='card'>
                        <h4>Items</h4>
                        <div className='cart-items'>
                          {
                            cartItem.map((item,key)=>{
                              return (

                                    <div key={key} className='card-item d-flex justify-content-evenly align-items-center'>
                                        <img style={{width:'100px',height:'100px'}} src={item.imgUrl} alt=""/>
                                        <span>Quantity :{item.quantity}</span>
                                        <span>${item.price}</span>
                                    </div>

                              )
                            })
                          }
                          <div>

                          </div>
                        </div>
                        <Link to={'/cart'}>Edit</Link>
                      </div>
                      

                      
                </div>
                
                <div className='summary' style={{marginTop:'80px'}}>
                          <h4>Order summary</h4>
                          <div className='d-flex justify-content-between align-items-center'>
                            <h5>items ({cartItem.length})</h5>
                            <h5>${itemPrice}</h5>
                          </div>
                          <hr/>
                          <div className='d-flex justify-content-between align-items-center'>
                            <h5>Shpping</h5>
                            <h5>$0.00</h5>
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
                          <hr/>
                          <Button style={{width:'100%',backgroundColor:'var(--orange)',border:'none'}}>Place Order</Button>
                </div>
            </div>
      </Helmet>
    </div>
  )
}

export default PlaceOrder
