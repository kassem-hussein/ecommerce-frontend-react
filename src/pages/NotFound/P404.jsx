import React from 'react'
import Helmet from '../../Helmet'

const P404 = () => {
  return (
    <Helmet title={"Not Found"}>
      <div style={{height:"60vh"}} className='d-flex justify-content-center align-items-center'>
            <h3>404 Page Not Found</h3>
      </div>
    </Helmet>
  )
}

export default P404
