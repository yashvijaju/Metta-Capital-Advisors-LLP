import React,{Component} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const style = {
    width: '55vw',
    height: '70vh',
  };


class GoogleApiWrapperr extends Component {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={15}
              style={style}
              initialCenter={{ lat: 19.097527, lng: 72.849939}}
            >
                <Marker position={{ lat: 19.097527, lng: 72.849939}} />
            </Map>
        );
      }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAi2m0YJB80qpuva9E7X5oMTKTDGaqY7JU'
  })(GoogleApiWrapperr);