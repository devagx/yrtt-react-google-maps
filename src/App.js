import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";


const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const mapStyles = {
  width: "50%",
  height: "50%"
};

export class MapContainer extends Component {

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 43.279318800000006,
            lng: -1.4757244
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);