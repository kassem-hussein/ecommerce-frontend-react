import React,{ useState} from 'react'
import './shop.css'
import { useSelector } from 'react-redux'
import DisplayProducts from './../../Components/displayProducts/DisplayProducts';
import { Button, Modal } from 'react-bootstrap';
import Helmet from '../../Helmet';
import { SearchComponent } from '../../Components';
const Shop = () => {
  const [min ,setMin] =useState(0)
  const [max,setMax]  =useState(100)
  const [isSofa,setSofa] =useState(false)
  const [isChair,setChair] =useState(false)
  const [show,setShow] =useState(false)
  const [isMobile,setMobile] =useState(false)
  const [isWatch,setWatch] =useState(false)
  const [isWireless,setWireless] =useState(false)
  const [isPrice,setIsPrice] = useState(false)
  const [isFilter,setIsFilter] =useState(false)
  const products =useSelector(state=>state.products)
  const [productsFilter ,setProduct] =useState(products)

  let applayFilter =(e)=>{
      let myfilter =[]
      
      if(isSofa){
         myfilter =  products.filter(p=>p.category ==="sofa")
      }if(isChair){
        myfilter = [...myfilter,...products.filter(p=>p.category ==="chair")]
      }if(isMobile){
        myfilter = [...myfilter,...products.filter(p=>p.category ==="mobile")]   
      }if(isWatch){
            myfilter = [...myfilter,...products.filter(p=>p.category ==="watch")]   
      }if(isWireless){
            myfilter = [...myfilter,...products.filter(p=>p.category ==="wireless")]   
      }
      if(isPrice){
            myfilter =products.filter(p=>p.price >=min && p.price <=max)
      }
      setIsFilter(true)
      setProduct(myfilter)
      e.currentTarget.blur();


  }
  let handleSearch =(query)=>{
      if(query==='') setProduct(products);
      setProduct(products.filter(p=>p.productName.toLowerCase().includes(query.toLowerCase())))
      
  }
//   useEffect(()=>{
//       handleSearch()
//   },[Search])
  let ClearFilter =()=>{
      setMin(0)
      setMax(100)
      setChair(false)
      setMobile(false)
      setSofa(false)
      setWatch(false)
      setWireless(false)
      setIsFilter(false)
      setProduct(products)
  }
  return (
    <Helmet title="Shop">
      
     
      <div className='d-flex align-items-baseline'>
      <section className='filter filter-hide '>
                        <h4>Filter</h4>
                        <h6>Category</h6>
                        <hr/>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='sofa' value="sofa"checked={isSofa}  onChange={()=>{setSofa(!isSofa)}}/>
                              <label htmlFor="sofa">Sofa</label>   
                        </div>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='chair' checked={isChair}  value="chair" onChange={()=>{setChair(!isChair)}}/>
                              <label htmlFor="chair">Chair</label>   
                        </div>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='mobile' checked={isMobile} value="mobile" onChange={()=>{ setMobile(!isMobile)}}/>
                              <label htmlFor="mobile">Mobile</label>   
                        </div>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='watch' value="watch" checked={isWatch}  onChange={()=>{ setWatch(!isWatch)}}/>
                              <label htmlFor="watch">Watch</label>   
                        </div>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='wireless' value="wireless" checked={isWireless} onChange={()=>{ setWireless(!isWireless)}}/>
                              <label htmlFor="wireless">Wireless</label>   
                        </div>
                        <h6 className='mt-4'>Price</h6>
                        <hr/>
                        <div className='d-flex align-align-items-center mb-1'>
                              <label htmlFor="price-min" className="price-label">From</label>
                              <input type="range" min={50} max={500} id="price-min" value={min} onChange={(v)=>{ setMin(v.target.value);setIsPrice(true)}} />
                              <span className='price'>{min}</span>
                              
                        </div>
                        <div className='d-flex align-align-items-center'>
                              <label htmlFor="price-max" className='price-label'>To</label>
                              <input type="range" min={100} max={5000}  id="price-max" value={max} onChange={(v)=>{ setMax(v.target.value);setIsPrice(true)}} />
                              <span className='price'>{max}</span>
                              
                        </div>
                        <div className='d-flex'>
                              
                              <Button type='button' style={{backgroundColor:"#2E2E2E",borderColor:'#2E2E2E'}}  className='w-25 mt-3 me-1 clearBtn' onClick={()=>ClearFilter()}>
                                    <i className="fas fa-times"></i>
                              </Button>
                              <Button  className='w-75 mt-3 ' onClick={(e)=>applayFilter(e)}>Apply Filter</Button>
                        </div>
      </section>
      <Modal 
        style={{marginTop:'70px'}}
        show={show}
        onHide={()=>setShow(!show)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <section className='filter'>
                        <h6>Category</h6>
                        <hr/>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='sofa' value="sofa"checked={isSofa}  onChange={()=>{setSofa(!isSofa)}}/>
                              <label for="sofa">Sofa</label>   
                        </div>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='chair' checked={isChair}  value="chair" onChange={()=>{setChair(!isChair)}}/>
                              <label for="chair">Chair</label>   
                        </div>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='mobile' checked={isMobile} value="mobile" onChange={()=>{ setMobile(!isMobile)}}/>
                              <label for="mobile">Mobile</label>   
                        </div>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='watch' value="watch" checked={isWatch}  onChange={()=>{ setWatch(!isWatch)}}/>
                              <label for="watch">Watch</label>   
                        </div>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='wireless' value="wireless" checked={isWireless} onChange={()=>{ setWireless(!isWireless)}}/>
                              <label for="wireless">Wireless</label>   
                        </div>
                        <h6 className='mt-4'>Price</h6>
                        <hr/>
                        <div className='d-flex align-align-items-center mb-1'>
                              <label for="price-min" className="price-label">From</label>
                              <input type="range" min={50} max={500} id="price-min" value={min} onChange={(v)=>{ setMin(v.target.value)}} />
                              <span className='price'>{min}</span>
                              
                        </div>
                        <div className='d-flex align-align-items-center'>
                              <label for="price-max" className='price-label'>To</label>
                              <input type="range" min={100} max={5000} id="price-max" value={max} onChange={(v)=>{ setMax(v.target.value)}} />
                              <span className='price'>{max}</span>
                              
                        </div>
                        <div className='d-flex'>
                              <Button type='button' style={{backgroundColor:"#2E2E2E",borderColor:'#2E2E2E'}}  className='w-25 mt-3 me-1 clearBtn' onClick={()=>ClearFilter()}>
                                    <i className="fas fa-times"></i>
                              </Button>
                              <Button  className='w-50 mt-3' onClick={(e)=>applayFilter(e)}>Apply Filter</Button>
                        </div>
            </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(!show)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            

            <section className='products w-100'>
                  <div className='search-input'> 
                       <SearchComponent  onSearch={handleSearch}/>
                        <div>
                              {
                                    isFilter?<i className="ri-filter-off-line filter-icon" onClick={()=>ClearFilter()}></i>
                                    : <i className="ri-filter-line filter-icon " onClick={()=>setShow(!show)}></i>
                              }
                             
                              
                        </div>
                  </div>
                  <DisplayProducts  products={productsFilter}/>
            </section>    
      </div>
    </Helmet>
  )
}

export default Shop
