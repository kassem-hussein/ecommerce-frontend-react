import React,{useState} from 'react'
import './signup.css'
import { Button } from 'react-bootstrap'
import { addInfo } from '../../redux/userSilce'
import { Link, useNavigate } from 'react-router-dom'
import Helmet from '../../Helmet'
import { useDispatch, useSelector } from 'react-redux'
const SignUp = () => {
  const [username,setUsername] =useState('')
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const [repassword,setRepassword] =useState('')
  const dispatch= useDispatch()
  const navigate= useNavigate()
  const user  = useSelector(state=>state.user)
  const SaveUser =(e)=>{
      e.preventDefault();
      if(user.email === email){
            alert('email already exits')
            return 
      }
      if(username.length > 8){
            alert('username al most upper 8 char')
            return 
      }
      if(!email.includes('@')){
            alert('please enter correct email')
            return
      }
      if(password !==repassword){
            alert('password and repassword should be same')
            return
      }
      dispatch(addInfo({username,email,password,isLogin:false,address:{}}))
      navigate('/login')

  }
  return (
    <div className='container myForm' >

            <Helmet title={"Sign-up"}>
                  <h1 className='text-center mt-5 mb-4'>Sign up</h1>
                  <div className='container w-100' >
                        <form className='form' onSubmit={SaveUser} >
                                    <label forhtml="username" className='mb-1'>username :</label>
                                    <input type="text" id='username' placeholder='username' required className='mb-3 form-control' onChange={(value)=>setUsername(value.target.value)} />
                                    <label forhtml="email" className='mb-1'>Emal :</label>
                                    <input type="email" id="email" required placeholder='email' className='mb-3 form-control' onChange={(value)=>setEmail(value.target.value)}/>
                                    <label forhtml="password" className='mb-1'>password :</label>
                                    <input type="password" id='password' required placeholder='********' className='mb-3 form-control' onChange={(value)=>setPassword(value.target.value)}/>
                                    <label forhtml="repassword" className='mb-1' >repassword :</label>
                                    <input type="password" id="repassword" required placeholder='********' className='mb-3 form-control' onChange={(value)=>setRepassword(value.target.value)}/>
                                    <Button type='submit' className="w-100">Sign up</Button>
                                    <div className='mt-3'>
                                          <span>have you an account ?   </span><Link style={{color:'var(--orange)'}} to={'/login'}>Sign in</Link>
                                    </div>     
                        </form>     
                  </div>
            </Helmet>
    </div>
  )
}

export default SignUp
