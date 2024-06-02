import React from 'react'
import './review.css'
const Review = ({number}) => {
  return (
    <div>
        {
              number<1?<i className="ri-star-half-fill  star-icon"></i>:number >= 1?
              <i className="ri-star-fill star-icon"></i>:<i className="ri-star-line star-icon"></i>
        }
        {
          number<2&&number>1?<i className="ri-star-half-fill star-icon"></i>:number >=2?
          <i className="ri-star-fill star-icon"></i>:<i className="ri-star-line star-icon"></i>
        }
        {
          number<3&&number>2?<i className="ri-star-half-fill star-icon"></i>:number >=3?
          <i className="ri-star-fill star-icon"></i>:<i className="ri-star-line star-icon"></i>
        }
        {
          number<4&&number>3?<i className="ri-star-half-fill star-icon"></i>:number >=4?
          <i className="ri-star-fill star-icon"></i>:<i className="ri-star-line star-icon"></i>
        }
        {
          number<5&&number>4?<i className="ri-star-half-fill star-icon"></i>:number >=5?
          <i className="ri-star-fill star-icon"></i>:<i className="ri-star-line star-icon"></i>
        }
    </div>
  )
}

export default Review
