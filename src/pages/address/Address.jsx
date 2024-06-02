import React,{useState,useEffect} from 'react'
import Helmet from '../../Helmet'
import { Steps } from '../../Components'
import { Button } from 'react-bootstrap'
import './address.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addInfo } from '../../redux/userSilce'
const Address = () => { 
  const {address} =useSelector(state=>state.user)
  const user =useSelector(state=>state.user)
  const dispatch =useDispatch()
  const navigate =useNavigate()
  const [country,setCountry] =useState(address?.country||'')
  const [city,setCity] =useState(address?.city||'')
  const [street,setStreet] =useState(address?.street||'')
  const [zip,setZip] =useState(address?.zip||'')
  const saveAddress =()=>{
      if(country && city && street && zip){
            dispatch(addInfo({...user,address:{country,city,street,zip}}))
            navigate('/payment')
      }else{
            alert('plase enter all address information')
      }

  }
  useEffect(()=>{
      if(!address){
            navigate('/login')
      }   
  },[address,navigate])
  return (
    <div className='container mt-5 '>
      <Helmet title='Address'>
            <Steps step1 step2></Steps>
            <div className='container myForm ' >
                        <div className='login-form '>
                                    <label forhtml="country" className='mb-1'>Country :</label>
                                    <input type="text" id='country' required className='mb-3' value={country} onChange={v=>setCountry(v.target.value)} />
                                    <label forhtml="city" className='mb-1'>City :</label>
                                    <input type="text" id="city" required className='mb-3'value={city} onChange={v=>setCity(v.target.value)} />
                                    <label forhtml="street" className='mb-1'>Street:</label>
                                    <input type="text" id='street' required className='mb-3' value={street} onChange={v=>setStreet(v.target.value)}/>
                                    <label forhtml="zip" className='mb-1' >zip code :</label>
                                    <input type="number" id="zip" max={9999} required className='mb-3' value={zip} onChange={v=>setZip(v.target.value)}/>
                                    <Button type='submit' style={{backgroundColor:'var(--orange)',border:'none'}} onClick={()=>saveAddress()}>Next</Button>
                                    
                                    
                              
                        </div>
                                    
                  </div>
      </Helmet>
    </div>
  )
}

export default Address
