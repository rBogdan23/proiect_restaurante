import React from 'react';
import './Ritem.css';

const Ritem = ({ item }) => {
  return (
    <div>
      <div className='container'>
        <div className='image'>
          <img className="restaurant-image" src={item.img} alt={item.denumire} />
        </div>
        <div className='denumire_adresa'>
          <p className='denumire'>{item.denumire}</p>
          <p className='adresa'>{item.adresa}</p>
        </div>
      </div>
    </div>
  );
}

export default Ritem;
