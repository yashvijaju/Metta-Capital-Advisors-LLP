import React,{Component} from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


const styleMap = {
    width: '98.75vw',
    height: '70vh',
  };

  const styleDiv = {
    'line-height': '0',
    float: 'left'
  };


class GoogleApiWrapperr extends Component {
    state = {
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };
    render() {
        return (
          <div style={styleDiv}>
            <Map
                google={this.props.google}
                zoom={15}
                style={styleMap}
                initialCenter={{ lat: 19.097527, lng: 72.849939}}
              >
                  <Marker onClick={this.onMarkerClick} name={'Metta Capital Advisors LLp'} position={{ lat: 19.097527, lng: 72.849939}} />
                  <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                  >
                    <div>
                      <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                  </InfoWindow>
              </Map>
          </div>
              
        );
      }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAi2m0YJB80qpuva9E7X5oMTKTDGaqY7JU'
  })(GoogleApiWrapperr);