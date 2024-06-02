import React from 'react'
import { Button, Row } from 'react-bootstrap';
import './contact.css'
import Helmet from '../../Helmet';
const Contact = () => {
  return (
    <div className='mt-5'>
      <Helmet title='Contact'>

      <Row>
            <h3 style={{textAlign:'center'}}>Contact Us</h3>
                  <div className='contact'>
                         <div className='contact-form'>
                              
                              <label forhtml="">Name :</label>
                              <input type="" name="" />
                              <label forhtml="">Emal :</label>
                              <input type="" name="" />
                              <label forhtml="">message :</label>
                              <textarea rows="2" cols="30" ></textarea>
                              <Button style={{backgroundColor:'var(--orange)',border:'none'}}>Send</Button>
                        </div>
                        <div className='contact-info'>
                              
                              <div className='contact-us-item'>
                                    <div>
                                          <i className="ri-map-pin-line"></i>  
                                    </div>
                                    <div>
                                          Syria,damscus
                                    </div>
                              </div>
                              
                        
                        
                              <div className='contact-us-item'>
                                    <div>
                                          <i className="ri-mail-fill"></i>
                                    </div>
                                    <div>
                                          shop@nomida.com
                                    </div>
                              </div>
                              
                        
                        

                              <div className='contact-us-item'>
                                    <div>
                                          <i className="ri-phone-line"></i> 
                                    </div>
                                    <div>
                                    99925550
                                    </div>
                                    
                              </div>
                        </div>
                        
                        
                  </div>
                  
                  
           
      </Row>


      </Helmet>
    </div>
  )
}

export default Contact
