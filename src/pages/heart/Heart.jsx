import React from 'react'
import { useSelector } from 'react-redux'
import { DisplayProducts } from '../../Components'
import { Alert } from 'react-bootstrap'
import Helmet from '../../Helmet'

const Heart = () => {
 const cartItem =useSelector(state=>state.heart)

  return (
    <div className='mt-5' style={{minHeight:'40vh'}}>
      <Helmet title="Love products" className="">
        {
              cartItem.length===0?
              <div className='d-flex justify-content-center'>
                    <Alert className='w-50 text-center ' variant='warning'>NO Love product</Alert>    
              </div> 
              :<DisplayProducts title="Love product" products={cartItem}/>
        }
        
      </Helmet>
    </div>
  )
}

export default Heart
