import React,{useState} from 'react'
import './Styles/featuredhome.css'
import Menu from './menucard'
import { Link } from 'react-router-dom'

const FeaturedHome = () => {

  const [items,setItems]=useState(Menu);
  const filterItem =(categItem)=>{
    const updatedItems = Menu.filter((curElem)=>{
       return curElem.category === categItem;
    });
    setItems(updatedItems);
  }


  return (<>
    <h1 className='mt-5 text-center main-heading'>Featured Homes</h1>
    <hr/>
    <div className='menu-tabs container'>
      <div className='menu-tab d-flex justify-content-around'>
        <button className='btn btn-warning'onClick={()=>filterItem('rent')}>Rental</button>
        <button className='btn btn-warning'onClick={()=>filterItem('sale')}>Sale</button>
        <button className='btn btn-warning'onClick={()=>setItems(Menu)}>All</button>
      </div>
    </div>
    {/* my main card section*/}
    <div className='menu-items container-fluid mt-5'>
      <div className='row'>
        <div className='col-11 mx-auto'>
          <div className='row my-5'>

{
  items.map((elem)=>{
    const{ name, image, description, price}=elem;
    return(
      <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4 my-3 mx-1'>
              <div className='row Item-inside'>
              {/* for images*/}
                <div className='col-12 col-md-12 col-lg-4 img-div'>
                  <img src={image} alt={name} className='img-fluid'/>
                </div>
                {/* menu description*/}
                <div className='col-12 col-md-12 col-lg-8'>
                  <div className='main-title pt-4 pb-3'>
                    <h1>{name}</h1>
                    <p className='para-title'>{description}</p>
                  </div>
                  <div className='menu-price-book'>
                    <div className='price-book-divide d-flex justify-content-between'>
                     <h2>Price : {price}</h2>
                     <Link to='/contact'>
                      <button className='btn btn-primary'>Contact Owner</button>
                     </Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>

    )
  })
}

            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FeaturedHome