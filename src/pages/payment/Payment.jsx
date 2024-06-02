import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { Steps } from '../../Components'
import Helmet from '../../Helmet'
import './payment.css'
import { Button } from 'react-bootstrap'
import { addInfo } from '../../redux/userSilce'
const Payment = () => {
  const user =useSelector(state=>state.user)
  const [isPaypal,setPaypal] =useState(false) 
  const [isStripe,setStripe] =useState(false) 
  const dispatch =useDispatch()
  const navigate =useNavigate()
  
  const savePaymentMethod =()=>{
      if(!isPaypal && !isStripe){
          alert('please choose payment method')
          return
      }
      if(isPaypal){
        dispatch(addInfo({...user,paymentMethod:'paypal'}))
      }else{
        dispatch(addInfo({...user,paymentMethod:'stripe'}))
      }
      navigate('/place-order')
  }
  
  useEffect(()=>{

      if(Object.keys(user).length ===0){
            navigate('/login')
        }else if(Object.keys(user.address).length ===0){
          navigate('/address')
        }


  },[user,navigate,isPaypal,isStripe])
  return (
    <div className='container mt-5' style={{minHeight:'40vh'}}>
            <Helmet title="payment">

              <Steps step1 step2 step3/>
              <h3 className='text-center mt-5'>Payment Method</h3>
              <div className='payment-method'>
                <div>
                    <input type="radio" id='paypal' name="payment-method" onChange={v=>setPaypal(v.target.value)}  className='me-1'/>
                    <label forhtml="paypal" className='me-1'>Paypal</label>
                </div>
                <div>
                    <input type="radio" id='stripe' name="payment-method" onChange={v=>setStripe(v.target.value)} className='me-1'/>
                    <label forhtml="stripe" className='me-1'>Stripe</label>  
                </div>
                <Button type='submit' style={{backgroundColor:'var(--orange)',width:'200px',border:'none'}} onClick={()=>savePaymentMethod()} className='mt-5'>Next</Button>
              </div>

            </Helmet>

    </div>
  )
}

export default Payment
