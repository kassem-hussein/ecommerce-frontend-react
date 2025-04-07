import React,{useState,useEffect} from 'react'
import Helmet from '../../Helmet'
import {Hero, DisplayProducts} from '../../Components/index'
import services from '../../asset/data/serviceData'
import products from '../../asset/data/products'
import './home.css'
const Home = () => {
  const [bestSallerProducts,setBestSallerProducts] =useState([]) 
  const [ChairProducts,setChairProducts] =useState([]) 
  const [SofaProducts,setSofaProducts] =useState([]) 
  const [MobileProducts,setMobileProducts] =useState([]) 
  const [WatchProducts,setWatchProducts] =useState([]) 
  const [WirelessProducts,setWirelessProducts] =useState([]) 
  useEffect(()=>{
      const bestSallerProducts =products.filter(p=> p.price < 150)
      const ChairProducts      =products.filter(p=>p.category === "chair")
      const SofaProducts      =products.filter(p=>p.category === "sofa")
      const MobileProducts      =products.filter(p=>p.category === "mobile")
      const WatchProducts      =products.filter(p=>p.category === "watch") 
      const WirelessProducts      =products.filter(p=>p.category === "wireless") 
      setBestSallerProducts(bestSallerProducts);
      setChairProducts(ChairProducts)
      setSofaProducts(SofaProducts)
      setMobileProducts(MobileProducts)
      setWatchProducts(WatchProducts)
      setWirelessProducts(WirelessProducts)

  },[])
  return (
      <Helmet title="Home">
            <Hero/>
            <section className='services'>
                  {
                        services.map((s,index)=>{
                              return(
                              <div key={index} className='service'  style={{backgroundColor:s.bg}}>
                                    <i className={`${s.icon} service-icon`}></i>
                                    <div className="service-info">
                                    <h5 className='service-info-title'>{s.title}</h5>
                                    <p>{s.subtitle}</p>
                              </div>
                       </div> )
                        })
                  }
                 
            </section>
            <DisplayProducts title="Best Saller" products={bestSallerProducts}/>
            <DisplayProducts title="Chairs" products={ChairProducts}/>
            <DisplayProducts title="Sofaes" products={SofaProducts}/>
            <DisplayProducts title="Phones" products={MobileProducts}/>
            <DisplayProducts title="Watches" products={WatchProducts}/>
            <DisplayProducts title="Wireless" products={WirelessProducts}/>            
      </Helmet>
      )
}

export default Home
