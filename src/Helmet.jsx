import React from 'react'

const Helmet = (props) => {
  document.title="eshop - "+props.title
  window.scrollTo(0, 0);
  return (
    <div style={{minHeight:"60vh"}}>
      {props.children}
    </div>
  )
}

export default Helmet
