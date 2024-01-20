import React, { useState, useEffect } from 'react';
import Ritem from './components/Ritem';
import './App.css';
import GoogleMap from './components/GoogleMap';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/restaurants')
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='containerApp'>
      <div className='coloanaRestaurante'>
        <h1>Lista Restaurante</h1>
        {restaurants.map((restaurant) => (
          <Ritem key={restaurant.id} item={restaurant} />
        ))}
      </div>
      <div className='harta'>
        <div>
          <GoogleMap restaurants={restaurants} />
        </div>
      </div>
    </div>
  );
}

export default App;
