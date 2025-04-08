import React,{useState,useEffect} from 'react'
import { Alert, Button } from 'react-bootstrap'
import { addToCart, removefromCart,decrementQuantity } from '../../redux/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import Helmet from './../../Helmet';
import './Cart.css'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate  =useNavigate()
  const cartItem  =useSelector((state)=>state.cart)
  const [subtotal,setSubtotal] =useState(0)
  const [tax,setTax] =useState(0)
  const [total,setTotal] =useState(0)
  const dispatch = useDispatch()
  const items =cartItem.length
  let removeItem =(p)=>{
      dispatch(removefromCart(p))
      
  }
  let addQuantity =(p)=>{
      if(p.inStock < p.quantity){
            
      }else{

            dispatch(addToCart(p))
      }
      
      
  }
  let decrement =(p)=>{
      if( p.quantity>1){
            dispatch(decrementQuantity(p))
      }else{
            removeItem(p)
      }

  }
  useEffect(()=>{
      setSubtotal(cartItem.reduce((t,current)=>{
            return t+(current.price *current.quantity)
         },0))
      let tax =subtotal*(0.02).toFixed(2);
      setTax(tax.toFixed(2))
      setTotal((subtotal+tax).toFixed(2))
  },[cartItem,subtotal])
  
  return (
      <div className='mt-5' style={{minHeight:'40vh'}}>
            <Helmet title="Shopping cart">     
                  {
                        cartItem.length === 0?
                        <div className='d-flex justify-content-center N-Cart'>
                              <Alert className='w-75 text-center align-self-center' variant='warning'>No Item</Alert>
                        </div>:
                  <div className='cart-wapper'>
                        <section className='cart-items'>
                              {
                                    cartItem.map((item,key)=>{

                                          return(
                                                <div key={key} className='item-hr'>
                                                      <div  className='item'>
                                                            <div className='M-item-div'>
                                                                  <h6 className='M-item-name'>{item.productName}</h6>
                                                                  <img className='item-img' src={item.imgUrl} alt=""/> 
                                                            </div>
                                                            <div className='item-info'>
                                                                        <h6 className='item-name'>{item.productName}</h6>
                                                                        <p  className='item-desc'>{item.shortDesc}</p>
                                                            </div>
                                                            <div className='item-quantity'>
                                                                        <span>Quantity</span>
                                                                        <div className='item-counter'> 
                                                                              <span className='item-count-dec'onClick={()=>decrement(item)}>-</span>
                                                                              <span className='item-count-number'>{item.quantity}</span>
                                                                              <span className='item-count-inc' onClick={()=>addQuantity(item)}>+</span>
                                                                        </div>   
                                                            </div>
                                                            <div className='item-price'>
                                                                        ${item.price}
                                                            </div>

                                                            <div className='delete-item'>
                                                                  <i className="ri-close-line" onClick={()=>removeItem(item)}></i>
                                                            </div>
                                                            <hr/>  
                                                      </div>
                                                      <hr/>
                                                </div>

                                          )
                                    })
                              }
                        </section>

                        <section className='cart-summary'>
                              <h3 className='mt-4'>Summary</h3>
                              <div className='d-flex justify-content-between'>
                                    <h6>Subtotal ({items} items)</h6>
                                    <span className='me-5'>${subtotal}</span>
                              </div>
                              <hr/>
                              <div className='d-flex justify-content-between'>
                                    <h6>Tax</h6>
                                    <span className='me-5'>${tax}</span>
                              </div>
                              <hr/>
                              <div className='d-flex justify-content-between'>
                                    <h6>Total</h6>
                                    <span className='me-5'>${total}</span>
                              </div>
                              <Button className='w-100 p-2 mt-3' onClick={()=>navigate("/payment")}>Checkout</Button> 
                                    
                        </section>    
                  </div>
                  }
            </Helmet>
            
      </div>
  )
}

export default Cart
