import React from 'react'
import {Product} from '../../Components/index'
import './dispaly.css'
const DisplayProducts = ({products,title}) => {
  return (
    <>
      <section className='display'>
                  <h3 className='display-title mt-5 mb-3'>{title}</h3>
                        <div className='display-products'>
                             
                                    
                                     {
                                          products?.map(p=>{
                                                return <Product key={p.id} product={p}/>
                                          })
                                    }
                        </div>

                  
      </section>
      
    </>
  )
}

export default DisplayProducts
