import React,{ useState} from 'react'
import './shop.css'
import { useSelector } from 'react-redux'
import DisplayProducts from './../../Components/displayProducts/DisplayProducts';
import { Button, Modal } from 'react-bootstrap';
import Helmet from '../../Helmet';
import { SearchComponent } from '../../Components';
const Shop = () => {
      const products =useSelector(state=>state.products)
      const [selectedCategories, setSelectedCategories] = useState([]);
      const [priceRange, setPriceRange] = useState([0, 1000]);
      const [filteredProducts, setFilteredProducts] = useState(products);
      const [show,setShow] =  useState(false);
      const [isFilter,setIsFilter] =  useState(false);
    
      const handleFilter = () => {
            const results = products.filter(
            (product) =>
            (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
            product.price >= priceRange[0] &&
            product.price <= priceRange[1]
            );
            setFilteredProducts(results);
            setIsFilter(true);
      };
  
    const handleCategoryChange = (category) => {
      setSelectedCategories((prev) =>
        prev.includes(category)
          ? prev.filter((cat) => cat !== category)
          : [...prev, category]
      );
    };


  let handleSearch =(query)=>{
      if(query==='') setFilteredProducts(products);
      setFilteredProducts(products.filter(p=>p.productName.toLowerCase().includes(query.toLowerCase())))
      
  }

  let ClearFilter =()=>{
      setFilteredProducts(products)
      setSelectedCategories([]);
      setIsFilter(false);
      setPriceRange([0,1000])
  }
  return (
    <Helmet title="Shop">
      
     
      <div className='d-flex align-items-baseline'>
      <section className='filter filter-hide '>
                        <h4>Filter</h4>
                        <h6>Category</h6>
                        <hr/>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='sofa' checked={selectedCategories.includes('sofa')} value="sofa"  onChange={()=>handleCategoryChange('sofa')}/>
                              <label htmlFor="sofa">Sofa</label>   
                        </div>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='chair' checked={selectedCategories.includes('chair')}  value="chair" onChange={()=>handleCategoryChange('chair')}/>
                              <label htmlFor="chair">Chair</label>   
                        </div>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='mobile'checked={selectedCategories.includes('mobile')} value="mobile" onChange={()=>{handleCategoryChange('mobile')}}/>
                              <label htmlFor="mobile">Mobile</label>   
                        </div>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='watch' value="watch" checked={selectedCategories.includes('watch')}  onChange={()=>handleCategoryChange('watch')}/>
                              <label htmlFor="watch">Watch</label>   
                        </div>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='wireless' value="wireless" checked={selectedCategories.includes('wireless')} onChange={()=>{handleCategoryChange('wireless')}}/>
                              <label htmlFor="wireless">Wireless</label>   
                        </div>
                        <h6 className='mt-4'>Price</h6>
                        <hr/>
                        <div className='d-flex align-align-items-center mb-1'>
                              <label htmlFor="price-min" className="price-label">From</label>
                              <input type="range" min={50} max={500} id="price-min" value={priceRange[0]} onChange={(v)=>{setPriceRange([parseInt(v.target.value),priceRange[1]])}} />
                              <span className='price'>{priceRange[0]}</span>
                              
                        </div>
                        <div className='d-flex align-align-items-center'>
                              <label htmlFor="price-max" className='price-label'>To</label>
                              <input type="range" min={0} max={5000}  id="price-max" value={priceRange[1]} onChange={(v)=>setPriceRange([priceRange[0],parseInt(v.target.value)])} />
                              <span className='price'>{priceRange[1]}</span>
                              
                        </div>
                        <div className='d-flex'>
                              
                              <Button type='button' style={{backgroundColor:"#2E2E2E",borderColor:'#2E2E2E'}}  className='w-25 mt-3 me-1 clearBtn' onClick={()=>ClearFilter()}>
                                    <i className="fas fa-times"></i>
                              </Button>
                              <Button  className='w-75 mt-3 ' onClick={(e)=>handleFilter(e)}>Apply Filter</Button>
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
                              <input type="checkbox" name="" id='sofa'  checked={selectedCategories.includes('sofa')} value="sofa"  onChange={()=>handleCategoryChange('sofa')}/>
                              <label for="sofa">Sofa</label>   
                        </div>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='chair'checked={selectedCategories.includes('chair')}   value="chair" onChange={()=>handleCategoryChange('chair')}/>
                              <label for="chair">Chair</label>   
                        </div>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='mobile' checked={selectedCategories.includes('mobile')} value="mobile" onChange={()=>handleCategoryChange('mobile')}/>
                              <label for="mobile">Mobile</label>   
                        </div>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='watch' value="watch" checked={selectedCategories.includes('watch')}  onChange={()=>handleCategoryChange('watch')}/>
                              <label for="watch">Watch</label> 
                        </div>
                        <div className='Shop-filter-item'>
                              <input type="checkbox" name="" id='wireless' value="wireless" checked={selectedCategories.includes('wireless')} onChange={()=>handleCategoryChange('wireless')}/>
                              <label for="wireless">Wireless</label>   
                        </div>
                        <h6 className='mt-4'>Price</h6>
                        <hr/>
                        <div className='d-flex align-align-items-center mb-1'>
                              <label for="price-min" className="price-label">From</label>
                              <input type="range" min={50} max={500} id="price-min" value={priceRange[0]} onChange={(v)=>setPriceRange([parseInt(v.target.value),priceRange[1]])} />
                              <span className='price'>{priceRange[0]}</span>
                              
                        </div>
                        <div className='d-flex align-align-items-center'>
                              <label for="price-max" className='price-label'>To</label>
                              <input type="range" min={100} max={5000} id="price-max" value={priceRange[1]} onChange={(v)=>setPriceRange([priceRange[0],parseInt(v.target.value)])} />
                              <span className='price'>{priceRange[1]}</span>
                              
                        </div>
                        <div className='d-flex'>
                              <Button type='button' style={{backgroundColor:"#2E2E2E",borderColor:'#2E2E2E'}}  className='w-25 mt-3 me-1 clearBtn' onClick={()=>ClearFilter()}>
                                    <i className="fas fa-times"></i>
                              </Button>
                              <Button  className='w-50 mt-3' onClick={(e)=>handleFilter(e)}>Apply Filter</Button>
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
                        <div className="d-flex align-items-center">
                              <i title='show fillter' className="ri-filter-line filter-icon " onClick={()=>setShow(!show)}></i>
                              {
                                    isFilter?<i title='clear filter' className="ri-filter-off-line filter-icon" onClick={()=>ClearFilter()}></i>
                                    :""
                                      
                              }
                  
                              
                        </div>
                  </div>
                  <DisplayProducts  products={filteredProducts}/>
            </section>    
      </div>
    </Helmet>
  )
}

export default Shop
