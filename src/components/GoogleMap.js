import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class GoogleMap extends React.Component {
  render() {
    console.log('Restaurants:', this.props.restaurants);

    const { google, restaurants } = this.props;
    console.log(restaurants)

    const mapStyles = {
      width: '40%',
      height: '500px',
      marginTop: '100px',
    };

    const center = { lat: 44.439663, lng: 26.096306 };

    return (
      <Map
        google={google}
        zoom={11.5}
        style={mapStyles}
        initialCenter={center}
      >
        {this.props.restaurants.map((restaurant) => (
          <Marker
            key={restaurant.id}
            position={{ lat: restaurant.latitudine, lng: restaurant.longitudine }}
            title={restaurant.denumire}
            icon={{
              url: restaurant.img,
              scaledSize: new google.maps.Size(70, 70),
            }}
          />
        ))}
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDcemjPywRDg8rLVk4Nz6X5sgA_aogyGuA',
})(GoogleMap);
