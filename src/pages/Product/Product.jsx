import React, { useState,useEffect } from 'react'
import Helmet from '../../Helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Col, Row } from 'react-bootstrap'
import { addToCart } from '../../redux/CartSlice'
import Review from '../../Components/Review/Review'
import DisplayProducts from './../../Components/displayProducts/DisplayProducts';
const Product = () => {
 const {id} =useParams();
 const navigate =useNavigate()
 const dispatch =useDispatch()
 const [relatedProduct,setRelatedProduct] =useState()
 const   products =useSelector(state=>state.products)
 const product ={...products.filter(p=>p.id === id)[0]}
 if(!product.productName){
      navigate('/404')
 }
 let addItem =()=>{
      dispatch(addToCart(products.filter(p=>p.id === id)[0]))
      navigate("/cart")
 }
 useEffect(()=>{
      setRelatedProduct(products.filter(p=>p.category ===product.category&&p.id !==product.id))
 },[products])
  return (
    <Helmet title={product.productName}>
      <Row>
            <Col lg={6} sm={12}>
                  <img style={{width:'80%'}} src={product.imgUrl} alt="1"/>
            </Col>
            <Col lg={6} sm={12} className='mt-3 p-5'>
                  <h5>{product.productName}</h5>
                  <h6>${product.price}</h6>  
                  <h5>review ({product.avgRating}) <Review number={product.avgRating}/></h5>
                  <p>{product.description}</p>      
                  <Button onClick={()=>addItem()} style={{backgroundColor:'var(--orange)',border:'none'}}>Add to cart </Button>
                
            
            </Col>
      </Row>
      <DisplayProducts title="Related Product" products={relatedProduct}/>

    </Helmet>
  )
}

export default Product
