import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { CardInput, Steps } from '../../Components'
import Helmet from '../../Helmet'
import './payment.css'
import { Button } from 'react-bootstrap'
import { addInfo } from '../../redux/userSilce'
const Payment = () => {
  const user =useSelector(state=>state.user)
  const [payment,setPayment] =useState("cash") 
  const dispatch =useDispatch()
  const navigate =useNavigate()
  
  const savePaymentMethod =()=>{
      if(!payment){
          alert('please choose payment method')
          return
      }
      dispatch(addInfo({...user,paymentMethod:payment}))
      navigate('/place-order')
  }
  
  useEffect(()=>{

      if(Object.keys(user).length ===0){
            navigate('/login')
        }else if(Object.keys(user.address).length ===0){
          navigate('/address')
        }


  },[user,navigate,payment])
  return (
    <div className='container mt-5' style={{minHeight:'40vh'}}>
            <Helmet title="payment">

              <Steps step1 step2 step3/>
              <h3 className='text-center mt-5'>Payment Method</h3>
              <div className='payment-method'>
                <div>
                    <input type="radio" id='paypal' name="payment-method" onChange={v=>setPayment('Cash')}  className='me-1'/>
                    <label forhtml="paypal" className='me-1'>Cash</label>
                </div>
                <div>
                    <input type="radio" id='e-payment' name="payment-method" onChange={v=>setPayment('E-payment')} className='me-1'/>
                    <label forhtml="e-payment" className='me-1'>payment</label>  
                    {
                      payment === 'E-payment'?<div>
                        <CardInput/>
                      </div>
                      :""
                    }
                </div>
                <Button type='submit' style={{backgroundColor:'var(--orange)',width:'200px',border:'none'}} onClick={()=>savePaymentMethod()} className='mt-5'>Next</Button>
              </div>

            </Helmet>

    </div>
  )
}

export default Payment
