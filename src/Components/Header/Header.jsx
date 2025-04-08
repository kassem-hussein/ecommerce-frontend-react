import React,{ useState} from 'react'
import { Container, Dropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { addInfo } from '../../redux/userSilce'
const Header = () => {
  const [visabale,setVisable] =useState(false)
  const cart = useSelector((state) => state.cart)
  const heart = useSelector((state) => state.heart)
  const user = useSelector((state) => state.user)
  const dispatch =useDispatch()
  const navigate =useNavigate()
  const count =cart.length
  const loveProductCount =heart.length
  const removeUser =()=>{
    dispatch(addInfo({...user,isLogin:false}))
    navigate('/login');
  }

 
  return (
    <div className='N-bg-color'>
      <Container className='N-height'>
        <nav className='N-nav'>
          <div className='N-brand'>
              <Link className='link' to="/"><span className='N-brand-e'>e</span>Shop</Link>
          </div>
         
          <div className='N-nav-item'>
              <Link to={"/"} className='link  me-1' >Home</Link>
              <Link to={"/shop"} className='link  me-1'>Shop</Link>
              <Link to={"/about"} className='link  me-1'>About</Link>
              <Link to={"/contact"} className='link  me-1'>Contact-us</Link>         
          </div>

            <div>
              <Link to={"/cart"} className='link N-nav-icon me-3'>
                <i className="ri-shopping-bag-line"></i>
                <span className="N-nav-cart-item-number">{count}</span>
                </Link>
              <Link to={"/heart"} className='link N-nav-icon me-3'>
              <span className="N-nav-cart-item-number">{loveProductCount}</span>
                <i className="ri-heart-line"></i>
                </Link>
              <Link className='link N-nav-icon me-1'>
                {
                  user.username&&user.isLogin?
                  <Dropdown style={{display:'inline-block'}}>
                  <Dropdown.Toggle style={{backgroundColor:'var(--orange)',border:'none'}} id="dropdown-basic">
                  <i className="ri-user-line me-1"></i>
                  </Dropdown.Toggle>
            
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">{user.username}</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Orders</Dropdown.Item>
                    <Dropdown.Item onClick={()=>removeUser()}>logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>: 
                   <i className="ri-user-line me-1"></i>
                }
              
                </Link>
              {
                
                visabale? ""
                :<i className="N-mobile-menu ri-menu-line" onClick={()=>setVisable(!visabale)}></i>
              }
            </div>
        </nav>
        {
              visabale?<div className='N-nav-item-mobile'>
              <i className="N-mobile-menu ri-close-line rtate align-self-end bg-body p-2" onClick={()=>setVisable(!visabale)}></i>
              <Link to={"/"}   onClick={()=>setVisable(!visabale)}     className='M-link me-1'>Home</Link>
              <Link to={"/shop"} onClick={()=>setVisable(!visabale)}    className='M-link  me-1'>Shop</Link>
              <Link to={"/about"} onClick={()=>setVisable(!visabale)}   className='M-link  me-1'>About</Link>
              <Link to={"/contact"}onClick={()=>setVisable(!visabale)}  className='M-link  me-1'>Contact-us</Link> 
            </div>:""
            }
      </Container>
    </div>
  )
}

export default Header
