import React, { useState } from 'react'
import './sign.css'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Helmet from '../../Helmet'
import { useDispatch, useSelector } from 'react-redux'
import { addInfo } from '../../redux/userSilce'

const Sign = () => {
  const [username,setUsername] =useState()
  const [password,setPassword] =useState()
  const navigate =useNavigate()
  const dispatch =useDispatch()
  const user = useSelector(state=>state.user)
  const login =(e)=>{
    e.preventDefault();
      if(username === user.username && password === user.password){
          dispatch(addInfo({...user,isLogin:true}))
          navigate('/place-order')
      }else{
        alert('username or password not correct')
      }
  }
  return (
    <div className='container mt-5 '>
            <Helmet title={'Sign-in'}>
                        <h1 className='text-center mt-5 mb-4'>Sign-In</h1>
                        <div className='container myForm' >
                              <form className='from' onSubmit={login}>
                                          <label forhtml="username" className='mb-1'>username</label>
                                          <input type="text" id="username" name="username" placeholder='Username' onChange={v=>setUsername(v.target.value)} className='mb-3 form-control' />
                                          <label forhtml="password" className='mb-1'>password :</label>
                                          <input type="password" placeholder='*********' name='password' id="password" className='mb-3 form-control' onChange={v=>setPassword(v.target.value)}/>
                                          <Button type='submit' className='w-100'>Sign in</Button>
                                          <div className='mt-3'>
                                                <span>Don't have an account :  </span><Link style={{color:'var(--orange)'}} to={'/signup'}>Sign up</Link>
                                          </div>
                              </form>
                                          
                        </div>
                  
            </Helmet>
    </div>
  )
}

export default Sign
