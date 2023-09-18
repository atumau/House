import React, { useState } from 'react';
import './Styles/list.css';
import Menu from './menucard';
import { Link } from 'react-router-dom';

const List = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <h1 className='head text-center mt-5'>House Listing</h1>
      <div className='menu-items container-fluid'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row my-1'>
              {items.map((elem) => {
                const { name, image, description, price } = elem;
                return (
                  <div className='col-12 col-md-6 col-lg-4 my-3' key={name}>
                    <div className='card'>
                      <img src={image} alt={name} className='card-img-top' />
                      <div className='card-body'>
                        <h5 className='card-title'>{name}</h5>
                        <p className='card-text'>{description}</p>
                        <h6 className='card-price'>Price: {price}</h6>
                        <Link to='/contact'>
                          <button className='btn1 btn-primary'>
                            Contact Owner
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
