import React,{useState,useEffect} from 'react'
import './product.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/CartSlice'
import { addproduct ,removeproduct} from '../../redux/heartSlice'
import { Link } from 'react-router-dom'
const Product = ({product}) => {
  const {imgUrl,productName,price,shortDesc}  =product
  const shortDes =shortDesc.split(" ")[0] +" "+shortDesc.split(" ")[0]
  const [ishove,setHover] =useState(false)
  const [isLove,setLove] =useState(false)
  const dispatch =useDispatch()
  const heartProduct =useSelector((state)=>state.heart)
  let handleClick =()=>{
    dispatch(addToCart(product))
  }
  let addheart =()=>{
    dispatch(addproduct(product))
  }
  let removeHeart =()=>{
    dispatch(removeproduct(product))
    setLove(false)
  }
  useEffect(()=>{
    heartProduct.find(p=>p.id === product.id) && setLove(true)
  },[heartProduct,product])
  return (
    <div className='product'  onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
       <img className='product-img' src={imgUrl} alt='8888'/>
       <div className='product-header'>
          <Link to={`/products/${product.id}`} style={{color:'black'}}><h4 className='product-title'>{productName}</h4></Link>
       </div>
       <div className='product-info'>
          <p className='product-short-decs'>{shortDes}...</p>
          <div className='product-price'>${price}</div>
       </div>
          
       {
        ishove?
        <div className='product-img-hove'>
          {
            isLove?<i class="ri-heart-fill heart-icon" onClick={()=>removeHeart()}></i>:
            <i className="ri-heart-line product-img-icon-hove-heart " onClick={()=>addheart() }></i>

          }

            <i className="ri-shopping-cart-2-line product-img-hove-icon " onClick={()=>handleClick()}></i>
        </div>:''
       }
       
    </div>
  )
}

export default Product
